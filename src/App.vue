<script setup lang="ts">
import { ref } from "vue";
const showModal = ref(false);
</script>

<template>
  <div class="bg-primary">
    <p class="underline text-foo2">Hello, Friend.</p>

    <button @click="showModal = true">Show Modal</button>

    <div
      v-if="showModal"
      class="bg-black/45 absolute left-0 top-0 w-full h-full flex justify-center items-center"
    >
      <div class="modal-content">
        <span
          @click="showModal = false"
          class="bg-white p-2 m-10 flex items-end justify-center rounded-md cursor-pointer absolute top-0 right-0"
          >Close</span
        >
        <p>Modal Content</p>
      </div>
    </div>
  </div>
</template>
