<template>
    <div>
        <car>
            <h2 slot="title">{{ carName }}</h2>
            <p slot="text">Lorem ipsum dolor.</p>
        </car>
    </div>
</template>

<script>
import Car from './Car'

export default {
    data() {
        return {
            carName: 'Ford'
        }
    },
    components: {
        car: Car
    }
}
</script>

<style scoped>
    h2 {
        color: red;
    }
</style>