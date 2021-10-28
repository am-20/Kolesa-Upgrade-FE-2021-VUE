<template>
  <nav class="nav">
    <ul class="nav__menu">
      <li class="nav__item" v-for="(item, index) in navItem" :key="index">
        <a href="#" class="nav__link">
          {{ item }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      navItem: [
        "Оргсхема",
        "Kolesa Team",
        "Kolesa Shop",
        "Картина компании",
        "Новости",
        "Education",
        "Guidelines",
        "Библиотека",
        "FAQ",
      ],
    };
  },
};
</script>
