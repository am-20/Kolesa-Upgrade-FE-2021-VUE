<template>
  <section class="main__content">
    <div class="banner">
      <img :src="require(`@/assets/banner.png`)" alt="banner" />
    </div>
    <hot-keys></hot-keys>
    <tabs></tabs>
    <card-list></card-list>
    <modal
      :data="modalData"
      :isOpen="isShowModal"
      @close="closeModal"
      @order="setScore"
    ></modal>
  </section>
</template>

<script>
import axios from "@/axios";

import HotKeys from "./components/HotKeys.vue";
import Tabs from "./components/Tabs.vue";
import CardList from "./components/Card.vue";
import Modal from "./components/Modal.vue";

export default {
  name: "Shop",
  components: {
    HotKeys,
    Tabs,
    CardList,
    Modal,
  },
  props: {},
  data() {
    return {
      clothes: [],
      accessories: [],
      isShowModal: false,
      tabs: ["Все товары", "Одежда", "Аксессуары"],
      tabsActive: 0,
      modalData: {},
    };
  },
  mounted() {
    this.fetchClothes();
    this.fetchAccessories();
  },
  computed: {
    allCards() {
      return this.clothes.concat(this.accessories).sort(this.newSort);
    },
    show() {
      if (this.tabsActive === 0) {
        return this.allCards;
      }

      if (this.tabsActive === 1) {
        return this.clothes;
      }

      if (this.tabsActive === 2) {
        return this.accessories;
      }

      return this.tabsActive;
    },
  },
  methods: {
    newSort(x, y) {
      if (x.isNew === y.isNew) {
        return 0;
      }
      if (x.isNew) {
        return -1;
      }
      return 1;
    },
    openModal() {
      this.isShowModal = true;
    },
    closeModal() {
      this.isShowModal = false;
    },
    openCard(data) {
      console.log(data);
      this.openModal();
      this.modalData = data;
    },
    fetchClothes() {
      axios.get("templates/-_RLsEGjof6i/data").then(({ data }) => {
        this.clothes = data || [];
      });
    },
    fetchAccessories() {
      axios.get("templates/q3OPxRyEcPvP/data").then(({ data }) => {
        this.accessories = data || [];
      });
    },
  },
};
</script>
