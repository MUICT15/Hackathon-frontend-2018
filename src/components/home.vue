<template>
  <main>
    <div class="container">
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <img id="homeimg" src="https://images.vexels.com/media/users/3/144435/raw/9c5af286a9bf9bb8ef5240f179601e04-abstract-background-with-colorful-squares-and-lines.jpg">
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row align-items-start align-items-center">
        <div class="col">
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100 h-100" src="./../assets/29513583_1543060895804637_1392680582_o.png" alt="First slide">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100 h-100" src="./../assets/29513583_1543060895804637_1392680582_o.png" alt="Second slide">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100 h-100" src="./../assets/29634035_1543060902471303_2075093126_o.png" alt="Third slide">
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
      <div class="row align-items-end" style="background-color:#9ccc65" id="#homeimg">
        <div class="col">
          <h1>Welcome to Star Cruise Platform</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <div class="row">
            <div class="col-sm">
              <router-link to="userAgent">Test</router-link>
            </div>
          </div>
          <div class="row align-items-end" style="background-color:#9ccc65" id="#homeimg">
            <div class="col">
              <h2>How to use</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
  </main>
</template>
<style>
  #homeimg {
    width: 100%;
    height: 100%;

  }

</style>
<script>
  export default {

  }

</script>
