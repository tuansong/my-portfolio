<template>
    <div class="company-card block max-w-sm p-6 bg-white rounded-lg shadow" data-aos="fade-up">
        <div  class="company-logo flex items-center justify-center">
            <img :src="image" :alt="title">
        </div>
            <p class="text-[#333]">
                {{  description }}
            </p>
        </div>
</template>

<script setup>
const props = defineProps({
  description: String,
  title: String,
  image: String,
});
</script>