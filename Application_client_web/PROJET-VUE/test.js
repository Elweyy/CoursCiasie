Vue.component('mylist',{
    template: `<li class="mespuces">
        <slot></slot>
    </li> `
});



Vue.component('artist-list',{
    template:
    `
        
        <table v-if="infomusic !=''" class="table">
            <tr>
                <th scope="col"> Name </th>
                <th scope="col"> Country </th>
                <th scope="col"> Type </th>
                <th scope="col"> Albums </th>
            </tr>
            <tr v-for="info in infomusic">
                <td> {{info.name}} </td>
                <td> {{info.country}} </td>
                <td> {{info.type}} </td>
                <td> <button v-on:click="$emit('showalbumsevent', info.id)"> Afficher les albums </button> </td>
            </tr>
        </table>
        
    `,
    props:['infomusic']
})


Vue.component('music-list',{
    template:
    `
        <table v-if="!infomusic ==''" class="table">
            <tr>
                <th scope="col"> Title </th>
                <th scope="col"> Score </th>
            </tr>
            <tr v-for="info in infomusic">
                <td> {{info.title}} </td>
                <td> {{info.score}} </td>
            </tr>
        </table>
        
    `,
    props:['infomusic']
})

Vue.component('albums-list',{
    template:
    `
    <table v-if="!infomusic ==''" class="table">
    <tr>
        <th scope="col"> Title </th>
        <th scope="col"> Date </th>
        <th scope="col"> Releases </th>
    </tr>
    <tr v-for="info in infomusic">
        <td> {{info.title}} </td>
        <td> {{info.date}} </td>
        <td>  <button v-on:click="$emit('showtracksevent', info.id)"> Afficher les titres </button> </td>
    </tr>
</table>

        
    `,
    props:['infomusic']
})

Vue.component('albums-art-list',{
    template:
    `
        <table v-if="!infomusic ==''" class="table">
            <tr>
                <th scope="col"> Title </th>
                <th scope="col"> Date </th>
                <th scope="col"> Releases </th>
            </tr>
            <tr v-for="info in infomusic">
                <td> {{info.title}} </td>
                <td> {{info.date}} </td>
                <td>  <button v-on:click="$emit('showtracksevent', info.id)"> Afficher les titres </button> </td>
            </tr>
        </table>
        
    `,
    props:['infomusic']
})

Vue.component('albums-tracks-list',{
    template:
    `
        <table v-if="!infomusic ==''" class="table">
            <tr>
                <th scope="col"> Title </th>
            </tr>
            <tr v-for="info in infomusic">
                <td> {{info.title}} </td>
            </tr>
        </table>
        
    `,
    props:['infomusic']
})