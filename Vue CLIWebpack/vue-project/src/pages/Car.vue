<template>
    <div>
        <h1>Car ID: {{ id }}</h1>
        <button class="btn btn-info" @click="goBackToCars">Back</button>
    </div>
</template>

<script>
    export default {
        name: "Car",
        data() {
            return {
                //id: this.$router.currentRoute.params['id']
                id: this.$route.params['id']
            }
        },
        watch: {
            $route (toRoute, fromRoute) {
                this.id = toRoute.params['id']
            }
        },
        methods: {
            goBackToCars() {
                this.$router.push('/cars');
            }
        }
    }
</script>

<style scoped>

</style>