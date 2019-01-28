<template>
   
    <div class="users">
        <h1>User component</h1>
        <ul>
            <li v-for="user in users">
                {{user.name}} - {{user.email}} 
                <button v-on:click="deleteUser(user)">X</button>
            </li>
        </ul>

        <form v-on:submit.prevent="addUser"> 
            <input type="text" v-model="newUser.name" placeholder="name">
            <input type="email" v-model="newUser.email" placeholder="email">
            <button type="submit">
                Add
            </button>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            users: [],
            newUser: {
                name: '',
                email: '',
                contact: ''
            }
        }
    },
    methods: {
        addUser(e){
            this.users.push(this.newUser);
            this.newUser={};
        },
        deleteUser(user){
            this.users.splice(this.users.indexOf(user),1);//funcion que elimina del arreglo de usuario donde es igual y una sola posicion
        }
    },
    created() { //
        //la funcion de abajo depende de la dependencia vue-resource
        // .then es una promesa de js
        this.$http.get('https://jsonplaceholder.typicode.com/users')
            .then(res=> {
                this.users = res.body
            });
    }
}
</script>

<style>
 .users{
     background:#333;
     color: #fff;
     padiding: 20px;
 }

</style>
