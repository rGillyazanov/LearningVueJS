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
        <hr>
        <input type="text" v-model.number="age">

        <on-off v-model="switched"></on-off>
        <div>
            <h3 v-if="switched">Component is enabled</h3>
            <h3 v-else>Component is disabled</h3>
        </div>
        <hr>

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>Валидация</h1>
                    <h2>Установка и настройка проекта</h2>
                    <form action="" @submit.prevent="onSubmit">
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="email"
                                   id="email"
                                   class="form-control"
                                   :class="{'is-invalid': $v.email.$error}"
                                   v-model="email"
                                   @blur="$v.email.$touch()"
                            >
                            <div class="invalid-feedback" v-if="!$v.email.required">
                                Email field is required
                            </div>
                            <div class="invalid-feedback" v-if="!$v.email.email">
                                This field should be an email
                            </div>
                            <div class="invalid-feedback" v-if="!$v.email.exitsEmail">
                                This email already exists
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="password">Password:</label>
                            <input type="password"
                                   id="password"
                                   class="form-control"
                                   :class="{'is-invalid': $v.password.$error}"
                                   v-model="password"
                                   @blur="$v.password.$touch()"
                            >
                            <div class="invalid-feedback" v-if="!$v.password.minLength">
                                Min length of password is {{ $v.password.$params.minLength.min }}. Now it's {{ password.length }}.
                            </div>
                            <div class="invalid-feedback" v-if="!$v.password.required">
                                Password field is required
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="password">Confirm password:</label>
                            <input type="password"
                                   id="confirm"
                                   class="form-control"
                                   :class="{'is-invalid': $v.confirm.$error}"
                                   v-model="confirm"
                                   @blur="$v.confirm.$touch()"
                            >
                            <div class="invalid-feedback" v-if="!$v.confirm.sameAs">
                                Passwords should match
                            </div>
                        </div>
                        <button class="btn btn-success" type="submit"
                                :disabled="$v.$invalid"
                        >
                            Submit
                        </button>
                    </form>
                </div>
                <div class="col-12">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import listMixin from "./listMixin";
import OnOff from "./OnOff";
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'

export default {
    data() {
        return {
            title: 'Hello I am div',
            name: '',
            textarea: 'I am text area',
            social: ['vk'],
            socialRadio: 'facebook',
            socialSelect: ['instagram', 'vk', 'facebook'],
            defaultSocial: 'vk',
            age: 20,
            switched: true,
            email: '',
            password: '',
            confirm: ''
        }
    },
    methods: {
        onSubmit() {
            console.log("Submit");
            console.log('Email: ' + this.email);
            console.log('Password: ' + this.password);
        }
    },
    validations: {
        email: {
            required,
            email,
            exitsEmail: (newEmail) => newEmail !== 'test@mail.ru'
        },
        password: {
            required,
            minLength: minLength(6)
        },
        confirm: {
            sameAs: sameAs('password')
        }
    },
    watch: {
        age(value) {
            console.log(value);
        }
    },
    components: {
        onOff: OnOff
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