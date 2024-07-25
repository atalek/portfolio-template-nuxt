<script setup lang="ts">
useHead({
  title: 'Portfolio Template with Nuxt 3 & Tailwind CSS',
  htmlAttrs: {
    lang: 'en',
  },
  meta: [
    { charset: 'UTF-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    {
      name: 'description',
      content:
        'A customizable portfolio template built with Nuxt 3 and Tailwind CSS. Easy to set up and perfect for showcasing your skills and experience.',
    },
    {
      name: 'keywords',
      content: 'portfolio template, Nuxt 3, Tailwind CSS, web development, customization',
    },
    { name: 'author', content: 'Aleksandar Atanasovski' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://portfolio-template-nuxt.atalek.com/' },
    {
      property: 'og:title',
      content: 'Portfolio Template with Nuxt 3 & Tailwind CSS',
    },
    {
      property: 'og:image',
      content:
        'https://i0.wp.com/curiositygym.com/wp-content/uploads/2022/05/portfolio1.jpg?fit=1920%2C1080&ssl=1',
    },
    {
      property: 'og:description',
      content:
        'A customizable portfolio template built with Nuxt 3 and Tailwind CSS. Easy to set up and perfect for showcasing your skills and experience.',
    },

    {
      property: 'twitter:card',
      content:
        'https://i0.wp.com/curiositygym.com/wp-content/uploads/2022/05/portfolio1.jpg?fit=1920%2C1080&ssl=1',
    },
    {
      property: 'twitter:url',
      content: 'https://portfolio-template-nuxt.atalek.com/',
    },
    {
      property: 'twitter:title',
      content: 'Portfolio Template with Nuxt 3 & Tailwind CSS',
    },
    {
      property: 'twitter:description',
      content:
        'A customizable portfolio template built with Nuxt 3 and Tailwind CSS. Easy to set up and perfect for showcasing your skills and experience.',
    },
  ],
  link: [{ rel: 'icon', type: 'image/png', href: '/favicon-16.png' }],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
