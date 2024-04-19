import { ref } from 'vue';
import { defineStore } from 'pinia';

export const authStore = defineStore("auth", () => {
    const user = ref(null)
    
    const signin = (u, token) => {
        localStorage.setItem("user", JSON.stringify(u))
        localStorage.setItem('token', token);
        user.value =u;
    }

    const logout = () => {
        localStorage.removeItem('token')
        user.value = null;
        localStorage.removeItem('user')
    }

    return { user, signin, logout }
})

