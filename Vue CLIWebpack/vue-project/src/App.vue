<template>
    <div>
        <h2 v-colored v-if="isVisible">{{ title }}</h2>

        <button @click="isVisible = !isVisible">Visible</button>
        <button @click="title = 'New title'">Change title</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Hello I am div',
            isVisible: true
        }
    }
}
</script>

<style scoped>
</style>