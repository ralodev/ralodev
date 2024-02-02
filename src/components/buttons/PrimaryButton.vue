<template>
  <button
    :disabled="props.disabled"
    class="glass-button"
    :class="btn_size"
    :title="props.disabled ? 'Disabled' : props.title ?? props.label ?? ''"
  >
    <span
      class="glass-button__content text-white"
      :class="btn_spacing"
    >
      <span
        v-if="props.type === 'icon' || (props.iconLeft && btn_slot)"
        class="flex [&>svg]:my-auto [&>svg]:inline"
        :class="btn_icon"
      >
        <slot />
      </span>
      <span
        v-if="props.label && props.type !== 'icon'"
        class="m-auto"
      >
        {{ props.label }}
      </span>
      <span
        v-if="props.iconRight && btn_slot && props.type !== 'icon'"
        class="flex [&>svg]:my-auto [&>svg]:inline"
        :class="btn_icon"
      >
        <slot />
      </span>
    </span>
    <span
      class="glass-button__bg"
      :class="bg_color + (props.disabled ? ' opacity-50' : '')"
    ></span>
  </button>
</template>

<script lang="ts" setup>
import { useSlots, computed } from 'vue';

const r_colors: Record<string, string> = {
  primary: ' bg-sky-800',
  secondary: ' bg-neutral-500',
  danger: ' bg-red-700',
  warning: ' bg-yellow-400',
  success: ' bg-green-700'
};
const r_sizes: Record<string, string> = {
  small: ' h-[35px] min-w-[35px] text-sm',
  medium: ' h-[45px] min-w-[45px] text-base',
  large: ' h-[55px] min-w-[55px] text-lg'
};
const r_spacing: Record<string, string> = {
  small: ' px-2 space-x-1',
  medium: ' px-3 space-x-2',
  large: ' px-3 space-x-3'
};
const r_icon: Record<string, string> = {
  small: ' [&>svg]:h-4 [&>svg]:w-4',
  medium: ' [&>svg]:h-5 [&>svg]:w-5',
  large: ' [&>svg]:h-6 [&>svg]:w-6'
};
const props = defineProps({
  label: {
    type: String
  },
  /*
   * Valid values: 'primary', 'secondary', 'danger', 'warning', 'success'
   * You can override the colors by passing a custom bg-color prop (e.g. bg-lime-500 or bg-color-[#000000])
   */
  severity: {
    type: String,
    default: 'primary'
  },
  title: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  iconLeft: {
    type: Boolean,
    default: false
  },
  iconRight: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'button'
  },
  size: {
    type: String,
    default: 'medium',
    required: false
  }
});
const btn_slot = computed(() => {
  return !!useSlots().default;
});
const bg_color = computed(() => {
  return props.severity.includes('bg-')
    ? props.severity
    : r_colors[props.severity] ?? r_colors['primary'];
});
const btn_size = computed(() => {
  return r_sizes[props.size] ?? r_sizes['medium'];
});
const btn_spacing = computed(() => {
  return props.type === 'icon'
    ? r_spacing['small']
    : r_spacing[props.size] ?? r_spacing['medium'];
});
const btn_icon = computed(() => {
  return props.type === 'icon'
    ? r_icon['large']
    : r_icon[props.size] ?? r_icon['medium'];
});
</script>

<style scoped>
.glass-button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  position: relative;
  /* overflow: hidden; */
  border-radius: 6px;
  z-index: 1;
  transition: all 0.3s;
}

.glass-button:not([disabled]) {
  cursor: pointer;
}

.glass-button:is([disabled]) {
  cursor: not-allowed;
}

.glass-button__content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  backdrop-filter: blur(0px);
  letter-spacing: 0.5px;
  border-radius: 10px;
  transition: all 0.3s;
  z-index: 1;
  border: 1px solid rgba(156, 156, 156, 0.466);
}

.glass-button:disabled {
  cursor: default;
}

.glass-button .glass-button__bg {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  z-index: 0;
  border-radius: 10px;
  pointer-events: none;
  transition: all 0.3s;
}

.glass-button:not([disabled]):hover .glass-button__bg {
  transform: translate(5px, 5px);
  box-shadow: 5px 5px 5px 0px #0000003a;
}

.glass-button:not([disabled]):hover .glass-button__content {
  background-color: #00000017;
  backdrop-filter: blur(4px);
}
</style>
