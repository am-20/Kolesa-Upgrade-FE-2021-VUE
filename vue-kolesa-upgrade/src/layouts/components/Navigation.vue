<template>
  <nav class="nav">
    <ul class="nav__menu">
      <li class="nav__item" v-for="(item, index) in navItem" :key="index">
        <router-link
          class="nav__link"
          :to="item.link"
          :exact="item.isExact"
          active-class="nav__active"
          v-html="item.label"
        >
        </router-link>
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
        {
          link: "/",
          label: "Оргсхема",
          isExact: true,
        },
        {
          link: "/about",
          label: "Kolesa <strong>Team<strong>",
          isExact: true,
        },
        {
          link: "/shop",
          label: "Kolesa Shop",
          isExact: false,
        },
        {
          link: "/company",
          label: "Картина компании",
          isExact: false,
        },
        {
          link: "/news",
          label: "Новости",
          isExact: false,
        },
        {
          link: "/education",
          label: "Education",
          isExact: false,
        },
        {
          link: "/guidelines",
          label: "Guidelines",
          isExact: false,
        },
        {
          link: "/library",
          label: "Библиотека",
          isExact: false,
        },
        {
          link: "/faq",
          label: "FAQ",
          isExact: false,
        },
      ],
    };
  },
};
</script>
