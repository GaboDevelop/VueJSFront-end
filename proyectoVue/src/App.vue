<template>
  <div id="app">
     <!--
      <h1>hola mundo</h1>  
      msg es una variable que estoy enviando al componente hijo 
    <Test msg="Adios!!!"/>

      <User/>
      -->
      <!--este componente es el que se sobre escribe por el componente a cargar de la ruta-->
      <nav>
        <ul>
          <li>
            <!-- Router-lin es la etiqueta para redireccionar componentes-->
            <router-link to="/test">
              Test
            </router-link>
          </li>
          <li>
            <router-link to="/">
              User
            </router-link>
          </li>
        </ul>
      </nav>
      <hr>
      <router-view></router-view>
  </div>
</template>

<script>
//Aqui importo componentes hijos y su ruta
import Test  from "./components/text.vue";
import User from "./components/user.vue";

export default {
  name: 'App',
  components: {//aqui dentro menciono el nombre del mismo componente en etiqueta html
    Test,
    User
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
