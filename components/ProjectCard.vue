<script setup lang="ts">
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imgUrl: { type: String, required: true },
  gitUrl: { type: String, required: true },
  previewUrl: { type: String, required: true },
})
</script>
<template>
  <div class="shadow-xl transition-all hover:scale-[1.03] hover:shadow-primary">
    <div
      class="h-52 md:h-72 rounded-t-xl relative group project-picture"
      :style="{
        background: `url(${imgUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        objectFit: 'cover',
        objectPosition: 'center',
      }">
      <div
        class="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-focus:flex group-hover:bg-opacity-80 transition-all duration-500 rounded-t-xl">
        <NuxtLink
          :href="gitUrl"
          target="_blank"
          class="flex items-center justify-center h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
          <Icon
            name="fa6-solid:code"
            class="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
        </NuxtLink>
        <NuxtLink
          :href="previewUrl"
          target="_blank"
          class="flex items-center justify-center h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
          <Icon
            name="fa6-solid:eye"
            class="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
        </NuxtLink>
      </div>
    </div>
    <div class="rounded-b-xl mt-3 py-6 px-4">
      <h5 class="text-xl font-semibold mb-2">{{ title }}</h5>
      <p class="dark:text-[#ADB7BE] text-slate-800">
        {{ description }}
      </p>
    </div>
  </div>
</template>
