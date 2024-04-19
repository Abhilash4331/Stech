<template>
  <form
    class="w-full px-5 pb-9 min-h-screen flex flex-col items-center"
    @submit.prevent="submitForm"
  >
    <img src="../assets/images/logo.png" alt="Logo" class="size-40 mt-12" />
    <h1 class="text-2xl text-slate-200 mt-8 mb-16">Sign Up</h1>
    <Input class="w-full mt- mb-4" placeholder="Email" v-model="email" />
    <Input
      class="w-full mb-4"
      placeholder="Password"
      type="password"
      v-model="password"
    />
    <Input
      class="w-full mb-4"
      placeholder="Confirm Password"
      type="password"
      v-model="confirmPassword"
    />
    <div class="flex items-center mt-2">
      <input
        type="checkbox"
        checked
        class="mr-2 form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
        id="newsletter-checkbox"
      />
      <label for="newsletter-checkbox" class="text-gray-500 text-sm"
        >I would like to receive your newsletter and other promotional
        information.</label
      >
    </div>
    <Button class="mt-8" type="submit"> Sign up </Button>
    <nuxt-link class="text-sm text-slate-200 mt-4" to="#"
      >Forget your password?</nuxt-link
    >
    <nuxt-link class="text-sm text-slate-200 mt-3" to="login">Login</nuxt-link>
  </form>
</template>

<script setup>
import { ref } from "vue";
import Button from "../components/button.vue";
import Input from "../components/input.vue";

import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";


const email = ref("");
const password = ref("");
const confirmPassword = ref("");

const submitForm = async () => {
  if (password.value !== confirmPassword.value) {
    toast.error("Passwords do not match")
    return
  }

  fetch("/api/auth/signup", {
    method: 'POST',
    body: JSON.stringify({ email: email.value, password: password.value }),
    headers: {
      "Content-Type": "application/json"
    }
  }).then((res) => res.json())
  .then((data) => {
    console.log(data)
    if (data.error) {
      toast.error("An error occured: ", data.error)
    } else {
      toast.success("Account is created, login now")
     setTimeout(() => { navigateTo("/login")}, 2000)
    }

  }).catch((error) => {
    console.log("Error: ", error.message)

    toast.error("An error occured: ", error.message)
  })
  
};
</script>
