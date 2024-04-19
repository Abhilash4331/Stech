<template>
  <button type="button" v-if="to" @click="onClick" class="py-2 px-2.5 bg-white rounded-full w-full text-slate-800 font-medium transition-all active:opacity-85 active:translate-y-1">
    <slot></slot>
  </button>
  <button type="button" v-else class="py-2 px-2.5 bg-white rounded-full w-full text-slate-800 font-medium transition-all active:opacity-85 active:translate-y-1">
    <slot></slot>
  </button>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps(['to'])

const onClick = () => {
  router.push(props.to)
}
</script>