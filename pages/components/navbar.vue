
<script setup lang="ts">
const {
  signOut,
  data
} = useSession()
</script>

<template>
    <div v-if="data" class="bg-indigo-600">
      <nav
        class="
          container
          px-6
          py-4
          mx-auto
          md:flex md:justify-between md:items-center
        "
      >
        <div class="flex items-center justify-between">
          <a
            href="/"
            class="
              text-xl
              font-bold
              text-gray-100
              md:text-xl
              hover:text-indigo-400
            "
            >Quizapp
        </a>
          <!-- Mobile menu button -->
          <div @click="toggleNav" class="flex md:hidden">
            <button
              type="button"
              class="
                text-gray-100
                hover:text-gray-400
                focus:outline-none focus:text-gray-400
              "
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
  
        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="
            flex-col
            mt-8
            space-y-4
            md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0
          "
        >
          <a href="/" class="text-gray-100 hover:text-indigo-400">Home</a>
          <a href="/" class="text-gray-100 hover:text-indigo-400">Solo-Quiz</a>
          <a href="/" class="text-gray-100 hover:text-indigo-400">Duo-Quiz</a>
          <!-- <a v-if="(data as any).admin == '1'" href="/admin" class="text-gray-100 hover:text-indigo-400">Profil</a> -->
          <a @click="signOut()" class="text-gray-100 hover:text-indigo-400">Abmelden</a>
        </ul>
      </nav>
    </div>
  </template>
<script lang="ts">
export default {
  data() {
    return {
      showMenu: false
    };
  },
  methods: {
    toggleNav() {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>