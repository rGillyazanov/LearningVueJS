<template>
    <div>
        <h2 v-colored:background.font="'red'">{{ title }}</h2>
        <h2 v-colored:color.delay.font="'yellow'">{{ title }}</h2>
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