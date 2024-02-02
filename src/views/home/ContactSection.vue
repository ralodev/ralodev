<template>
  <section
    id="contact"
    name="contact"
    className="w-full min-h-screen items-center justify-center content-center relative overflow-x-hidden pt-[90px] px-4"
  >
    <header class="">
      <h2
        className="dark:text-dtext1 font-semibold text-4xl md:my-4 lg:px-0 text-center"
      >
        Contact
      </h2>
    </header>
    <div class="flex w-full flex-col gap-y-5 dark:text-dtext2">
      <p class="text-center text-lg">
        Hello again! If you want to get in touch with me, you can do it through
        my social media or via email.
      </p>
      <span class="text-center">
        There are my social media accounts and my email address:
        <div
          class="flex w-full flex-wrap items-center justify-center gap-5 pt-3"
        >
          <!-- Input group -->
          <div class="flex items-center">
            <input
              type="email"
              class="pointer-events-none min-h-[45px] w-[200px] select-all rounded-s-md border-[1px] bg-white dark:bg-slate-800"
              id="Email"
              name="Email"
              placeholder="contact@ralo.dev"
              autocomplete="off"
              value="contact@ralo.dev"
              readonly
            />
            <button
              class="flex min-h-[45px] min-w-[85px] select-none items-center justify-center rounded-e-md border-none px-2 text-sm text-white transition-colors duration-300 ease-in-out"
              @click="copyEmail"
              :disabled="copied"
              title="Copy email"
              :class="
                copied
                  ? 'cursor-default bg-neutral-600'
                  : 'cursor-pointer bg-sky-800 hover:bg-sky-900 '
              "
            >
              <span
                v-if="!copied"
                class="flex gap-x-1"
              >
                <svg
                  class="my-auto h-4 w-4 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path
                    d="M5 9V4.13a2.96 2.96 0 0 0-1.293.749L.879 7.707A2.96 2.96 0 0 0 .13 9H5Zm11.066-9H9.829a2.98 2.98 0 0 0-2.122.879L7 1.584A.987.987 0 0 0 6.766 2h4.3A3.972 3.972 0 0 1 15 6v10h1.066A1.97 1.97 0 0 0 18 14V2a1.97 1.97 0 0 0-1.934-2Z"
                  />
                  <path
                    d="M11.066 4H7v5a2 2 0 0 1-2 2H0v7a1.969 1.969 0 0 0 1.933 2h9.133A1.97 1.97 0 0 0 13 18V6a1.97 1.97 0 0 0-1.934-2Z"
                  />
                </svg>
                Copy
              </span>
              <span
                v-else
                class="contact@ralo.dev flex gap-x-1"
              >
                <svg
                  class="my-auto h-4 w-4 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                  />
                </svg>
                Copied
              </span>
            </button>
          </div>
          <a
            href="https://github.com/ralodev"
            target="_blank"
          >
            <PrimaryButton
              severity="bg-neutral-800"
              title="GitHub"
              type="icon"
            >
              <GitHub />
            </PrimaryButton>
          </a>
          <a
            href="https://www.linkedin.com/in/raul-lc/"
            target="_blank"
          >
            <PrimaryButton
              severity="bg-[#0e72a3]"
              title="LinkedIn"
              type="icon"
            >
              <LinkedIn />
            </PrimaryButton>
          </a>
        </div>
      </span>
      <span class="flex w-full flex-col text-center">
        Alternatively, you can use this form to send me a message:
        <form
          action="https://getform.io/f/e69a0dfe-0aa2-403e-abc8-a745cf4fd478"
          method="POST"
          class="flex max-w-[600px] flex-col gap-y-5 self-center pt-3 text-start"
        >
          <label
            class="block"
            for="name"
          >
            <span class="mb-1">
              Name
              <span class="text-red-500">*</span>
            </span>
            <input
              type="text"
              name="name"
              id="name"
              title="Name"
              autocomplete="name"
              placeholder="Your name goes here"
              class="block min-h-[45px] w-full select-all rounded-md rounded-s-md border-[1px] bg-white ring-0 focus:ring-1 focus:ring-primary dark:bg-slate-800"
              required
            />
          </label>
          <label
            class="block"
            for="email"
          >
            <span class="mb-1"
              >Email address
              <span class="text-red-500">*</span>
            </span>
            <input
              type="email"
              title="Email address"
              id="email"
              name="email"
              autocomplete="email"
              placeholder="your_email@address.com"
              class="block min-h-[45px] w-full select-all rounded-md rounded-s-md border-[1px] bg-white ring-0 focus:ring-1 focus:ring-primary dark:bg-slate-800"
              required
            />
          </label>
          <label
            class="block"
            for="message"
          >
            <span class="mb-1"
              >Message
              <span class="text-red-500">*</span>
            </span>
            <textarea
              rows="3"
              title="Message"
              id="message"
              name="message"
              class="block min-h-[45px] w-full select-all rounded-md rounded-s-md border-[1px] bg-white ring-0 focus:ring-1 focus:ring-primary dark:bg-slate-800"
              placeholder="Why are you contacting me?"
              required
            ></textarea>
          </label>
          <p class="block text-start">
            <span class="mb-1 italic text-gray-500">
              Although I love robots, I prefer to receive messages from humans,
              so please prove you are one by checking the box below
            </span>
          </p>
          <vue-recaptcha
            v-show="showRecaptcha"
            sitekey="6Lf2JlgoAAAAAApyzcXXK-9WljZW1MgTrTsyKg99"
            size="normal"
            class="self-center"
            :loading-timeout="loadingTimeout"
            @verify="recaptchaVerified"
            @expire="recaptchaExpired"
            @fail="recaptchaFailed"
            @error="recaptchaError"
            ref="ReCaptchaElement"
          >
          </vue-recaptcha>
          <input
            type="text"
            name="_lastname"
            id="_lastname"
            aria-label="Last name"
            aria-hidden="true"
            tabindex="-1"
            class="invisible m-0 h-0 w-0 p-0"
            v-model="gotcha"
          />
          <PrimaryButton
            :label="isHuman ? 'Send message' : 'Beep boop boop 🤖'"
            class="self-center"
            :severity="isHuman ? 'primary' : 'secondary'"
            :disabled="!isHuman"
          />
        </form>
      </span>
    </div>
  </section>
