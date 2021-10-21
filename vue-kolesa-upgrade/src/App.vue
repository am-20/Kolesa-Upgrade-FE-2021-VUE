<template>
  <div id="app">
        <div class="wrapper">
        <!-- header -->
        <header class="header">
            <div class="logo">
                <img
                    src="./assets/project_logo/logo.svg"
                    alt="Kolesa logo"
                >
            </div>
            <form class="search">
                <input
                    type="search"
                    placeholder="Поиск"
                    class="search__input"
                >
                <button
                    type="submit"
                    class="search__btn"
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13.6913 14.062C12.7403 15.181 11.4093 15.864
                            9.94535 15.982C9.79435 15.995 9.64235 16 9.49335
                            16C6.65335 16 4.24835 13.781 4.01835 10.946C3.89935
                            9.482 4.35835 8.058 5.30935 6.939C6.26035 5.82
                            7.59035 5.137 9.05435 5.019C9.20635 5.006 9.35835
                            5 9.50735 5C12.3473 5 14.7523 7.22 14.9823
                            10.055C15.1013 11.519 14.6423 12.942 13.6913
                            14.062ZM19.6463 19.94L14.4353 14.729C15.5233
                            13.458 16.1253 11.773 15.9793 9.974C15.7023
                            6.575 12.8583 3.999 9.50735 4C9.33135 4 9.15235
                            4.007 8.97435 4.022C5.39635 4.313 2.73135 7.449
                            3.02135 11.027C3.29735 14.426 6.14135 17 9.49335
                            17C9.66935 17 9.84735 16.994 10.0263 16.979C11.4473
                            16.864 12.7193 16.294 13.7243 15.432L18.9393
                            20.647L19.6463 19.94Z"
                            fill="#1C1819"
                            stroke-width="1"
                        />
                    </svg>
                </button>
            </form>
            <button
                type="button"
                class="user"
            >
                <img
                    src="./assets/mortyjan.png"
                    alt="Аватарка"
                    class="user__circle"
                >
                <div class="user__info">
                    <div class="user__name">Мортиджан</div>
                    <div class="user__balance">300 баллов</div>
                </div>
            </button>
        </header>

        <!-- main block -->
        <main class="main">
            <!-- navigation - menu -->
            <nav class="nav">
                <ul class="nav__menu">
                    <li class="nav__item">
                        <a
                            href="#"
                            class="nav__link"
                        >
                            Оргсхема
                        </a>
                    </li>
                    <li class="nav__item">
                        <a
                            href="#"
                            class="nav__link"
                        >
                            Kolesa <b>Team</b>
                        </a>
                    </li>
                    <li class="nav__item">
                        <div class="nav__line"></div>
                        <a
                            href="#"
                            class="nav__link nav__active"
                        >
                            Kolesa Shop
                        </a>
                    </li>
                    <li class="nav__item">
                        <a
                            href="#"
                            class="nav__link"
                        >
                            Картина компании
                        </a>
                    </li>
                    <li class="nav__item">
                        <a
                            href="#"
                            class="nav__link"
                        >
                            Новости
                        </a>
                    </li>
                    <li class="nav__item">
                        <a
                            href="#"
                            class="nav__link"
                        >
                            Education
                        </a>
                    </li>
                    <li class="nav__item">
                        <a
                            href="#"
                            class="nav__link"
                        >
                            Guidelines
                        </a>
                    </li>
                    <li class="nav__item">
                        <a
                            href="#"
                            class="nav__link"
                        >
                            Библиотека
                        </a>
                    </li>
                    <li class="nav__item">
                        <a
                            href="#"
                            class="nav__link"
                        >
                            FAQ
                        </a>
                    </li>
                </ul>
            </nav>

            <!-- banner, hot keys, tabs, items -->
            <section class="main__content">
                <!-- banner -->
                <div class="banner">
                    <img
                        src="./assets/banner.png"
                        alt="banner"
                    >
                </div>
                <!-- hot keys -->
                <div class="hot">
                    <button
                        type="button"
                        class="hot__btn hot__btn--green"
                    >
                        <span class="hot__icon">➕</span>
                        <p class="hot__text">Получить баллы</p>
                    </button>
                    <button
                        type="button"
                        class="hot__btn hot__btn--yellow"
                    >
                        <span class="hot__icon">❓</span>
                        <p class="hot__text">Как получить баллы</p>
                    </button>
                    <button
                        type="button"
                        class="hot__btn hot__btn--blue"
                    >
                        <span class="hot__icon">🎁</span>
                        <p class="hot__text">Подарить баллы</p>
                    </button>
                </div>
                <!-- tabs -->
                <div class="tabs">
                    <button
                        type="button"
                        class="tabs__btn tabs__btn--active"
                        data-key="all"
                    >
                        Все товары
                    </button>
                    <button
                        type="button"
                        class="tabs__btn"
                        data-key="clothes"
                    >
                        Одежда
                    </button>
                    <button
                        type="button"
                        class="tabs__btn"
                        data-key="accessories"
                    >
                        Аксессуары
                    </button>
                </div>
                <!-- items -->
                <div class="main__items js__items">
                    <div class="card">
                        <div class="card__image">
                            <img
                                src="./assets/image_4.png"
                                alt="Модная футболка"
                                class="card__photo"
                            >
                            <span class="card__beige">new</span>
                        </div>
                        <div class="card__description">
                            <p class="card__price">220 баллов</p>
                            <h3 class="card__title">Футболка "Эволюционируй или сдохни"</h3>
                            <p class="card__size">Размеры S/M/L</p>
                            <button
                                type="button"
                                class="card__btn"
                                hidden
                            >
                                Заказать
                            </button>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card__image">
                            <img
                                src="./assets/image_4.png"
                                alt="Модная футболка"
                                class="card__photo"
                            >
                            <span class="card__beige">new</span>
                        </div>
                        <div class="card__description">
                            <p class="card__price">220 баллов</p>
                            <h3 class="card__title">Футболка "Эволюционируй или сдохни"</h3>
                            <p class="card__size">Размеры S/M/L</p>
                            <button
                                type="button"
                                class="card__btn"
                                hidden
                            >
                                Заказать
                            </button>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card__image">
                            <img
                                src="./assets/image_4.png"
                                alt="Модная футболка"
                                class="card__photo"
                            >
                            <span class="card__beige">new</span>
                        </div>
                        <div class="card__description">
                            <p class="card__price">220 баллов</p>
                            <h3 class="card__title">Футболка "Эволюционируй или сдохни"</h3>
                            <p class="card__size">Размеры S/M/L</p>
                            <button
                                type="button"
                                class="card__btn"
                                hidden
                            >
                                Заказать
                            </button>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card__image">
                            <img
                                src="./assets/image_4.png"
                                alt="Модная футболка"
                                class="card__photo"
                            >
                            <span class="card__beige">new</span>
                        </div>
                        <div class="card__description">
                            <p class="card__price">220 баллов</p>
                            <h3 class="card__title">Футболка "Эволюционируй или сдохни"</h3>
                            <p class="card__size">Размеры S/M/L</p>
                            <button
                                type="button"
                                class="card__btn"
                                hidden
                            >
                                Заказать
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
    <footer>
        <div class="socials">
            <p class="socials__credits">© Kolesa Group</p>
            <socials-svg>
                <a
                    href="#"
                    class="socials__link"
                >
                    <img
                        src="./assets/social_icons/instagram.svg"
                        alt="instagram icon"
                    >
                </a>
                <a
                    href="#"
                    class="socials__link"
                >
                    <img
                        src="./assets/social_icons/youtube.svg"
                        alt="youtube icon"
                    >
                </a>
                <a
                    href="#"
                    class="socials__link"
                >
                    <img
                        src="./assets/social_icons/vk.svg"
                        alt="vk icon"
                    >
                </a>
            </socials-svg>
        </div>
        <div class="review">
            <p class="review__text">
                Есть идеи что улучшить? <br>
                Не знаешь, с кем решить проблему?
            </p>
            <button class="review__btn">Написать</button>
        </div>
    </footer>

     <!-- Backdrop -->
    <div class="modal__backdrop"></div>
    <!-- Modal -->
    <div class="modal">
        <div class="modal__content">
            <button type="button">
                <img
                    src="./assets/Close/close_big.svg"
                    alt="close sign"
                    class="modal__close"
                >
            </button>
            <div class="modal__body">
                <div class="modal__images">
                    <img
                        src="./assets/image_7.png"
                        alt="Самая модная футболка"
                    >
                    <div class="modal__previews">
                        <img
                        class="modal__img"
                            src="./assets/image.png"
                            alt="Третья модная фотка"
                        >
                        <img
                        class="modal__img"
                            src="./assets/image_1.png"
                            alt="Первая модная фотка"
                        >
                        <img
                        class="modal__img"
                            src="./assets/image_2.png"
                            alt="Вторая модная фотка"
                        >
                    </div>
                </div>
                <div class="modal__description">
                    <div class="modal__description-head">
                        <h1 class="modal__title">Футболка "Эволюционируй или сдохни"</h1>
                        <p class="modal__price">100 баллов</p>
                        <button
                            type="button"
                            class="modal__buy"
                        >
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
                    <!-- colors -->
                    <div class="modal__colors">
                        <h3 class="modal__subtitle modal__subtitle--bottom">
                            Цвета:
                        </h3>
                        <form class="modal__form">
                            <div class="modal__colors-btn">
                                <input
                                    class="modal__input"
                                    id="radio-1"
                                    type="radio"
                                    name="radio"
                                    value="blue"
                                    checked
                                >
                                <div class="modal__color-block modal__color-block--blue"></div>
                                <label class="modal__label" for="radio-1">Синий</label>
                            </div>

                            <div class="modal__colors-btn">
                                <input
                                class="modal__input"
                                id="radio-2"
                                type="radio"
                                name="radio"
                                value="beige"
                                >
                                <div class="modal__color-block modal__color-block--beige"></div>
                                <label class="modal__label" for="radio-2">Бежевый</label>
                            </div>

                            <div class="modal__colors-btn">
                                <input
                                class="modal__input"
                                id="radio-3"
                                type="radio"
                                name="radio"
                                value="gray"
                                >
                                <div class="modal__color-block modal__color-block--gray"></div>
                                <label class="modal__label" for="radio-3">Серый</label>
                            </div>
                        </form>
                    </div>
                    <!-- size -->
                    <div class="modal__sizes">
                        <h3 class="modal__subtitle modal__subtitle--bottom">
                            Размер:
                        </h3>
                        <form class="modal__form">
                            <div class="modal__sizes-btn">
                                <input
                                class="modal__input"
                                id="radio-4"
                                type="radio"
                                name="radio"
                                value="small"
                                checked
                                >
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
                                >
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
                                >
                                <div class="size-block"></div>
                                <label class="modal__label" for="radio-6">L</label>
                            </div>
                        </form>
                    </div>
                    <!-- details -->
                    <div class="modal__details">
                        <h3 class="modal__subtitle modal__subtitle--weight">
                            Детали:
                        </h3>
                        <p class="modal__text">
                          Брендированная толстовка от Qazaq Republic.
                          Материал: Хлопок 80%, Вискоза 20%
                        </p>
                    </div>
                    <!-- how to choose -->
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
  name: 'App',
  data() {
    return {
      count: 0,
      clothes: [
        {
          id: 0,
          img: './src/assets/image_4.png',
          title: 'Футболка "Эволюционируй или сдохни"',
          price: 220,
          isNew: true,
        },
        {
          id: 1,
          img: './src/assets/image_4.png',
          title: 'Футболка "Эволюционируй или сдохни"',
          price: 220,
          isNew: false,
        },
        {
          id: 2,
          img: './src/assets/sweatshirt.jpg',
          title: 'Свитшот',
          price: 100,
          isNew: true,
        },
        {
          id: 3,
          img: './src/assets/sweatshirt.jpg',
          title: 'Свитшот',
          price: 100,
          isNew: false,
        },
        {
          id: 4,
          img: './src/assets/polo.png',
          title: 'Поло',
          price: 340,
          isNew: true,
        },
        {
          id: 5,
          img: './src/assets/polo.png',
          title: 'Поло',
          price: 340,
          isNew: false,
        },
      ],

      accessories: [
        {
          id: 6,
          img: './src/assets/bottle.png',
          title: 'Бутылка для воды',
          price: 100,
          isNew: true,
          details: 'Бутылка для воды с трубочкой',
        },
        {
          id: 7,
          img: './src/assets/bottle.png',
          title: 'Бутылка для воды',
          price: 100,
          isNew: false,
          details: 'Бутылка для воды с трубочкой',

        },
        {
          id: 8,
          img: './src/assets/cap.png',
          title: 'Кепка',
          price: 150,
          isNew: true,
          details: 'Брендированная кепка',

        },
        {
          id: 9,
          img: './src/assets/cap.png',
          title: 'Кепка',
          price: 150,
          isNew: false,
          details: 'Брендированная кепка',

        },
        {
          id: 10,
          img: './src/assets/coffee_cup.jpg',
          title: 'Стакан для кофе',
          price: 50,
          isNew: true,
          details: 'Стакан для кофе',

        },
        {
          id: 11,
          img: './src/assets/coffee_cup.jpg',
          title: 'Стакан для кофе',
          price: 50,
          isNew: false,
          details: 'Стакан для кофе',

        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import './assets/css/style.scss';

</style>
