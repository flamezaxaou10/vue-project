<template>
  <div class="setting">
    <h1 class="blue-text">SETTING</h1>
    <div class="row">
      <div class="col s12">
        <div class="col s4"></div>
        <div class="input-field col s4 text-center">
          <h5> Player Name </h5> <input v-model="name" id="name" type="text" class="validate">
        </div>
        <div class="col s4"></div>
      </div>
      <div class="col s12">
        <div class="col s4"></div>
        <div class="input-field col s4 text-center ">
          <h5> Room Name </h5> <input v-model="room" id="room" type="text" class="validate">
        </div>
        <div class="col s4"></div>
      </div>
    </div>
    <div class="row">
      <div class="col s12">
        <button class="waves-effect waves-light btn blue" id="btn-w" v-on:click="addroom()">NEXT</button>
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
    name: 'setting',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      addroom: function () {
        firebase.database().ref('room/' + '001').set({
          roomname: this.room,
          author: this.name
        })
        alert('Success')
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
  width : 20%;
  height: 70px;
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
