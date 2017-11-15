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
            prenom: 'Jean',
            search: '',
            isRed: false,
            personnes: ['abcd', 'fesf', 'sdfs']
        };
    },
    computed: {
        nomComplet() {
            return `${this.nom} ${this.prenom}`;
        },
        personnesFiltered() {
            return this.personnes.filter((p) => {
                return p.includes(this.search);
            });
        }
    },
    methods: {
        bonjour() {
            this.message += ' Bonjour!';
        },
        addToList() {
            if (this.message.length > 0) {
                this.personnes.push(this.message);
                this.message = '';
            }
        },
        removeItem(i) {
            this.personnes.splices(i, 1);
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
