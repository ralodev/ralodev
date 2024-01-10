<template>
  <a
    class="Btn"
    :class="icon.toLocaleLowerCase()"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    role="link"
    :title="icon"
  >
    <span class="svgContainer">
      <GitHub
        v-if="icon.toLocaleLowerCase() === 'github'"
        class="text-white m-auto w-6 h-6"
      />
      <LinkedIn
        v-if="icon.toLocaleLowerCase() === 'linkedin'"
        class="text-white m-auto w-5 h-5"
      />
    </span>
    <span class="BG"></span>
  </a>
</template>

<script lang="ts" setup>
import GitHub from '@/components/icons/GitHub.vue'
import LinkedIn from '../icons/LinkedIn.vue'
defineProps({
  href: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.Btn {
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  position: relative;
  /* overflow: hidden; */
  border-radius: 7px;
  cursor: pointer;
  transition: all 0.3s;
}

.svgContainer {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  backdrop-filter: blur(0px);
  letter-spacing: 0.8px;
  border-radius: 10px;
  transition: all 0.3s;
  border: 1px solid rgba(156, 156, 156, 0.466);
}

.BG {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  z-index: -1;
  border-radius: 10px;
  pointer-events: none;
  transition: all 0.3s;
}

.linkedin .BG {
  background: #0077b5;
}
.github .BG {
  background: #313131;
}

.Btn:hover .BG {
  transform: rotate(35deg);
  transform-origin: bottom;
}

.Btn:hover .svgContainer {
  background-color: rgba(156, 156, 156, 0.466);
  backdrop-filter: blur(4px);
}
</style>
