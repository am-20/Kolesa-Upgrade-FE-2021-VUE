<template>
  <div class="hot">
    <button
      v-for="(hot, index) in hotBtn"
      :key="index"
      type="button"
      class="hot__btn"
      :class="{
        'hot__btn--green': index === 0,
        'hot__btn--yellow': index === 1,
        'hot__btn--blue': index === 2,
      }"
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
        },
        {
          icon: "❓",
          text: "Как получить баллы",
        },
        {
          icon: "🎁",
          text: "Подарить баллы",
        },
      ],
    };
  },
};
</script>
