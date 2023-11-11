<template>
  <header>
    <nav class="fixed w-full z-10 md:py-6 py-4 transition-colors text-white" :class="background">
      <div
        class="md:px-60 flex flex-wrap justify-between items-center w-full"
      >
        <a href="#" class="flex items-center">
        </a>
        <div class="flex items-center lg:order-2">
          <a
            href="#"
            class= " font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 "
            @click.prevent="scrollTo('about')"
            >About</a
          >
          <a
            href="#"
            class= " font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 "
            @click.prevent="scrollTo('work')"
            >Works</a
          >
          <a
            href="#"
            class=" bg-primary-700 hover:bg-primary-800  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
            @click.prevent="scrollTo('cta')"
            >Get in touch</a
          >
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
const background = ref('header')

function handleScroll(event) {
  const verticalScrollPx = window.scrollY || window.pageYOffset;
  background.value = verticalScrollPx > 10 ? 'scrolled-header' : 'header'
}
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

function scrollTo(target) {
  if(document) {
    document.getElementById(`${target}`).scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}

</script>
