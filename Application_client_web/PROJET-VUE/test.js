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
            </tr>
            <tr v-for="info in infomusic">
                <td> {{info.name}} </td>
                <td> {{info.country}} </td>
                <td> {{info.type}} </td>
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