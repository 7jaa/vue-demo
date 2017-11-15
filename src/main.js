// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
// import App from './App';
// import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    data() {
        return {
            message: '',
            nom: 'Dupont',
            prenom: 'Jean'
        };
    },
    computed: {
        nomComplet() {
            return `${this.nom} ${this.prenom}`;
        }
    },
    methods: {
        bonjour() {
            this.message += ' Bonjour!';
        },
        addToList() {
            this.personnes.push(this.message);
        }
    },
    filters: {
        maj(text) {
            return text.toUpperCase();
        }
    }
    /* router
    template: '<App/>',
    components: { App } */
});
