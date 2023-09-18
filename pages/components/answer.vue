<script lang="ts">


export default {
  props: {
    text: String,
    isRightAnswer: Boolean,
    isWrongAnswer: Boolean,
    showAnswer: Boolean
  },
  data() {
    return {

    };
  },
};
</script>

<template>
  <button
    class="w-full bg-gray-200 rounded-lg p-4 transition md:text-lg md:p-6"
    @click="console.log('check')"
    :class='{
        "bg-green-300": isRightAnswer && showAnswer,
        "bg-red-300": isWrongAnswer && showAnswer,
    }'

  >{{ text }}</button>
</template>