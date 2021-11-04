<template>
  <div class="main__items" ref="catalog">
    <div class="card" v-for="card in allCards" :key="card.id">
      <div class="card__image">
        <img
          @click="setName"
          :src="require(`@/assets/${card.img}`)"
          alt="Модная футболка"
          class="card__photo"
        />
        <span class="card__beige" v-if="card.isNew">new</span>
      </div>
      <div class="card__description">
        <p class="card__price">{{ card.price }} баллов</p>
        <h3 class="card__title">{{ card.title }}</h3>
        <p class="card__size">Размеры S/M/L</p>
        <button type="button" class="card__btn" hidden @click="openModal">
          Заказать
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardList",
  props: {},
  data() {
    return {
      clothes: [
        {
          id: 0,
          img: "image_4.png",
          title: "Футболка 'Эволюционируй или сдохни'",
          price: 220,
          isNew: true,
          details:
            "Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%",
        },
        {
          id: 1,
          img: "image_4.png",
          title: "Футболка 'Эволюционируй или сдохни'",
          price: 220,
          isNew: false,
          details:
            "Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%",
        },
        {
          id: 2,
          img: "sweatshirt.jpg",
          title: "Свитшот",
          price: 100,
          isNew: true,
          details: "Брендированный свитшот",
        },
        {
          id: 3,
          img: "sweatshirt.jpg",
          title: "Свитшот",
          price: 100,
          isNew: false,
          details: "Брендированный свитшот",
        },
        {
          id: 4,
          img: "polo.png",
          title: "Поло",
          price: 340,
          isNew: true,
          details: "Брендированное поло",
        },
        {
          id: 5,
          img: "polo.png",
          title: "Поло",
          price: 340,
          isNew: false,
          details: "Брендированное поло",
        },
      ],
      accessories: [
        {
          id: 6,
          img: "bottle.png",
          title: "Бутылка для воды",
          price: 100,
          isNew: true,
          details: "Бутылка для воды с трубочкой",
        },
        {
          id: 7,
          img: "bottle.png",
          title: "Бутылка для воды",
          price: 100,
          isNew: false,
          details: "Бутылка для воды с трубочкой",
        },
        {
          id: 8,
          img: "cap.png",
          title: "Кепка",
          price: 150,
          isNew: true,
          details: "Брендированная кепка",
        },
        {
          id: 9,
          img: "cap.png",
          title: "Кепка",
          price: 150,
          isNew: false,
          details: "Брендированная кепка",
        },
        {
          id: 10,
          img: "coffee_cup.jpg",
          title: "Стакан для кофе",
          price: 50,
          isNew: true,
          details: "Стакан для кофе",
        },
        {
          id: 11,
          img: "coffee_cup.jpg",
          title: "Стакан для кофе",
          price: 50,
          isNew: false,
          details: "Стакан для кофе",
        },
      ],
    };
  },
  computed: {
    allCards() {
      return this.clothes.concat(this.accessories).sort(this.newSort);
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
  },
  setName() {
    this.$store.commit("setName", "Anderson");
    this.$store.dispatch("updateUserInfo", "Anderson");
  },
};
</script>
