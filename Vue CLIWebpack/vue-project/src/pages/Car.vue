<template>
    <div>
        <h1>Car ID: {{ id }}</h1>
        <button class="btn btn-info" @click="goBackToCars">Back</button>
        <hr>
        <router-link
                class="btn btn-success mt-2"
                tag="button"
                :to="{name: 'carFull', params: {id: id}, query: {name: 'Mazda', year: 2000}}"
        >
            Full info
        </router-link>
        <hr>

        <router-view></router-view>
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