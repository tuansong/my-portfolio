<template>
    <div id="work" class="relative bg-cover bg-no-repeat lg:text-left px-6 md:px-60 mt-28 md:mt-40">
        <h1 class="work-title text-5xl tracking-tight md:text-6xl xl:text-5xl font-bold mb-6 text-[#333] dark:text-[wheat]">Recent Projects & Work</h1>
        <p class="mb-6">Here a few things I've been working on lately</p>
        <div class=" grid grid-cols-1 md:grid-cols-3 gap-10">
            <NuxtLink v-for="project in projects" :key="project.title" :to="project.url" target="_blank">
                <Card 
                    :description="project.description" 
                    :image="project.image"
                />
            </NuxtLink>
            
        </div>
    </div>
</template>

<script setup>

const projects = [
    {
        title: 'Ekino',
        description: 'At Ekino I worked as Quality Control Assurance for checking Accor Hotel Booking Platform',
        image: 'images/ekino.png',
        url: 'https://www.ekino.vn/'
    },
    {
        title: 'CoderSchool',
        description: 'With CoderSchool I studied here and became a teaching assistant for Web Design Foundamental class',
        image: 'images/coderschool.png',
        url: 'https://www.coderschool.vn/en'
    },
    {
        title: 'Wizylance',
        description: 'I help my friend build this website and support Wizylance to hire freelancer',
        image: 'images/wizylance.png',
        url: 'http://www.wizylance.com/'
    },
    {
        title: 'I-ON Digital Corp',
        description: 'At Ion, we build ICE which is web builder and CMS for E-commerce website. Most of our clients are Korean big tech companies',
        image: 'images/ion.png',
        url: 'https://www.i-on.net/eng/index.html'
    },
    {
        title: 'Metaflyer',
        description: 'The CRM and automation marketing platform based on ICE builder',
        image: 'https://www.metaflyer.io/metaflyer/images/meta_logo.svg',
        url: 'https://www.metaflyer.io/'
    }
]
</script>