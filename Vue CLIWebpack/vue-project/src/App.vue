<template>
    <div>
        <h1>Parent: {{ carName }}</h1>
        <car :carName="carName"
             :carYear="carYear"
             :changeFunc="changeNameToAudi"
             :counter="counter"
             @nameChanged="carName = $event"
             @counterUpdated="counter = $event"></car>

        <counter :counter="counter"></counter>
    </div>
</template>

<script>
import Car from './Car'
import Counter from "./Counter";

export default {
    data () {
        return {
            carName: 'Ford',
            carYear: 2018,
            counter: 0
        }
    },
    methods: {
        changeNameToAudi() {
            this.carName = 'Audi';
        }
    },
    components: {
        car: Car,
        counter: Counter
    }
}
</script>

<style>

</style>