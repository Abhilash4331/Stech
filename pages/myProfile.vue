<template>
    <div>
        <div class="flex items-center justify-between p-2">
            <img class="size-6" src="../assets/images/menu.png"/>
            <h1 class="text-2xl text-white">My Profile</h1>
            <img class="size-12" src="../assets/images/avatar.png">
        </div>

        <div class="flex items-center justify-between p-2 text-white mt-5 px-4">
            <h1 class="text-2xl">Abhilash</h1>
            <!-- <p class="text-sm">edit</p> -->
            <Button class="w-4" @click="Logout" >Logout</Button>
        </div>

        <div>
            <a class="underline px-5 block mt-2 text-white" href="mailto:">{{auth.user?.email}}</a>
        </div>

        <form class="w-full px-4 pb-9 flex flex-col" @submit.prevent="resetPassword">
            <h1 class=" mt-8  text-white">Change Password:</h1>
            <Input class="w-full mt-5 mb-4" placeholder="Old Password" type="password" v-model="oldPassword" />
            <Input class="w-full mb-4" placeholder="Password" type="password" v-model="password" />
            <Input class="w-full mb-4" placeholder="Confirm Password" type="password" v-model="confirmPassword" />
            <Button class="mt-3" type="submit">
                Change Password
            </Button>
        </form>
    </div>
    
</template>

<script setup>
import { ref } from 'vue';

const password = ref('');
const oldPassword = ref('');
const confirmPassword = ref('');

//store
import {authStore} from '../stores/authStore'
const auth = authStore()


const resetPassword = async () => {
  try {
    // Validate password fields
    if (password.value !== confirmPassword.value) {
      throw new Error('Passwords do not match');
    }

    const token = localStorage.getItem('token');

    if (!token) {
      throw new Error('JWT token not found');
    }

    const response = await fetch('/api/auth/reset', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        password: password.value,
        oldPassword: oldPassword.value,
        token: token, // Sending token in the request body
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to reset password');
    }

    const data = await response.json();

    // Reset form fields on successful password reset
    password.value = ''; // Clear password field
    oldPassword.value = ''; // Clear oldPassword field
    confirmPassword.value = ''; // Clear confirmPassword field

    console.log('Password reset successfully');
    console.log('Response Data:', data);
  } catch (error) {
    console.error('Error resetting password:', error.message);
    // Handle error (e.g., show error message to user)
  }
};

onMounted(() => {
  const user = localStorage.getItem('user')
  if (user) {
    auth.signin(JSON.parse(user), localStorage.getItem('token'))
  }
})

const Logout = () => {
    auth.logout()
    navigateTo('/login')
}
</script>
../stores/authStore