<template>
    <div>
        <h1>{{ msg }}</h1>
        <car></car>
    </div>
</template>

<script>
import Car from './Car.vue'

export default {
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    components: {
        car: Car
    }
}
</script>

<style>

</style>