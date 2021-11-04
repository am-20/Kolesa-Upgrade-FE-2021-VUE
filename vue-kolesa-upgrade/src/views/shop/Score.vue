<template>
  <div class="score">
    <div class="score__links">
      <router-link to="/shop">
        <p>Kolesa Shop /</p>
      </router-link>
      <router-link to="/shop/how-to-get-score">
        <p>Как получить баллы</p>
      </router-link>
    </div>
    <div class="score__header">Как получить баллы</div>
    <div class="score__main">
      <div class="score__item" v-for="card in scoreCards" :key="card.id">
        <img
          :src="require(`@/assets/${card.img}`)"
          alt="conference icon"
          class="score__img"
        />
        <div class="score__title">{{ card.title }}</div>
        <div class="score__quantity" v-if="card.score && card.id != 5">
          {{ card.score }} баллов
        </div>
        <div class="score__quantity" v-if="card.id === 5">
          {{ card.score }} баллов ежемесячнл
        </div>
        <div class="score__description">
          {{ card.description }}
        </div>
        <button class="score__submitButton">Отправить заявку</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Score",
  data() {
    return {
      scoreCards: [
        {
          id: 0,
          img: "conference-2.svg",
          title: "Выступление на конференциях",
          score: 90,
          description:
            "Стань спикером на международной конференции по своему направлению",
        },
        {
          id: 1,
          img: "conference-3.svg",
          title: "Выступление на meetup",
          score: 60,
          description:
            "Стань спикером в Колёсах и на meetup других компаний. Расскажи о наших продуктах и технологиях которые мы используем",
        },
        {
          id: 2,
          img: "conference-4.svg",
          title: "Статья на habr/vc.ru/rusbase",
          score: 60,
          description:
            "Подготовь качественный контент, напиши и опубликуй статью на профильную тему",
        },
        {
          id: 3,
          img: "conference-5.svg",
          title: "Мастер-классы, тренинги, лекции, подкасты, прямые эфиры",
          score: 60,
          description:
            "Поделись профессиональными знаниями с коллегами. Важно обучить не менее 6 человек",
        },
        {
          id: 4,
          img: "conference-6.svg",
          title: "Организация мероприятия",
          score: 60,
          description:
            "Организуй турнир по командным играм в офисе. ЧГК, настольный теннис и другие направления. Не менее 10 участников в турнире",
        },
        {
          id: 5,
          img: "conference-7.svg",
          title: "Стань ментором в проекте «Kolesa Academy»",
          score: 90,
          description:
            "Стань ментором академиков, поделись своими знаниями и помоги ребятам завершить Kolesa Academy успешно",
        },
        {
          id: 6,
          img: "conference-8.svg",
          title: "Помощь HR team",
          score: 50,
          description: "Помоги организовать мероприятие",
        },
        {
          id: 7,
          img: "conference-3.svg",
          title: "Выступление на Demoday",
          score: 30,
          description:
            "Выступи на Demoday внутри своей команды и поделись знаниями",
        },
        {
          id: 8,
          img: "conference-10.svg",
          title: "Другое",
          description: "Получай баллы если уже что-то сделано",
        },
      ],
    };
  },
};
</script>
