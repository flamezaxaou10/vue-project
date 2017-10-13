<template>
  <div class="hello">
    <h1 class="blue-text">VUE-PROJECT</h1>
    <div class="row">
      <div class="col s12">

      </div>
    </div>
  </div>
</template>

<script>
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
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
