<template>
  <button type="button" class="user">
    <img
      :src="require(`@/assets/${userInfo.avatar}`)"
      class="user__circle"
      alt="Аватарка"
    />
    <div class="user__info">
      <div class="user__name">{{ userInfo.name }}</div>
      <div class="user__balance">{{ userInfo.score }} баллов</div>
    </div>
  </button>
</template>

<script lang="ts">
import { mapState } from "vuex";

export default {
  name: "User",
  computed: {
    ...mapState({
      userInfo: "userInfo",
    }),
    score() {
      return this.userInfo.score ? `${this.userInfo.score} баллов` : "";
    },
  },
  mounted() {
    this.fetchUser();
  },
  methods: {
    fetchUser() {
      this.$store.dispatch("fetchUserInfo");
    },
  },
};
</script>
