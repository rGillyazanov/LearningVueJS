<template>
    <div class="car">
        <h3>Name: {{ carName }} \ {{ reverseName }}</h3>
        <p>Year: {{ carYear }}</p>

        <button @click="changeName">Change name</button>
        <button @click="changeFunc()">Change function from parent</button>
    </div>
</template>

<script>
    export default {
        name: "Car",
        props: {
            carName: {
                type: String,
                required: true
            },
            carYear: {
                type: Number,
                required: true,
                default: 2015
            },
            changeFunc: Function
        },
        computed: {
            reverseName() {
                return this.carName.split('').reverse().join('');
            }
        },
        methods: {
            changeName() {
                this.carName = 'Mazda';
                this.$emit('nameChanged', this.carName);
            }
        }
    }
</script>

<style scoped>
    .car {
        border: 1px solid black;
    }
</style>