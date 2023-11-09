<script setup lang="ts">
 import navbar from './components/navbar.vue'
</script>

<template>
    <navbar></navbar>
    <div class="container mx-auto mt-5">
      <h2 class="text-center text-3xl font-bold mb-2">Leaderboard</h2>
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Spieler
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Punkte
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="(entry, index) in leaderboard" :key="index">
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="text-sm font-medium text-gray-900">{{ entry.player }}</div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ entry.score }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
 
  export default {
    name: 'Leaderboard',
    data() {
      return {
        leaderboard: [
          { player: 'Jonas', score: 250 },
          { player: 'Nicklas', score: 300 },
          { player: 'Markus', score: 225 },
          { player: 'Katherina', score: 250 },
          { player: 'Max', score: 225 },
          // ...weitere Spieler
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Hier können Sie zusätzliche TailwindCSS-Stylingregeln hinzufügen, wenn Sie möchten */
  </style>
  