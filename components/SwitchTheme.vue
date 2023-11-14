<template>
    <div>
        <input type="checkbox" @change="onChangeTheme" v-model="$colorMode.preference" true-value="light" false-value="dark" id="toogle">
        <label for="toogle" class="toogle-button" data-label-on="&#9788;" data-label-off="&#9790;"></label>
    </div>
</template>
<script setup>
const colorMode = useColorMode()
</script>