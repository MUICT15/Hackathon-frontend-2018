<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item ml-auto">
        <button type="button" class="btn btn-success" data-toggle="modal" data-target="#myModal">Registration</button>
        <button type="button" class="btn btn-bg" data-toggle="modal" data-target="#exampleModal">Login</button>
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
    isLoggedIn:true
      }
    },
    name: 'app'
  }

</script>

<style>
  .navbar-custom {
    background-color: #67DAFF;
  }

  .nav-link{
    color: white;
    font-size: 20px;
  }
  .nav-link:hover{
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

</style>
