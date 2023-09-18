<script setup lang="ts">
import navbar from './components/navbar.vue';
</script>

<template>
  <navbar></navbar>
  <div class="h-full w-full bg-gradient-to-b from-indigo-500">
    <div class="flex flex-col md:flex-row items-center">
      <div class="text-center basis-1/2 p-6">
        <p class="text-white text-5xl font-bold ">WAS MÖCHTEST DU HEUTE <span class="text-blue-800">LERNEN?</span></p>
        <p class="text-white text-3xl p-4">Lerne täglich neues!</p>
      </div>
      <div class="text-center basis-1/2 p-6">
        <img src="/assets/background_image.svg" />
      </div>
    </div>
    <div class="flex flex-col md:flex-row items-center align-center">
      <div class="text-center basis-1/3 p-6 w-full">
        <button class="flex items-center p-6 text-purple-100 rounded bg-gradient-to-r from-indigo-300 to-indigo-500 justify-center w-full">
          <img src="/assets/create_icon.png" class="mr-3 h-14" alt="Create Icon" />
          <p class="text-white text-3xl font-bold">Erstelle ein Quiz</p>
        </button>
      </div>
      <div class="text-center basis-1/3 p-6 w-full">
        <button class="flex items-center p-6 text-purple-100 rounded bg-gradient-to-r from-indigo-300 to-indigo-500 justify-center w-full">
          <img src="/assets/play_icon.png" class="mr-3 h-14" alt="Create Icon" />
          <p class="text-white text-3xl font-bold">Starte ein Duo</p>
        </button>
      </div>
      <div class="text-center basis-1/3 p-6 w-full">
        <a href="/startQuiz">
          <button class="flex items-center p-6 text-purple-100 rounded bg-gradient-to-r from-indigo-300 to-indigo-500 justify-center w-full">
            <img src="/assets/lesen_icon.png" class="mr-3 h-14" alt="Create Icon" />
            <p class="text-white text-3xl font-bold">Lerne Solo</p>
          </button>
        </a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
    name: 'Homescreen',

}
</script>
<style scoped>

</style>
