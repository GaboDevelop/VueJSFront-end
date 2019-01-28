<template>
<!--Debe haber un solo div que englobe el-- >
<!-- la etiqueta v-html , transforma variables que vengas del script al estilo html y las muestra -->
<!-- la etiqueta v-if sirve como condicional if , y si se cumple la condicion , pasa lo que este adentro-->    
<!-- la etiqueta v-else sirve como caso contrario del if , si no se cumple , hace el else-->
<!-- v-if-else sirve como otra condicional luego de la principal-->
<!-- v-for sirve para recorrer arreglos de las variables haciendo uso de una variable singular de un arreglo plural--> 
<!-- v-on:"algo" sirve para trabajar los eventos en vue , como llamado a funciones al dar un click en un boton--> 
<!-- :"algo" pueden ser click , keyup , v-on:keyup.enter (toma el evento enter)-->
<!-- v-model:"" sirve para afectar variables que estan en data , si se afecta esa etiqueta en el html , se afectara el data en el script-->
    <div>
        <div class="prueba1">
            {{ fullName }}
        </div>

        <div>
            {{ msg }}
        </div>

        <input type="text" v-model="user.firstName">

        <div v-html= "title"></div>
         
         
         <div v-if="showName">
            <p>{{user.firstName}}</p>
        </div>
         <div v-else>
            <p>no se puede mostrar nombre</p>
        </div>

        <hr>

        <ul>
            <li v-for="task in tasks">
                {{task.title}}
            </li>
        </ul>

        <button type="button" name="button" v-on:click="saludar(user.firstName)">
            Click me
        </button>

        <hr>

        <input type="text" v-on:keyup="typing">

        <hr>

         <input type="text" v-on:keyup.enter="typedEnter">

    </div>

    
   
</template>


<script>
    export default {
        data(){ //este metodo sirve para los datos de la vista
            return {//aqui retorno los objetos que pueso usar en la vista
                title: "hola vue",
                user: {
                    firstName: "jose",
                    lastName: "Ortega"
                },
                myHtml: '<h1>hola que paso</h1>',
                showName: true,
                tasks: [
                    {title: "eat"},
                    {title: "dinner"}
                ]
            }
        },
        methods: {//Aqui es donde puedo agregar metodos de mi seccion
            saludar(name) {
                alert('hola '+name)
            },
            typing(e){//e de evento
                console.log(e.target.value);
                if(e.target.keyCode == 13){//codigo assci de enter(no funciona)
                    console.log('diste un Enter en funcion 1')
                }
            },
            typedEnter(e){
                console.log('diste enter en funcion 2')
            }
        },
        computed:{//metodos computados los cuales se ejecutan en segundo plano
            fullName(){
                return this.user.firstName+' '+this.user.lastName;
            }
        },
        props:{//propiedaades , esta se encarga de configurar los datos recibidos desde afuera
            msg:{//propiedad de la variable recibida
                type:String,
                default: "mensaje por defecto"//este sera el mensaje si no hay variables con ese nombre pasadas
            }
        }
    }
</script>


<style>

.prueba1{
    background: black;
    color: white;
}

</style>
