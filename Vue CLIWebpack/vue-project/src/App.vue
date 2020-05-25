<template>
    <div>
        <h2 v-colored:background.font="'red'">{{ title }}</h2>
        <h2 v-colored:color.delay.font="'yellow'">{{ title }}</h2>

        <h2 v-font>Local font directive</h2>

        <h2>{{ title | lowercase }}</h2>
        <h2>{{ title | uppercase }}</h2>
        <h2>{{ title | uppercase | lowercase }}</h2>

        <input type="text" v-model="searchName">

        <ul>
            <li v-for="name of filteredNames">{{ name }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Hello I am div',
            names: ['Vlad', 'Max', 'Elena', 'Igor'],
            searchName: ''
        }
    },
    computed: {
        filteredNames() {
            return this.names.filter(name => name.toLowerCase().indexOf(this.searchName) !== -1)
        }
    },
    filters: {
        lowercase(value) {
            return value.toLowerCase();
        }
    },
    directives: {
        font: {
            bind(el, bindings, vNode) {
                el.style.fontSize = '40px'
            }
        }
    }
}
</script>

<style scoped>
</style>