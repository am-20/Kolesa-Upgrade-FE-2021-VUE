<template>
  <div class="hot">
    <button
      v-for="hot in hotBtn"
      :key="hot.type"
      type="button"
      class="hot__btn"
      :class="{
        'hot__btn--green': hot.type === 'green',
        'hot__btn--yellow': hot.type === 'yellow',
        'hot__btn--blue': hot.type === 'blue',
      }"
      @click.prevent="goToPage"
    >
      <span class="hot__icon">{{ hot.icon }}</span>
      <p class="hot__text">{{ hot.text }}</p>
    </button>
  </div>
</template>

<script>
export default {
  name: "HotKeys",
  data() {
    return {
      hotBtn: [
        {
          icon: "➕",
          text: "Получить баллы",
          type: "green",
        },
        {
          icon: "❓",
          text: "Как получить баллы",
          type: "yellow",
        },
        {
          icon: "🎁",
          text: "Подарить баллы",
          type: "blue",
        },
      ],
    };
  },
  methods: {
    goToPage() {
      this.$router.push({ name: "Score" });
    },
  },
};
</script>
