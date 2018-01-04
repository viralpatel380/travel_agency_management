<template>
  <div id="app">
    
    <header>
      <nav class="navbar">
        <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
        
Travelaam Holidays
          
        </router-link>
        </div>

        <div class="navbar-start">
          <router-link to="/add" class="navbar-item" v-if="!user">Add New Partner</router-link>
        </div>
       
          <a class="navbar-item" v-on:click="signOut">Signout</a>
          
       
      </nav>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',


  methods: {
    signOut: function() {
      Firebase.auth()
        .signOut()
        .then(() => {
          this.$router.replace('/auth');
        });
    }
  }
}

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #eee;
      color: rgb(0, 0, 0);
  }
  .navbar {
  background: linear-gradient(270deg, #00aeff, #0082bf, #005881, #00e6ff);
background-size: 800% 800%;

-webkit-animation: AnimationName 10s ease infinite;
-moz-animation: AnimationName 10s ease infinite;
animation: AnimationName 10s ease infinite;
size: 0cm;
  }
  .navbar-item, .navbar-link {
    color: rgb(255, 255, 255);
    font-weight: 100;
  }
  a {
    color: white;
  }

  @-webkit-keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@-moz-keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@keyframes AnimationName { 
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}

</style>
