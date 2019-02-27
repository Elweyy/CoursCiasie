/**
 * Components pour vue-exo-7.html
 */
Vue.component('soundicon', {
    template: `<span>{{soundEmojis[level]}}</span>`,
    props: ['level'],
    data() {
        return {
            soundEmojis: ['🔇', '🔈', '🔉', '🔊']
        }
    }
});


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