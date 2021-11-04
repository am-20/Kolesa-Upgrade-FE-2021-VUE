<template>
  <div class="tabs">
    <button
      v-for="(tab, index) in tabs"
      :key="index"
      class="tabs__btn"
      :class="{ 'tabs__btn--active': index === tabsActive }"
      @click="activeTab(index)"
      type="button"
      data-key="all"
    >
      {{ tab }}
    </button>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  data() {
    return {
      tabs: ["Все товары", "Одежда", "Аксессуары"],
      tabsActive: 0,
    };
  },
  methods: {
    activeTab(index) {
      this.tabsActive = index;
    },
  },
};
</script>
