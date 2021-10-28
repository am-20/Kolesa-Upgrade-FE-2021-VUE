<template>
  <footer>
    <div class="socials">
      <p class="socials__credits">© Kolesa Group</p>
      <div>
        <a href="#" class="socials__link">
          <img
            :src="require(`@/assets/social_icons/instagram.svg`)"
            alt="instagram icon"
          />
        </a>
        <a href="#" class="socials__link">
          <img
            :src="require(`@/assets/social_icons/youtube.svg`)"
            alt="youtube icon"
          />
        </a>
        <a href="#" class="socials__link">
          <img :src="require(`@/assets/social_icons/vk.svg`)" alt="vk icon" />
        </a>
      </div>
    </div>
    <div class="review">
      <p class="review__text">
        Есть идеи что улучшить? <br />
        Не знаешь, с кем решить проблему?
      </p>
      <button class="review__btn">Написать</button>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
};
</script>
