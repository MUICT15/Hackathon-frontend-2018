<template>
  <div class="box">
    <h1>Login</h1>
    <br>
    <br>
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
      <button type="button" class="btn btn-primary" @click="login()">Login</button>
      <router-link to="reg" style="padding:10px">Didn't join yet ? Register</router-link>
    </form>
  </div>
</template>
<script>
  import {
    feather
  } from '../feathers';
  import cookie from 'js-cookie'
  import jwtDecode from 'jwt-decode';
  export default {
    data: function () {
      return {
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
          console.log(response)
          const id = cookie.get('feathers-jwt')
          if (id != undefined) {
            const {
              userId
            } = jwtDecode(id);
            cookie.set('userId', userId)
          }
          this.$router.push('userAgent')
        });
      }
    }
  }

</script>
<style>
  .box {
    background-color: #F4F4F4;
    border-radius: 7px;
    width: 80%;
    height: 500px;
    color: #333333;
    margin: 10% 10%;
    padding: 20% 20%;
    overflow: hidden;
    padding: 50px;
    align-items: center;
    justify-content: space-around;
    float: none;
  }

</style>
