<template>
    <div class="relative">
        <input 
            class="rounded-lg py-2 px-2.5 text-sm font-medium font-sans text-[#BDBDBD] placeholder:text-slate-600 h-10 w-full" 
            :type="currentInputType" 
            :placeholder="placeholder"
            v-model="input"
            :disabled="disabled"
        />

        <button
            v-if="type == 'password'"
            type="button"
            class="absolute right-3 top-2.5 hover:opacity-80 active:scale-95 text-red-800 text-sm font-medium " 
            @click="tooglePassword">
            {{ currentInputType == 'password' ? 'show' : 'hide' }}
        </button>
    </div>
</template>


<script setup>

const input = defineModel()

const props = defineProps({
    placeholder: {
        type: String,
        default: 'Placeholder'
    },
    type: {
        type: String,
        default: 'text'
    },
    disabled: {
        type: Boolean,
        default: false
    }
})

const show = ref(false);
const currentInputType = computed(() => {
    return props.type == 'password' ?
        show.value ? 'text' : 'password'
        : props.type
})

const tooglePassword = () => {
    show.value = !show.value
}
</script>