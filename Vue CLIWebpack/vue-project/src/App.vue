<template>
    <div>
        <h2 v-colored="'green'">{{ title }}</h2>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Hello I am div'
        }
    }
}
</script>

<style scoped>
</style>