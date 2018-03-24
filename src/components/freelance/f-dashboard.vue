<template>
  <div>
    <div class="modal fade" id="bid" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            ...
          </div>
        </div>
      </div>
    </div>
    <center>
      <ul class="bg-dark">
        <br>
        <br>
        <li>
          <img src="https://image.flaticon.com/icons/svg/145/145867.svg" width="100" class="rounded-circle">
        </li>
        <br>
        <br>
        <li>
          <a href="news.asp">Profile</a>
        </li>
        <li>
          <a href="contact.asp">Off the shelf</a>
        </li>
        <li>
          <a href="about.asp">Made-to-order</a>
        </li>
      </ul>
    </center>
    <div class="text-center" style="margin-left:175pt;padding:20px 20px">
      <br>
      <h2>Your work</h2>
      <table class="table table-striped table-hover">
        <thead class="thead thead-light">
          <tr>
            <th>Project</th>
            <th>Progress</th>
            <th>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data , index) of listProject" v-bind:key="index">
            <td>{{data.name}}</td>
            <td>{{data.status}}</td>
            <td>
              <button class="btn btn-success" data-toggle="modal" data-target="#bid">bid price</button>
              <button class="btn btn-dager" @click="removeProject(index , data.name , data._id)">remove</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="text-center" style="margin-left:175pt;padding:20px 20px;">
      <br>
      <h2>list bidding Now</h2>
      <table class="table table-striped table-hover">
        <thead class="thead thead-light">
          <tr>
            <th>Project</th>
            <th>BussinessOwner</th>
            <th>Type of Product</th>
            <th>status</th>
            <th>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data , index) of listBidding" v-bind:key="index">
            <td>{{data.title}}</td>
            <td>{{data.consumerName}}</td>
            <td>{{data.typeOfProduct}}</td>
            <td>{{data.status}}</td>
            <td>
              <button class="btn btn-success" data-toggle="modal" data-target="#bid">bid price</button>
              <button class="btn btn-dager" @click="removeProject(index , data.name , data._id)">remove</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
  import {
    userService,
    feather,
    consumerProductService
  } from '../../feathers';
  import cookie from 'js-cookie';
  export default {
    data: function () {
      return {
        listProject: [],
        listBidding: []
      }
    },
    created: function () {
      userService.on('patched', (data) => {
        console.log(data.jobWorking)
        this.listProject = data.jobWorking;
      })
      consumerProductService.on('created' , (data)=>{
          console.log(data)
          this.listBidding.push(data)
      })
      feather.authenticate({
        strategy: 'jwt',
        accessToken: cookie.get('feathers-jwt')
      }).then((data) => {
        userService.get(cookie.get('userId')).then((data) => {
          console.log(data.jobWorking)
          this.listProject = data.jobWorking;
        })
      })
    },
    methods: {
      removeProject: function (index , name , id) {
          this.listProject.splice(index , 1)
          userService.patch(cookie.get('userId') , {
              $pull:{
                  jobWorking:{
                      _id: id
                  }
              }
          }).then((data)=>{
              console.log(data)
          })
      }
    }
  }

</script>

<style scoped>
  .collapse {
    width: 50%;
  }

  body {
    margin: 0;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 175pt;
    height: 100%;
    position: fixed;
  }

  li a {
    display: block;
    color: #FFFFFF;
    padding: 8px 16px;
    text-decoration-color: #FFFFFF;
  }

  /* Change the link color on hover */

  li a:hover {
    background-color: #555;
    color: white;
  }

  table {
    width: 100%;
    margin-outside: 100px;
  }

  th,
  td {
    border-bottom: 1px solid #ddd;
  }

</style>
