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
        class="m-auto h-6 w-6 text-white"
      />
      <LinkedIn
        v-if="icon.toLocaleLowerCase() === 'linkedin'"
        class="m-auto h-5 w-5 text-white"
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
  transform: translate(5px, 5px);
  box-shadow: 5px 5px 5px 0px #0000003a;
}

.Btn:not([disabled]):hover .svgContainer {
  background-color: #0000001c;
  backdrop-filter: blur(5px);
}
</style>
