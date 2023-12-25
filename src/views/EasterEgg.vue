<template>
  <div class="flex h-full">
    <div class="absolute -inset-96 z-50 cursor-not-allowed"></div>
    <h1>Gotcha!</h1>
    <div class="h-[90vh] my-auto mx-auto flex">
      <video autoplay>
        <source :src="easter" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<script lang="ts" setup>
import easter from '@/assets/easter.mp4'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'

const router = useRouter()

onMounted(() => {
  setTimeout(() => {
    router.go(-1)
  }, 5000)
})
</script>
