<template>

    <form class="w-full px-5 pb-9 min-h-screen flex flex-col  items-center" @submit.prevent="submitForm" v-if="!auth?.user">
        <img src="../assets/images/logo.png" alt="Logo" class="size-40 mt-12" />
        <h1 class="text-2xl text-slate-200 mt-16 mb-6  ">Login</h1>
        <Input class="w-full mt- mb-4" placeholder="Email" v-model="email" />
        <Input class="w-full mb-4" placeholder="password" type="password" v-model="password" />
        <Button class="mt-auto" type="submit">
            Log In
        </Button>
        <nuxt-link class="text-sm text-slate-200 mt-4" href="https://www.google.com">Forget your password?</nuxt-link>
        <nuxt-link class="text-sm text-slate-200 mt-3" to="/signUp">Sign Up</nuxt-link>
    </form>

    <div v-else>
      <h1>User already logged in {{auth.user.email}}</h1>
    </div>
    
    </template>

<script setup>
import { ref } from 'vue';
import Button from '../components/button.vue'
import Input from '../components/input.vue'
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

import {authStore} from '../stores/authStore'
const auth = authStore()


const email = ref('')
const password = ref('') 

const submitForm = async () => {
  fetch("/api/auth/signin", {
    method: 'POST',
    body: JSON.stringify({ email: email.value, password: password.value }),
    headers: {
      "Content-Type": "application/json"
    }
  }).then((res) => res.json())
  .then((data) => {
    if (data.error) {
      alert(data.error)
      toast.error(data.error, {
      position: toast.POSITION.TOP_RIGHT
      });
      return
    }

    auth.signin(data.data.user, data.data.token);
    navigateTo('/myProfile')
    console.log(data)
  }).catch((error) => console.log("Error: ", error.message))
};

onMounted(() => {
  const user = localStorage.getItem('user')
  if (user) {
    auth.signin(JSON.parse(user), localStorage.getItem('token'))
  }
})

</script>../stores/authStore