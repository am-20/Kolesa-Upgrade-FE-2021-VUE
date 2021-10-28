<template>
  <button type="button" class="user">
    <img
      :src="require(`@/assets/mortyjan.png`)"
      alt="Аватарка"
      class="user__circle"
    />
    <div class="user__info">
      <div class="user__name">Мортиджан</div>
      <div class="user__balance">{{ this.score }} баллов</div>
    </div>
  </button>
</template>

<script>
export default {
  name: "User",
  props: {},
  data() {
    return {
      score: 300,
    };
  },
};
</script>
