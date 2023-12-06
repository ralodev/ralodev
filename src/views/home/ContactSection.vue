<template>
  <section
    id="contact"
    name="contact"
    className="w-full min-h-screen h-auto  items-center justify-center content-center relative overflow-x-hidden pt-[80px]"
  >
    <div
      class="xl:px-0 max-w-[1200px] mx-auto justify-center h-full text-center"
    >
      <div class="text-start">
        <header class="">
          <h1
            className="dark:text-gray-300 font-bold text-5xl md:my-4 lg:px-0 text-center"
          >
            Contact
          </h1>
        </header>
      </div>

      <div
        class="px-6 py-6 max-w-3xl mx-auto lg:px-8 md:grid-cols-2 dark:text-dtext2 rounded-3xl dark:bg-dsurface dark:bg-opacity-60 bg-gray-100 text-start"
      >
        <form
          :novalidate="true"
          class="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
        >
          <span class=""
            >You can send me an email to
            <a
              href="mailto:contact@ralo.dev"
              target="_blank"
              class="inline-flex underline-offset-1 underline text-lprimary"
            >
              contact@ralo.dev
            </a>

            or you can fill out the form below and I'll get back to you as soon
            as possible.
          </span>
          <label class="block">
            <span class="mb-1">
              Name
              <span class="text-red-500">*</span>
            </span>
            <input
              type="text"
              placeholder="John Doe"
              class="block w-full rounded-md shadow-sm focus:ring dark:focus:border-indigo-500 dark:ring-indigo-500 dark:bg-gray-800"
            />
          </label>
          <label class="block">
            <span class="mb-1"
              >Email address
              <span class="text-red-500">*</span>
            </span>
            <input
              type="email"
              placeholder="john@mail.com"
              class="block w-full rounded-md shadow-sm focus:ring dark:focus:border-indigo-500 dark:ring-indigo-500 dark:bg-gray-800"
            />
          </label>
          <label class="block">
            <span class="mb-1"
              >Message
              <span class="text-red-500">*</span>
            </span>
            <textarea
              rows="3"
              class="block w-full rounded-md focus:ring dark:bg-gray-800 dark:focus:border-indigo-500 dark:ring-indigo-500"
              placeholder="Hi Raúl, I'm interested in hiring you for my project..."
            ></textarea>
          </label>
          <label for="" class="block text-start">
            <span class="mb-1">
              Although I love robots, I prefer to receive messages from humans,
              so please prove you are one by checking the box below
            </span>
          </label>
          <vue-recaptcha
            v-show="showRecaptcha"
            sitekey="6Lf2JlgoAAAAAApyzcXXK-9WljZW1MgTrTsyKg99"
            size="normal"
            :theme="isDark ? 'dark' : 'light'"
            :loading-timeout="loadingTimeout"
            @verify="recaptchaVerified"
            @expire="recaptchaExpired"
            @fail="recaptchaFailed"
            @error="recaptchaError"
            ref="ReCaptchaElement"
          >
          </vue-recaptcha>
          <PrimaryButton
            :label="isHuman ? 'Send message' : 'Prove you are human'"
            class="self-center"
            :disabled="!isHuman"
            :class="!isHuman ? '!bg-gray-500 pointer-events-none	w-64' : ''"
          />
        </form>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import PrimaryButton from '@/components/buttons/PrimaryButton.vue'
import vueRecaptcha from 'vue3-recaptcha2'
import { useDark } from '@vueuse/core'
import GitHub from '@/components/icons/GitHub.vue'
import LinkedIn from '@/components/icons/LinkedIn.vue'
import YouTube from '@/components/icons/YouTube.vue'
import Twitter from '@/components/icons/TwitterIcon.vue'
import { ref } from 'vue'

const isHuman = ref(false)
const showRecaptcha = ref(true)
const loadingTimeout = ref(10000)
const ReCaptchaElement = ref(null)
const isDark = useDark()

function verify(token?: any) {
  console.log('Recaptcha verified')
  isHuman.value = true
}
function recaptchaVerified(response: any) {
  verify(response)
}
function recaptchaExpired() {
  console.log('Recaptcha expired')
  isHuman.value = false
}
function recaptchaFailed() {
  console.log('Recaptcha failed')
}
function recaptchaError(reason: any) {
  console.log('Recaptcha error', reason)
}
console.log('Is human', isHuman.value)
console.log('Is dark', isDark.value)
</script>
