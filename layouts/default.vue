<script setup lang="ts">
const y = ref(0)

const goTop = () => {
  document.body.scrollIntoView()
}

onMounted(() => {
  const updateScroll = () => {
    y.value = window.scrollY
  }

  window.addEventListener('scroll', updateScroll)
  window.addEventListener('resize', updateScroll)
})
</script>

<template>
  <div class="selection:bg-green-200/60 dark:selection:bg-green-200/30">
    <TheHeader
      :y="y"
      :goTop="goTop" />
    <div
      class="container relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen">
      <div class="fixed bottom-0 right-0 p-10 z-[10]">
        <button
          aria-label="go to top button"
          @click="goTop"
          class="rounded-full bg-slate-600 text-primary px-3 sm:px-4 hover:bg-slate-500 cursor-pointer aspect-square grid place-items-center"
          :class="{ hidden: y < 20 }">
          <Icon name="fa6-solid:arrow-up" />
        </button>
      </div>
      <slot />

      <div class="mb-10" />
    </div>
    <TheFooter />
  </div>
</template>
