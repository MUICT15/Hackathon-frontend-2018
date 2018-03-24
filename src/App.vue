<template>
  <div id="app">
    <nav class="navbar navbar-inverse navbar-fixed-top navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand rounded-circle" href="#"><img src="./assets/29550207_1542615552515838_771666361_n (1).png" class="rounded-circle" alt=""></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
        </ul>
        <ul class="navbar-nav mr-2">
          <li class="nav-item" >
            <router-link style="display: inline-block" class="nav-link" to="reg" >Registration</router-link>/
            <a  style="display: inline-block" class="nav-link" href="http://api.localhost/auth/google">Login</a>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        isLoggedIn: true
      }
    },
  }

</script>

<<<<<<< HEAD
<style>
.navbar-brand{
  background-color:  #03a9f4;
=======
<style scoped>
.active{
  color: white;
>>>>>>> 2903a8668eb9cf5d5642e3f1ae7f22277ca89d50
}
  .navbar-custom {
    background-color: #67DAFF;
  }

  .nav-link {
    color: rgb(255, 253, 253);
    font-size: 20px;
  }

  .nav-link:hover {
    color: white;
    font-size: 20px;
  }

  /* .navbar-toggler-icon{
    background-color: black;
  } */

  .navbar-brand {
    color: white;
  }

  body {
    margin: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  main {
    text-align: center;
    margin-top: 40px;
  }

  header {
    margin: 0;
    height: 56px;
    padding: 0 16px 0 24px;
    background-color: #35495E;
    color: #ffffff;
  }

  header span {
    display: block;
    position: relative;
    font-size: 20px;
    line-height: 1;
    letter-spacing: .02em;
    font-weight: 400;
    box-sizing: border-box;
    padding-top: 16px;
  }
  img{
    width: 6vw;
    height: 6vw;
  }
</style>
