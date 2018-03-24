<template>
  <div class="contrainer">
    <div class="row">
      <div class="col-md-12 col-sm-12 col-xs-12 text-center">
        <br>
        <br>
        <h1>Who are you ?</h1>
      </div>
      <div class="col-md-6 col-sm-6 col-xs-12 text-center">
        <img src="https://image.flaticon.com/icons/svg/265/265667.svg">
        <br>
        <button class="btn btn-primary">Business owner</button>
      </div>
      <div class="col-md-6 col-sm-6 col-xs-12 text-center">
        <img src="https://image.flaticon.com/icons/svg/265/265668.svg">
        <br>
        <button class="btn btn-primary" @click="freelancer()"> Freelancer</button>
        <br>
        <br>
        <button class="btn btn-primary"> premium Freelancer</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .col-md-6 {
    padding-bottom: 20%;
  }

  /* button.freelance {
    background-color: #5FAAFF;
    border-color: #5FAAFF;
    color: white;
  } */

  img {
    position: relative;
    width: 40%;
    margin: 0 auto;
    padding-bottom: 10%;
  }

  button {
    width: 80%;
    font-size: 30px;
  }

</style>
<script>
  import {
    userService,
    feather
  } from '../feathers';
  import cookie from 'js-cookie';
  export default {
    created: function(){
      feather.authenticate({
          strategy: 'jwt',
          accessToken: cookie.get('feathers-jwt')
        }).then((data) => {
          userService.get(cookie.get('userId')).then((data) => {
            console.log(data.role)
            if(data.role == 'freelancer' || data.role == 'premiumFreelancer'){
              console.log('sss')
              this.$router.push('fDashboard');
            }else if(data.role == 'bussinessOwner'){
              this.$router.push('bDashboard');
            }
          })
        })
    },
    methods: {
      bussinessOwner: function(){
        feather.authenticate({
          strategy: 'jwt',
          accessToken: cookie.get('feathers-jwt')
        }).then((data) => {
          userService.patch(cookie.get('userId'), {
            role: 'bussinessOwner'
          }).then((data) => {
            console.log(data)
            this.$router.push('bDashboard');
          })
        })
      },
      freelancer: function () {
        feather.authenticate({
          strategy: 'jwt',
          accessToken: cookie.get('feathers-jwt')
        }).then((data) => {
          userService.patch(cookie.get('userId'), {
            role: 'freelancer'
          }).then((data) => {
            console.log(data)
            this.$router.push('fDashboard');
          })
        })
      },
      premiumfreelancer: function() {
        feather.authenticate({
          strategy: 'jwt',
          accessToken: cookie.get('feathers-jwt')
        }).then((data) => {
          userService.patch(cookie.get('userId'), {
            role: 'premiumFreelancer'
          }).then((data) => {
            console.log(data)
            this.$router.push('fDashboard');
          })
        })
      }
    }
  }

</script>
