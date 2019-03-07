/* components réutilisables */
// IMPORTANT les components doivent être déclarés avant l'instance de Vue
// utilisé dans l'exo 6


Vue.component('mylist',{
    template: `<li class="mespuces">
        <slot></slot>
    </li> `
});


Vue.component('task-list', {
    template: `
    <div>
        <mylist v-for="task in tasks"> {{task.name}} </li>
    </div>
    
    
    `,

    data () {
        return {
            tasks: [
                { name: "Accélérateur d'Ions RHIC", cost: 650, field: "Physique" },
                { name: "Observatoire sous marin", cost: 2250, field: "Biologie" },
                { name: "Violoniste dans le métro", cost: 2, field: "Psychologie" },
                { name: "Accélérateur de particules", cost: 7700, field: "Physique" },
                { name: "Détecteur de particules -DIY", cost: 0, field: "Physique" },
                { name: "Mission de sauvetage des tortues", cost: 125, field: "Biologie" }
            ]
        }
    }

});

Vue.component('mynewlist',{
    props:['priorite'],
    template: `<li class="mespuces">
        <slot></slot> <br>
        <span class="prio">{{priorite}} </span>
    </li> `
});
