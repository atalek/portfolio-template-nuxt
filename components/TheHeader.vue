<script setup lang="ts">
type Props = {
  y: number
  goTop: () => void
}

const { y, goTop } = defineProps<Props>()

const isOpen = ref(false)

import { NAV_LINKS } from '@/data/constants'
</script>

<template>
  <header
    class="sticky z-20 top-0 duration-200 px-4 border-b border-solid"
    :class="{
      'py-4 dark:bg-black bg-slate-200 border-primary border-b-2': y > 0,
      'py-6 bg-transparent border-transparent': y <= 0,
    }">
    <nav class="flex flex-row items-center justify-between max-w-[1400px] mx-auto">
      <div
        class="flex gap-4 items-center cursor-pointer text-primary hover:text-blue-300"
        @click="goTop">
        <span class="inline-block">
          <Icon
            name="fa6-solid:code"
            class="h-6 w-6" />
        </span>
        <h1 class="font-medium text-xl">
          <b class="font-bold poppins mr-1"
            >Lorem
            <span class="font-bold poppins mr-1 md:hidden inline-block">I.</span></b
          >
          <span class="font-bold poppins ml-1 hidden md:inline-block"> Ipsum </span>
        </h1>
      </div>

      <div
        class="flex gap-4 items-center ml-auto relative"
        v-motion-fade-visible-once>
        <ThemeToggler />
        <button
          aria-label="expand mobile menu button"
          @click="isOpen = !isOpen"
          class="md:hidden block p-2 absolute top-0 right-0"
          :class="{
            open: isOpen,
            'focus:outline-none': true,
          }">
          <span class="hamburger-top"></span>
          <span class="hamburger-middle"></span>
          <span class="hamburger-bottom"></span>
        </button>
      </div>

      <nav class="items-center flex-row hidden md:flex">
        <div class="flex pr-3">
          <div class="sm:flex items-center gap-4 text-center hidden">
            <a
              class="hover:text-primary hover:underline"
              v-for="link in NAV_LINKS"
              :href="link.href"
              :key="link.href"
              >{{ link.label }}
            </a>
          </div>
        </div>
        <a
          href="https://www.linkedin.com/"
          target="_blank">
          <button
            class="greenShadow relative overflow-hidden px-5 py-2 group rounded-full bg-black text-white dark:bg-white dark:text-slate-950">
            <div
              class="absolute top-0 right-full w-full h-full bg-primary opacity-20 group-hover:translate-x-full z-0 duration-200" />
            <h2 class="relative z-9 md:whitespace-normal whitespace-nowrap">
              Get in touch
            </h2>
          </button>
        </a>
      </nav>
    </nav>

    <nav
      v-show="isOpen"
      @click="isOpen = false"
      class="md:hidden p-4 mt-2 flex flex-col gap-2 text-center font-bold"
      :class="{
        'py-4 dark:bg-slate-950 bg-slate-200 border-primary  dark:border-green-950 ':
          y > 0,
        'py-6 bg-transparent border-transparent': y <= 0,
      }">
      <a
        class="border rounded p-2 border-primary animate-link"
        v-for="link in NAV_LINKS"
        :href="link.href"
        :key="link.href"
        >{{ link.label }}
      </a>

      <a
        href="https://linkedin.com/"
        target="_blank"
        aria-label="Contact page link"
        class="rounded p-2 bg-primary animate-link">
        Get in touch
      </a>
    </nav>
  </header>
</template>
