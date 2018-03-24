<template>
  <div id="app">
    <nav v-if="isLoggedIn" class="navbar navbar-expand-sm navbar-custom">
      <a class="navbar-brand" href="#">B-owner</a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <button type="button" class="btn btn-success" data-toggle="modal" data-target="#myModal">
            Registration
          </button>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
      </ul>
    </nav>
    <nav v-else class="navbar navbar-expand-sm navbar-custom">
      <a class="navbar-brand" href="#">Freelance</a>
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
      </ul>
    </nav>
    <!-- The Modal -->
    <div class="modal fade" id="myModal">
      <div class="modal-dialog">
        <div class="modal-content">

          <!-- Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title">Registration</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
            <div class="container">
              <center>
                <!-- <h1>Registration</h1> -->
                <div class="row">
                  <div class="col-sm">
                    <img style="height: 10vw;" src="https://image.flaticon.com/icons/svg/265/265668.svg">
                    <br>
                    <h5>For business owner</h5>
                    <br>
                    <a href="#" class="btn btn-info" role="button">Register</a>
                  </div>
                  <div class="col-sm">
                    <img style="height: 10vw;" src="https://image.flaticon.com/icons/svg/265/265668.svg">

                    <br>
                    <h5>For freelancer</h5>
                    <a href="#" class="btn btn-info" role="button">Basic Registration</a>
                    <br>
                    <br>
                    <a href="#" class="btn btn-info" role="button">Fast-Lane Registration</a>
                  </div>
                </div>
              </center>
            </div>
          </div>



        </div>
      </div>
    </div>
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

  .nav-link {
    color: white;
  }

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