</template>

<script lang="ts" setup>
import PrimaryButton from '@/components/buttons/PrimaryButton.vue';
import vueRecaptcha from 'vue3-recaptcha2';
import GitHub from '@/components/icons/GitHub.vue';
import LinkedIn from '@/components/icons/LinkedIn.vue';
import { ref, watch } from 'vue';

const isHuman = ref(false);
const showRecaptcha = ref(true);
const loadingTimeout = ref(10000);
const ReCaptchaElement = ref(null);
const email = 'contact@ralo.dev';
const gotcha = ref('');
const copied = ref(false);
function verify() {
  console.log('Recaptcha verified');
  isHuman.value = true;
}
function recaptchaVerified() {
  verify();
}
function recaptchaExpired() {
  console.log('Recaptcha expired');
  isHuman.value = false;
}
function recaptchaFailed() {
  console.log('Recaptcha failed');
}
function recaptchaError(reason: any) {
  console.log('Recaptcha error', reason);
}

function copyEmail() {
  if (copied.value) return;
  navigator.clipboard.writeText(email);
  copied.value = true;
  setTimeout(() => {
    copied.value = false;
  }, 2000);
}

watch(
  () => gotcha.value,
  (newValue) => {
    if (newValue) {
      bot();
    }
  }
);

function bot() {
  console.log('Gotcha');
  window.location.href =
    'http://news.rr.nihalnavath.com/posts/Message-Sent-02788c4c';
}
</script>
