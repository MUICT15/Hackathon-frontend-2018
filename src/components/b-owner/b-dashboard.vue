<template>
  <div>
    <div class="modal fade" id="payment" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Payment</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="inputPassword" v-model="name">
                </div>
              </div>
              <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Number</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="inputPassword" v-model="number">
                </div>
              </div>
              <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Expire Month</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="inputPassword" v-model="month">
                </div>
              </div>
              <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Expire Year</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="inputPassword" v-model="year">
                </div>
              </div>
              <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label">CVC</label>
                <div class="col-sm-10">
                  <input type="password" class="form-control" id="inputPassword">
                </div>
              </div>
              <h3>จำนวนเงิน : {{sumMoney}}</h3>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="payment()">Save changes</button>
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
      </ul>
    </center>
    <div style="margin-left:175pt;padding:20px 20px;">
      <br>
      <h2></h2>
      <div class="row">
        <div class="col-md-5 offset-1 text-center">
          <h5>list Freelancer bid</h5>
          <table class="table table-striped table-hover">
            <thead class="thead thead-light">
              <tr>
                <th>Freelancer name</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(data , index) of listFreelancer" v-bind:key="index">
                <td>{{data.name}}</td>
                <td>{{data.price}}</td>
                <td>
                  <button type="button" class="btn btn-primary" @click="selectFreelancer(index)">select</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-md-5 text-center">
          <h5>list Freelancer was selected</h5>
          <table class="table table-striped table-hover">
            <thead class="thead thead-light">
              <tr>
                <th>Freelancer name</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(data , index) of selectFreelancers" v-bind:key="index">
                <td>{{data.name}}</td>
                <td>{{data.price}}</td>
                <td>
                  <button type="button" class="btn btn-danger" @click="removeFreelancer()">X</button>
                </td>
              </tr>
            </tbody>
          </table>
          <br>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#payment">
            payment
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-8 offset-3">
      <h2 align="center">Create Project</h2>
      <form>
        <div class="form-group">
          <label for="pjname">Project name</label>
          <input type="text" class="form-control" id="pjname" placeholder="Enter project name" name="pjname" v-model="projectName">
        </div>
        <div class="form-group">
          <label for="pwd">Price</label>
          <input type="number" class="form-control" id="pwd" placeholder="Enter price" name="pswd" v-model="projectPrice">
        </div>
        <div class="form-group">
          <label for="pwd2">Requirement</label>
          <textarea type="text" class="form-control" id="pwd2" placeholder="Enter Requirement" name="rqq" v-model="projectDetail">
          </textarea>
        </div>
        <br>
        <button type="button" class="btn btn-success" @click="addProject()">Submit</button>
      </form>
    </div>
  </div>
</template>
<script>
  import mtoComponent from './mto-form.vue';
  import {
    consumerProductService,
    paymentService
  } from '../../feathers';
  import cookie from 'js-cookie';
  import axios from 'axios';
  import qs from 'qs';
  export default {
    components: {
      mtoComponent
    },
    data: function () {
      return {
        listFreelancer: [],
        projectName: '',
        projectDuration: '',
        projectDetail: '',
        projectPrice: '',
        selectFreelancers: [],
        sumMoney: 0,
        name: '',
        number: '',
        month: '',
        year: '',
        cvc: ''
      }
    },
    methods: {
      removeFreelancer: function (index) {
        this.selectFreelancers.splice(index, 1)
      },
      selectFreelancer: function (index) {
          let percentage = this.listFreelancer[index].price * (11/100);
        let data = {
          id: this.listFreelancer[index].id,
          name: this.listFreelancer[index].name,
          price: this.listFreelancer[index].price
        }
        this.selectFreelancers.push(data)
        this.sumMoney += percentage + this.listFreelancer[index].price;
      },
      addProject() {
        consumerProductService.create({
          consumerID: cookie.get('userId'),
          consumerName: 'สมชาย',
          typeOfProduct: "Made to order",
          title: this.projectName,
          detail: this.projectDetail,
          price: this.projectPrice
        }).then((data) => {
          console.log(data)
        })
      },
      payment: function () {
        let data = {
          card: {
            "name": this.name,
            "number": this.number,
            "expiration_month": this.month,
            "expiration_year": this.year,
            "security_code": this.cvc,
          }
        }
        const config = {
          method: 'POST',
          url: 'https://vault.omise.co/tokens',
          data: qs.stringify(data),
          headers: {
            'Authorization': 'Basic cGtleV90ZXN0XzU3dm84OGhyeHpjcHp1aHp6cmc6',
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          json: true
        }
        axios(config).then((data) => {
          console.log(data.data.id)
          paymentService.create({
              price: this.sumMoney,
              token: data.data.id
          })
        }).then((data)=>{
            console.log(data)
        })
      }
    },
    created: function () {
      consumerProductService.on('patched', (data) => {
        console.log(data)
        this.listFreelancer = data.freelancersBid;
      })
    }
  }

</script>
<style scoped>
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
