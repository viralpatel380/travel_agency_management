<template >
  <section class="section" >
    
    
    <div class="columns">
      <div class="column is-4 is-offset-4 is-auto">

        <div class="card" >
          <div class="card-header is-centered">
            <h2 class="card-header-title is-centered">Sign in to Travelaam Holidays</h2>
          </div>
          <div class="card-content">
            <form v-on:submit.prevent>
              <div class="field">
                <label class="label">Email</label>
                <div class="control">
                  <input class="input" type="email" placeholder="viral@travelaam.com" v-model="email">
                </div>
              </div>
              <div class="field">
                <label class="label">Password</label>
                <div class="control">
                  <input class="input" type="password" v-model="password">
                </div>
              </div>
              <button type="submit" class="button is-link" v-on:click="signIn">Sign-in</button>
            </form>
          </div>
          <footer class="card-footer">
   <a href="https://www.instagram.com/travelaam/" class="card-footer-item" id="insta">  <i class="fa fa-instagram" aria-hidden="true">
     </i></a>
    <a href="https://www.facebook.com/travelaam/" class="card-footer-item" id="fb">  <i class="fa fa-facebook" aria-hidden="true"></i></a>
   
  </footer>
        </div>
 
      </div>
    </div>
    
  </section>
</template>

<script>
import Firebase from "firebase";
export default {
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signIn: function() {
      Firebase.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.$router.replace('/success');
          },
          error => {
            alert(error.message);
          }
        );
    }
  }
};
</script>

<style lang="scss">
h2 {
font-family: Roboto !important;
font-size: 15pt !important;
font-weight: 250 !important; }
a{
  color: black;
}
#fb{
  background: linear-gradient(170deg, blue,darkblue);
-webkit-animation: AnimationName 2s ease infinite;
-moz-animation: AnimationName 2s ease infinite;
animation: AnimationName 2s ease infinite;
size: 0cm;
}
#insta {
   background: linear-gradient(270deg, orangered, rgb(255, 0, 179));
-webkit-animation: AnimationName 2s ease infinite;
-moz-animation: AnimationName 2s ease infinite;
animation: AnimationName 2s ease infinite;
size: 0cm;
}



.fa-instagram, .fa-facebook {
  color: white;
}



@-webkit-keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:20% 50%}
    20%{background-position:0% 50%}
}
@-moz-keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:20% 50%}
    20%{background-position:0% 50%}
}
@keyframes AnimationName { 
    0%{background-position:0% 50%}
    50%{background-position:20% 50%}
    20%{background-position:0% 50%}
}
</style>