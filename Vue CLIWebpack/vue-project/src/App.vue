<template>
    <div>
        <h1>Parent: {{ carName }}</h1>
        <car :carName="carName" :carYear="carYear"></car>
    </div>
</template>

<script>
import Car from './Car.vue'

export default {
    data () {
        return {
            carName: 'Ford',
            carYear: 2018
        }
    },
    components: {
        car: Car
    }
}
</script>

<style>

</style>