<template>
  <div class="box">
    <h1>Registration</h1>
    <br>
    <br>
    <form action="/action_page.php">
      <div class="form-group">
        <label for="email">Email address:</label>
        <input type="email" class="form-control" id="email" v-model="username">
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
      <button type="button" class="btn btn-primary" @click="register()">register</button>
    </form>
  </div>
</template>
<script>
import {userService} from '../feathers';
  export default {
    data: function () {
      return {
        username: '',
        password: ''
      }
    },
    methods:{
      register: function(){
        userService.create({
          email: this.username,
          password: this.password
        }).then((data)=>{
          console.log(data)
          this.$router.push('login')
        }).catch((err)=>{
          console.log(err)
        })
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
