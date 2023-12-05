<template>
  <!-- container -->
  <label
    class="switch-container my-auto dark:bg-[#1e1e1e] bg-white cursor-pointer border-2 dark:border-gray-800 border-gray-200"
    :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <!-- checkbox -->
    <input type="checkbox" class="switch-input" @click="toggleDark()" v-model="isChecked" />
    <!-- sun / moon -->
    <div
      class="switch dark:after:bg-transparent dark:before:bg-[#1f1f1f] before:bg-white after:bg-transparent"
    >
      <div class="before:bg-pdark after:bg-pdark"></div>
      <div class="before:bg-pdark after:bg-pdark"></div>
      <span class="dark:border-[#1e1e1e] border-2 border-[#fff] bg-pdark"></span>
    </div>
  </label>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)
const isChecked = ref(!isDark.value)
</script>

<style>
.switch-container {
  --c: translate(-50%, -50%);
  border-radius: 50%;
  overflow: hidden;

  transition: 1000ms !important;
}

.switch {
  position: relative;
  left: 0;
  top: 0;
  width: 2em;
  height: 2em;
  transition: 1000ms 300ms !important;
}

label > input {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 5;
  opacity: 0;
  transition: 300ms !important;
}

/* sun outline */
.switch span {
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: var(--c);
  border-radius: 50%;
  width: 50%;
  height: 50%;
  transition: 300ms !important;
}

/* sun-rays */
.switch div {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

/* sun-rays */
.switch div::before,
.switch div::after {
  content: ' ';
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: var(--c);
  /* width of the ray*/
  width: 7%;
  /* ray longitude */
  height: 80%;
  border-radius: 10vmin;
  transition: 300ms !important;
}

.switch div:nth-child(1)::before {
  transform: var(--c) rotate(0deg);
}

.switch div:nth-child(1)::after {
  transform: var(--c) rotate(45deg); /*45deg increment each time*/
}

.switch div:nth-child(2)::before {
  transform: var(--c) rotate(90deg);
}

.switch div:nth-child(2)::after {
  transform: var(--c) rotate(135deg);
}

/* moon outline */
.switch::before,
.switch::after {
  content: ' ';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: var(--c);
  border-radius: 50%;
  transition: 300ms !important;
}

.switch::before {
  width: 20%;
  height: 20%;
  z-index: 10;
  transition: 150ms !important;
}

.switch::after {
  width: 10%;
  height: 10%;
  transition: 150ms !important;
}

.switch-input:checked ~ .switch span {
  width: 80%; /*width change*/
  height: 80%; /*height change*/
  background: #66757f; /*color change*/
  /*we get a full moon*/
}

.switch-input:checked ~ .switch div::before,
.switch-input:checked ~ .switch div::after {
  height: 30%; /*we hide the sun-rays*/
  border: 2px solid white;
}

.switch-input:checked ~ .switch::before {
  /*we draw a white circle a left-top corner to show a half moon*/
  left: 30%;
  top: 30%;
  width: 60%;
  height: 60%;
  transition: 300ms !important;
}

.switch-input:checked ~ .switch::after {
  /*we hide the sun outline*/
  width: 0%;
  height: 0%;
  transition: 300ms !important;
}

.switch-input:not(:checked) ~ .switch {
  transform: rotate(180deg);
  transition: 2000ms !important;
}
</style>
