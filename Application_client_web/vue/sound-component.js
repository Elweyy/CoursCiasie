/**
 * Components pour vue-exo-7.html
 */
Vue.component('soundicon', {
    template: 
    `
    <div>
    <p>
    <span>{{soundEmojis[level]}}</span>
    <input type="text" v-model="userMood">
    <button v-on:click="$emit('newmood')">Send</button>
    </p>
    <button v-on:click="$emit('voladonf')"> Mettre à fond</button>
    <button v-on:click="$emit('volazero')"> Couper tout</button>

    </div>`,
    props: ['level'],
    data() {
        return {
            soundEmojis: ['🔇', '🔈', '🔉', '🔊'],
            userMood: '...',
        }
    }
});


Vue.component('spinner',{
    template:`
    <div class="spinner">
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
        <div class="rect5"></div>
    </div>`
})

/**
 * 
 * V-model
 * 
 * modificateurs :
 * 
 *   .number: transformer la valeur en nombre
 * 
 *   .trim: retirer les espaces au début et à la fin de la saisie
 *      >>> note importante: on doit le faire sur tous les inputs de type chaine
 *   
 *     v-model.trim='maChaine
 * 
 * 
 * 
 */