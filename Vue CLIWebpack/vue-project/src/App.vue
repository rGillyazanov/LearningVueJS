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

        <label for="">
            <input type="checkbox" value="instagram" v-model="social"> Instagram
        </label>
        <label for="">
            <input type="checkbox" value="vk" v-model="social"> Vk
        </label>
        <label for="">
            <input type="checkbox" value="facebook" v-model="social"> Facebook
        </label>
        <hr>
        <ul>
            <li v-for="s in social">{{ s }}</li>
        </ul>
        <label for="">
            <input type="radio" value="instagram" v-model="socialRadio"> Instagram
        </label>
        <label for="">
            <input type="radio" value="vk" v-model="socialRadio"> Vk
        </label>
        <label for="">
            <input type="radio" value="facebook" v-model="socialRadio"> Facebook
        </label>
        <hr>
        <p>{{ socialRadio }}</p>

        <select v-model="defaultSocial">
            <option v-for="s in socialSelect">{{ s }}</option>
        </select>
    </div>
</template>

<script>
import listMixin from "./listMixin";

export default {
    data() {
        return {
            title: 'Hello I am div',
            name: '',
            textarea: 'I am text area',
            social: ['vk'],
            socialRadio: 'facebook',
            socialSelect: ['instagram', 'vk', 'facebook'],
            defaultSocial: 'vk'
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