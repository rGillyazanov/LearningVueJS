<template>
    <h1>Car ID: {{ id }}</h1>
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
        }
    }
</script>

<style scoped>

</style>