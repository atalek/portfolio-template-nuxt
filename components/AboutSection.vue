<script setup lang="ts">
import { ABOUT_SECTION } from '@/data/constants'
</script>

<template>
  <section
    class=""
    id="about">
    <div
      class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-green-border-green-600 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-green-border-green-600 py-4">
      <h6 class="text-large sm:text-xl md:text-2xl">Want to know more?</h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        A bit <span class="poppins text-primary">about</span> me.
      </h3>
    </div>
    <div class="md:grid md:grid-cols-2 gap-8 items-center py-8">
      <img
        v-motion-fade-visible-once
        loading="lazy"
        class="w-full h-full object-cover"
        alt="about image "
        src="/placeholder.png" />
      <div
        class="text-left flex flex-col h-full poppins font-semibold text-balance mt-6 md:mt-0">
        <p class="text-base md:text-lg">
          {{ ABOUT_SECTION.section1 }}
        </p>
        <p class="text-base md:text-lg mt-2">
          {{ ABOUT_SECTION.section2 }}
        </p>
        <p class="text-base md:text-lg mt-2">
          {{ ABOUT_SECTION.section3 }}

          <br />
          <span class="text-primary"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit.</span
          >
        </p>
      </div>
    </div>
  </section>
</template>
