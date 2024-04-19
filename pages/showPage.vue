<template>
  <div class="p-3 px-4 min-h-screen flex flex-col">
    <div class="flex items-center justify-between">
      <img src="../assets/images/arrow-narrow-left.png" @click="navigateTo('/')" class="cursor-pointer"/>
      <Input class="w-80 mx-2" placeholder="Show Name" />
      <Button class="!w-16">Save</Button>
    </div>
  
    <div class="flex items-center justify-between whitespace-nowrap mt-5">
      <h1 class="text-white text-xl font-semibold">12:15 pm</h1>
      <h1 class="text-white  font-bold sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl">00:00:00</h1>
      <Button class="!w-16">Start</Button>
    </div>
  
    <textarea class="flex-1 bg-white border border-gray-300 rounded-2xl shadow-md p-4 resize-none my-6 font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempora exercitationem sapiente sed molestias placeat ipsa eum odio soluta laboriosam tempore, eligendi illo in, eos quos reprehenderit iste nihil enim.    

Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non dolorem hic reprehenderit vel porro nihil perferendis repellendus, assumenda ea? Nesciunt iure molestias soluta consectetur esse ipsa possimus, eveniet voluptatem veritatis?

Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat fugiat eos, nesciunt pariatur voluptates ullam, explicabo animi maxime sequi nisi sit aperiam nemo ipsum illo fuga libero quam. Hic, debitis.        

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nostrum voluptates, architecto accusantium vel quis, minima natus incidunt minus, temporibus alias rerum distinctio similique ratione delectus eum. Accusamus, perferendis maxime?
    </textarea>
  </div>
</template>
  

<script setup>
  import Button from '../components/button.vue'
  import Input from '../components/input.vue'



</script>

