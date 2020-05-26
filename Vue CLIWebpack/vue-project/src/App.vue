<template>
    <div>
        <h2 v-colored:background.font="'red'">{{ title }}</h2>
        <h2 v-colored:color.delay.font="'yellow'">{{ title }}</h2>

        <h2 v-font>Local font directive</h2>

        <h2>{{ title | lowercase }}</h2>
        <h2>{{ title | uppercase }}</h2>
        <h2>{{ title | uppercase | lowercase }}</h2>

        <list></list>

        <h2>Form inputs</h2>
        <input type="text" v-model.lazy="name">
        <p>{{ name }}</p>

        <textarea name="" id="" cols="30" rows="10" v-model="textarea"></textarea>
        <p>{{ textarea }}</p>
    </div>
</template>

<script>
import listMixin from "./listMixin";

export default {
    data() {
        return {
            title: 'Hello I am div',
            name: '',
            textarea: 'I am text area'
        }
    },
    mixins: [listMixin],
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
    textarea {
        height: 100px;
        width: 400px;
    }

    p {
        white-space: pre;
    }
</style>