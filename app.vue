<template>
  <div class="mx-auto min-h-screen w-full max-w-[500px]">
    <NuxtPage  />
  </div>
</template>


<style>
body {
  background: linear-gradient(180deg, #25648F 0%, #00111B 100%);
  background-size: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

</style>

