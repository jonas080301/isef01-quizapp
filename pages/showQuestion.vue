
<script setup lang="ts">

import navbar from './components/navbar.vue';
import Answer from './components/answer.vue';
import { ref, onMounted } from 'vue';



  const { data: question } = useFetch('/api/getQuestion')
  const showAnswer = useShowAnswer()
//   const selectedMajor = ref({id: null, name: "Bitte wählen..."});

//   const url = computed(() => `/api/getSubjects?major=${selectedMajor.value.id}`);
//   const { data: subjects } = await useFetch(url)

  
  
</script>

<template>
    <navbar></navbar>
    <div
      class="grid grid-rows-6 grid-cols-1 text-gray-600 mx-auto w-11/12 md:w-8/12 lg:w-7/12 overflow-y-hidden custom-height"
    >
      <div class="row-span-2">
        <div
          class="min-h-full items-center justify-between py-4 rounded-lg flex flex-col items-center"
        >
          <div class="flex my-4">
            <div
              v-for="(item, index) in null"
              class="w-3 h-3 rounded text-white mx-1 text-center text-xs flex items-center justify-center"
              :class="{
                'bg-green-300': true
              }"
            ></div>
          </div>
          <div
            class="flex items-center p-6 text-white rounded bg-gradient-to-r from-indigo-500 to-indigo-800 justify-center"
          >
            <h1
              class="text-center font-medium md:text-lg"
              
            >{{question?.question}}</h1>
          </div>
        </div>
      </div>
      <div class="row-span-3">
        <div class="min-h-full flex flex-col justify-center">
          <div class="grid grid-cols-1 gap-4 md:gap-4 md:grid-cols-2">
            <Answer
              v-for="(answer, id) in question?.possibilities"
              :key="answer"
              :text="answer"
              :is-right-answer="
                id == question?.correct
              "
              :is-wrong-answer="
                !(id == question?.correct)
              "
              :show-answer="showAnswer"
              @click="showAnswer = true;"
            ></Answer>
          </div>
        </div>
      </div>
      <div class="">
        <div class="min-h-full min-w-full flex items-center justify-center">
          <Transition name="grow-fade">
            <button
              @click="console.log(null)"
              class="px-12 py-4 bg-gray-600 text-white text-lg rounded-lg hover:bg-gray-700 transition w-full md:w-1/3"
              v-show="showAnswer"
            >
              Weiter
            </button>
          </Transition>
        </div>
      </div>
    </div>
  </template>