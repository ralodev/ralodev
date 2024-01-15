<script lang="ts" setup>
const props = defineProps({
  label: {
    type: String,
    required: true
  },
  bg: {
    type: String,
    default: null
  },
  height: {
    type: String,
    default: '45'
  },
  btnClass: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <button
    :disabled="props.disabled"
    class="Btn"
    :class="btnClass"
    :style="`height: ${props.height}px`"
    :title="disabled ? 'Not available' : `${label}`"
  >
    <span class="labelContainer">
      <span class="px-3 font-medium text-dtext1">{{ label }}</span>
    </span>
    <span
      v-if="!disabled"
      class="BG"
      :class="props.bg ?? 'BG-default-color'"
    ></span>
    <span v-else class="absolute inset-0 rounded-md bg-gray-400"></span>
  </button>
</template>

<style scoped>
.Btn {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  position: relative;
  /* overflow: hidden; */
  border-radius: 6px;
  cursor: pointer;
  z-index: 1;
  transition: all 0.3s;
}

.labelContainer {
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
  z-index: 1;
  border: 1px solid rgba(156, 156, 156, 0.466);
}

button:disabled {
  cursor: default;
}

button:not([disabled]) .BG {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  z-index: 0;
  border-radius: 10px;
  pointer-events: none;
  transition: all 0.3s;
}

.BG-default-color {
  background: #12809e;
}

.Btn:hover .BG {
  transform: rotate(3deg) translate(10px, 5px);
}

.Btn:not([disabled]):hover .labelContainer {
  background-color: rgba(156, 156, 156, 0.466);
  backdrop-filter: blur(4px);
}
</style>
