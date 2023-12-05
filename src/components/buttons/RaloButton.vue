<template>
  <button :class="animationClasses[animation].class">
    <span :class="animationClasses[animation].child"></span>
    <span :class="animationClasses[animation].label">
      {{ label }}
    </span>
  </button>
</template>

<script lang="ts" setup>
defineProps({
  label: {
    type: String,
    required: true
  },
  buttonType: {
    type: String,
    required: false,
    default: 'primary'
  },
  animation: {
    type: String,
    required: false,
    default: 'alternate'
  }
})

type AnimationClasses = {
  [key: string]: {
    class: string
    child: string
    label: string
  }
}
const animationClasses: AnimationClasses = {
  alternate: {
    class:
      'group relative h-[50px] rounded-lg font-bold w-40 overflow-hidden border-2 text-lg shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:duration-300 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:duration-300 hover:before:h-full hover:after:h-full dark:before:bg-dprimary dark:border-dprimary dark:text-dprimary dark:after:bg-dprimary before:bg-lprimary border-lprimary text-lprimary after:bg-lprimary dark:hover:shadow-dprimary hover:shadow-lprimary',
    child:
      'top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 dark:dtext before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:duration-300 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:duration-300 group-hover:before:h-full group-hover:after:h-full dark:after:bg-dprimary dark:before:bg-dprimary after:bg-lprimary before:bg-lprimary',
    label:
      'absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center dark:group-hover:text-dtext group-hover:text-dtext delay-150'
  },
  circle: {
    class:
      'relative flex h-[50px] w-40 border-2 items-center justify-center overflow-hidden bg-gray-800 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56',
    child: 'hidden',
    label: 'relative z-10'
  },
  slide: {
    class:
      'before:ease relative h-[50px] rounded-lg font-bold w-40 overflow-hidden border-2 border-black shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180',
    child: 'hidden',
    label: 'relative z-10'
  },
  diagonal: {
    class:
      'before:ease relative h-[50px] w-40 overflow-hidden border-2 border-blue-500 text-blue-500 shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-blue-500 before:duration-300 hover:text-white hover:shadow-blue-500 hover:before:h-64 hover:before:-translate-y-32',
    child: 'hidden',
    label: 'relative z-10'
  },
  swipe: {
    class:
      'text-red hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border border-red-500 bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full',
    child: 'hidden',
    label: 'relative z-10'
  }
}
</script>
