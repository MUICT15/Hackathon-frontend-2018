<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
        </ul>
        <ul class="navbar-nav mr-2">
          <li class="nav-item" >
            <a style="display: inline-block" class="nav-link" href="http://api.localhost/auth/google" >Registration</a>/
            <a  style="display: inline-block" class="nav-link" href="http://api.localhost/auth/google">Login</a>
          </li>
          </ul>
      </div>
    </nav>
    <!-- The Modal -->
    <!-- <div class="modal fade" id="myModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Registration</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>

          <div class="modal-body">
            <div class="container">
              <center>
                <div class="row">
                  <div class="col-sm">
                    <img style="height: 10vw;" src="https://image.flaticon.com/icons/svg/265/265668.svg">
                    <br>
                    <h5>For business owner</h5>
                    <br>
                    <a href="http://api.localhost/auth/google" class="btn btn-info" role="button">Register</a>
                  </div>
                  <div class="col-sm">
                    <img style="height: 10vw;" src="https://image.flaticon.com/icons/svg/265/265668.svg">

                    <br>
                    <h5>For freelancer</h5>
                    <a href="http://api.localhost/auth/google" class="btn btn-info" role="button">Basic Registration</a>
                    <br>
                    <br>
                    <a href="http://api.localhost/auth/google" class="btn btn-info" role="button">Fast-Lane Registration</a>
                  </div>
                </div>
              </center>
            </div>
          </div>



        </div>
      </div>
    </div> -->
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
