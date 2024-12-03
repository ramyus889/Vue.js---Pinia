<script setup>
import UseHeader from './component/UseHeader.vue';
</script>

<template>
  <div class="">
    <div class="">
      <div class="hidden sm:block max-[640px]:overflow-hidden">
        <UseHeader />
      </div>
      <RouterView />
    </div>
  </div>
</template>
