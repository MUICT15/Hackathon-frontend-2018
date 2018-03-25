<template>

  <!-- Login modal-->
  <div id="app">
    <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header text-center">
            <h5 class="modal-title" id="exampleModalLabel">Login</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="email">Email address:</label>
                <input type="text" class="form-control" id="email" v-model="username">
              </div>
              <div class="form-group">
                <label for="pwd">Password:</label>
                <input type="password" class="form-control" id="pwd" v-model="password">
              </div>
              <div class="form-check">
                <label class="form-check-label">
                  <input class="form-check-input" type="checkbox"> Remember me
                </label>
              </div>
              <br>
              <button type="button" class="btn btn-primary center" @click="login()" data-dismiss="modal">Login</button>
              <a href="#" data-toggle="modal" data-target="#registerModal" data-dismiss="modal" style="padding:10px">Didn't join yet ? Register</a>
              <br>
              <br>
              <a href="http://api.localhost/auth/google">
                <button type="button" class="btn google center">Login With Google</button>
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>

    <nav class="navbar navbar-expand-md bg-primary navbar-dark">
      <a href="/"><img src="../src/assets/logowhite.png"></a>
      <!-- Toggler/collapsibe Button -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar links -->
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item  ml-auto">
            <router-link style="display: inline-block" class="nav-link" to="reg">Registration</router-link>
          </li>
          <li class="nav-item  ml-auto">
            <a style="display: inline-block" class="nav-link" href="#" data-toggle="modal" data-target="#loginModal">Login</a>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import {feather} from './feathers'
  export default {
    name: 'app',
    data() {
      return {
        isLoggedIn: true,
        username: '',
        password: ''
      }
    },
    methods: {
      login: function () {
        feather.authenticate({
          strategy: 'local',
          email: this.username,
          password: this.password
        }).then(response => {
          this.$router.push('userAgent')
        });
      }
    }
  }

</script>

<style scoped>
  .navbar-brand {
    background-color: #03a9f4;
  }

  .google {
    background-color: rgb(155, 21, 3);
    color: white;
    width: 100%;
  }

  .center {
    position: relative;
    margin: 0 auto;
  }

  .active {
    color: white;
  }

  .active {
    color: white;
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

  img {
    width: 6vw;
    height: 6vw;
  }

</style>
