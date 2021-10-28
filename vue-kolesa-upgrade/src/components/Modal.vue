<template>
  <div>
    <!-- Backdrop -->
    <div class="modal__backdrop" v-if="isOpen" @click="closeModal()"></div>
    <!-- Modal -->
    <div class="modal" v-if="isOpen">
      <div class="modal__content">
        <button type="button">
          <img
            :src="require(`@/assets/Close/close_big.svg`)"
            alt="close sign"
            class="modal__close"
            @click="closeModal()"
          />
        </button>
        <div class="modal__body">
          <div class="modal__images">
            <img
              :src="require(`@/assets/${data.img}`)"
              alt="Самая модная футболка"
            />
            <div class="modal__previews">
              <img
                class="modal__img"
                :src="require(`@/assets/image.png`)"
                alt="Третья модная фотка"
              />
              <img
                class="modal__img"
                :src="require(`@/assets/image_1.png`)"
                alt="Первая модная фотка"
              />
              <img
                class="modal__img"
                :src="require(`@/assets/image_2.png`)"
                alt="Вторая модная фотка"
              />
            </div>
          </div>
          <div class="modal__description">
            <div class="modal__description-head">
              <h1 class="modal__title">{{ data.title }}</h1>
              <p class="modal__price">{{ data.price }} баллов</p>
              <button type="button" class="modal__buy" @click="order()">
                Заказать
              </button>
            </div>
            <div class="modal__balance">
              <div class="modal__balance-details">
                <p class="modal__balance-text">Твой баланс:</p>
                <p class="modal__balance-amount">3 945 баллов</p>
              </div>
              <span class="modal__balance-icon">🛍</span>
            </div>
            <div class="modal__colors">
              <h3 class="modal__subtitle modal__subtitle--bottom">Цвета:</h3>
              <form class="modal__form">
                <div class="modal__colors-btn">
                  <input
                    class="modal__input"
                    id="radio-1"
                    type="radio"
                    name="radio"
                    value="blue"
                    checked
                  />
                  <div
                    class="modal__color-block modal__color-block--blue"
                  ></div>
                  <label class="modal__label" for="radio-1">Синий</label>
                </div>

                <div class="modal__colors-btn">
                  <input
                    class="modal__input"
                    id="radio-2"
                    type="radio"
                    name="radio"
                    value="beige"
                  />
                  <div
                    class="modal__color-block modal__color-block--beige"
                  ></div>
                  <label class="modal__label" for="radio-2">Бежевый</label>
                </div>

                <div class="modal__colors-btn">
                  <input
                    class="modal__input"
                    id="radio-3"
                    type="radio"
                    name="radio"
                    value="gray"
                  />
                  <div
                    class="modal__color-block modal__color-block--gray"
                  ></div>
                  <label class="modal__label" for="radio-3">Серый</label>
                </div>
              </form>
            </div>
            <div class="modal__sizes">
              <h3 class="modal__subtitle modal__subtitle--bottom">Размер:</h3>
              <form class="modal__form">
                <div class="modal__sizes-btn">
                  <input
                    class="modal__input"
                    id="radio-4"
                    type="radio"
                    name="radio"
                    value="small"
                    checked
                  />
                  <div class="size-block"></div>
                  <label class="modal__label" for="radio-4">S</label>
                </div>

                <div class="modal__sizes-btn">
                  <input
                    class="modal__input"
                    id="radio-5"
                    type="radio"
                    name="radio"
                    value="medium"
                  />
                  <div class="size-block"></div>
                  <label class="modal__label" for="radio-5">M</label>
                </div>

                <div class="modal__sizes-btn">
                  <input
                    class="modal__input"
                    id="radio-6"
                    type="radio"
                    name="radio"
                    value="large"
                  />
                  <div class="size-block"></div>
                  <label class="modal__label" for="radio-6">L</label>
                </div>
              </form>
            </div>
            <div class="modal__details">
              <h3 class="modal__subtitle modal__subtitle--weight">Детали:</h3>
              <p class="modal__text">
                {{ data.details }}
              </p>
            </div>
            <div class="modal__choose">
              <h3 class="modal__subtitle modal__subtitle--weight">
                Как выбрать размер:
              </h3>
              <p class="modal__text">Написать дяде Рику для уточнения.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    isOpen: Boolean,
    data: Object,
  },
  data() {
    return {
      isShowModal: false,
      clothes: [
        {
          id: 0,
          img: "image_4.png",
          title: "Футболка 'Эволюционируй или сдохни'",
          price: 220,
          isNew: true,
        },
        {
          id: 1,
          img: "image_4.png",
          title: "Футболка 'Эволюционируй или сдохни'",
          price: 220,
          isNew: false,
        },
        {
          id: 2,
          img: "sweatshirt.jpg",
          title: "Свитшот",
          price: 100,
          isNew: true,
        },
        {
          id: 3,
          img: "sweatshirt.jpg",
          title: "Свитшот",
          price: 100,
          isNew: false,
        },
        {
          id: 4,
          img: "polo.png",
          title: "Поло",
          price: 340,
          isNew: true,
        },
        {
          id: 5,
          img: "polo.png",
          title: "Поло",
          price: 340,
          isNew: false,
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
      all: [""],
      tabs: ["Все товары", "Одежда", "Аксессуары"],
      tabsActive: 0,
    };
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
      this.$emit("close");
    },
    order() {
      this.$emit("order", this.data.price);
    },
  },
};
</script>
