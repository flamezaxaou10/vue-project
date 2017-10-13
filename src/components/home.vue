<template>
  <div class="home">
    <h1 class="blue-text" id="headd">ULTIMATE WEREWOLF</h1>
    <div class="row">
      <div class="col s12">
        <router-link to="/setting"><button class="waves-effect waves-light btn blue" id="btn-w" >CREATE ROOM</button></router-link>
      </div>
    </div>
    <div class="row">
      <div class="col s12">
        <button class="waves-effect waves-light btn blue" id="btn-w">JOIN ROOM</button>
      </div>
    </div>
  </div>
</template>

<script>
  var Vue = require('vue')
  var VueMaterial = require('vue-material')
  Vue.use(VueMaterial)
  // Initialize Firebase
  var firebase = require('firebase')

  var config = {
    apiKey: 'AIzaSyDZiGEHS_dMBgz43QBCCdoKN5KX-Rulc6U',
    authDomain: 'vue-project-4a8f5.firebaseapp.com',
    databaseURL: 'https://vue-project-4a8f5.firebaseio.com',
    projectId: 'vue-project-4a8f5',
    storageBucket: 'vue-project-4a8f5.appspot.com',
    messagingSenderId: '232717547987'
  }
  firebase.initializeApp(config)

  export default {
    name: 'home',
    data () {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  font-family: 'Rubik Mono One', sans-serif;
}
#headd{
  margin-bottom: 150px;
}
#btn-w{
  width : 30%;
  height: 120px;
  margin-bottom: 150px;
  font-size : 32px;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
