<template>
    <div class="company" data-aos="fade-up">
        <div  class="company-logo flex items-center justify-center bg-slate-800">
            <img :src="image" :alt="title">
        </div>
            <h3 class="text-2xl font-bold mt-2 mb-3">{{ title }}</h3>
            <p>
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