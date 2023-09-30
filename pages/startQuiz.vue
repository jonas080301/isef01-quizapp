<script setup lang="ts">

import { ref, onMounted } from 'vue'
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions
  // @ts-ignore
} from '@headlessui/vue'
import navbar from './components/navbar.vue'

const { data: majors } : any = useFetch('/api/majors')

const selectedMajor = ref({ majorID: null, name: 'Bitte wählen...' })

const url = computed(() => `/api/subjects?majorID=${selectedMajor.value.majorID}`)

const { data: subjects }: any = await useFetch(url)

const selectedSubject = ref({ subjectID: "0", name: 'Bitte wählen...' })

const subject = useSubject()

const startQuiz = () => {
  subject.value = parseInt(selectedSubject.value.subjectID)
}

</script>

<template>
  <div>
    <navbar />

    <div class="w-11/12 mx-auto grid grid-cols-1 gap-y-8 lg:w-5/12 pt-10">
      <Listbox v-model="selectedMajor" as="div">
        <ListboxLabel class="block text-sm font-medium text-gray-700">
          Wähle deinen Studiengang
        </ListboxLabel>
        <div class="mt-1 relative">
          <ListboxButton
            class="relative w-full bg-white border border-gray-300 rounded-md shadow-md pl-3 pr-10 py-4 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <span class="flex items-center">
              <span class="ml-3 block truncate">{{
                selectedMajor.name || 'Lädt...'
              }}</span>
            </span>
            <span
              class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
            />
          </ListboxButton>

          <transition
            leave-active-class="transition ease-in duration-100"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <ListboxOptions
              class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
            >
              <ListboxOption
                v-for="major in majors"
                :key="major.majorID"
                v-slot="{ active, selectedMajor }"
                as="template"
                :value="major"
              >
                <li
                  :class="[
                    active ? 'text-white bg-indigo-600' : 'text-gray-900',
                    'cursor-default select-none relative py-2 pl-3 pr-9',
                  ]"
                >
                  <div class="flex items-center">
                    <span
                      :class="[
                        selectedMajor ? 'font-semibold' : 'font-normal',
                        'ml-3 block truncate',
                      ]"
                    >
                      {{ major.name }}
                    </span>
                  </div>

                  <span
                    v-if="selectedMajor"
                    :class="[
                      active ? 'text-white' : 'text-indigo-600',
                      'absolute inset-y-0 right-0 flex items-center pr-4',
                    ]"
                  />
                </li>
              </ListboxOption>
            </ListboxOptions>
          </transition>
        </div>
      </Listbox>

      <Listbox v-model="selectedSubject" as="div">
        <ListboxLabel class="block text-sm font-medium text-gray-700">
          Wähle einen Themenbereich
        </ListboxLabel>
        <div class="mt-1 relative">
          <ListboxButton
            class="relative w-full bg-white border border-gray-300 rounded-md shadow-md pl-3 pr-10 py-4 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <span class="flex items-center">
              <span class="ml-3 block truncate">{{ selectedSubject.name }}</span>
            </span>
            <span
              class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
            />
          </ListboxButton>

          <transition
            leave-active-class="transition ease-in duration-100"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <ListboxOptions
              class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
            >
              <ListboxOption
                v-for="subject in subjects"
                :key="subject.id"
                v-slot="{ active, selectedSubject }"
                as="template"
                :value="subject"
              >
                <li
                  :class="[
                    active ? 'text-white bg-indigo-600' : 'text-gray-900',
                    'cursor-default select-none relative py-2 pl-3 pr-9',
                  ]"
                >
                  <div class="flex items-center">
                    <span
                      :class="[
                        selectedSubject ? 'font-semibold' : 'font-normal',
                        'ml-3 block truncate',
                      ]"
                    >
                      {{ subject.name }}
                    </span>
                  </div>

                  <span
                    v-if="selectedSubject"
                    :class="[
                      active ? 'text-white' : 'text-indigo-600',
                      'absolute inset-y-0 right-0 flex items-center pr-4',
                    ]"
                  />
                </li>
              </ListboxOption>
            </ListboxOptions>
          </transition>
        </div>
      </Listbox>
      <NuxtLink to="/showQuestion">
        <button
          class="px-12 py-4 bg-gray-600 text-white text-lg rounded-lg hover:bg-gray-700 transition w-full"
          @click="startQuiz"
        >
          Los gehts!
        </button>
      </NuxtLink>
    </div>
  </div>
</template>
