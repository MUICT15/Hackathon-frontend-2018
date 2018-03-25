<template>
  <div>
    <div class="modal fade" id="skill" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Your Skills</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-12 col-sm-12 col-xs-12" v-for="(data , index) of freelancerSkills" v-bind:key="index">
                {{data}}
                <p style="display: inline-block;cursor: pointer" @click="removeSkill(index)">X</p>
              </div>
              <br>
            </div>
            <div class="col-md-12 col-dm-12 col-xs-12">
              <input type="text" class="form-control" placeholder="Enter skill" v-model="newSkill" v-on:keyup.enter="addSkill()">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="updateProfile()">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    <center>
      <ul class="bg-primary">
        <br>
        <br>
        <li>
          <img src="https://image.flaticon.com/icons/svg/145/145867.svg" width="100" class="rounded-circle">
        </li>
        <!-- <li style="background-color: red"><a href="contact.asp">Upgrade to Fast-Lane</a></li> -->
      </ul>
    </center>
    <div style="margin-left:175pt;padding:20px 20px;">
      <br>
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12 text-right" v-if="isFreelancer == true">
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#skill">edit</button>
        </div>
        <div class="col-md-12 col-sm-12 col-xs-12 text-center">
          <h1>Skills</h1>
        </div>
        <div class="col" v-for="(data , index) of freelancerSkills" v-bind:key="index">
          {{data}}
        </div>
      </div>
    </div>
    <br><br>
    <div class=" offset-md-4 col-md-8 col-sm-8 col-xs-8 ">
        <h4>Review</h4>
      <form>
        <div>
          <div class="col-md-8">
            <input type="text" class="form-control" placeholder="First name">
          </div>
          <br>
          <div class="col-md-8">
            <textarea type="text" class="form-control" placeholder="Last name"></textarea>
          </div>
          <br>
          <button type="button" class="btn btn-primary">review</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
  import {
    userService,
    feather
  } from '../../feathers';
  import cookie from 'js-cookie';
  export default {
    data: function () {
      return {
        freelancerSkills: [],
        isFreelancer: false,
        newSkill: ''
      }
    },
    created: function () {
      console.log(this.$route.params.id)
      if (cookie.get('userId') == this.$route.params.id) {
        this.isFreelancer = true;
      }
      feather.authenticate({
        strategy: 'jwt',
        accessToken: cookie.get('feathers-jwt')
      }).then((data) => {
        userService.get(this.$route.params.id)
          .then((data) => {
            console.log(data)
            this.freelancerSkills = data.skills;
          })
      })
    },
    methods: {
      removeSkill: function (index) {
        this.freelancerSkills.splice(index, 1)
      },
      addSkill: function () {
        this.freelancerSkills.push(this.newSkill)
        this.newSkill = '';
      },
      updateProfile: function () {
        feather.authenticate({
          strategy: 'jwt',
          accessToken: cookie.get('feathers-jwt')
        }).then((data) => {
          userService.patch(cookie.get('userId'), {
            skills: this.freelancerSkills
          })
        })
      }
    }
  }

</script>

<style scoped>
  @import url(//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);
  /* .rating{
      border-color: gray;
      position: relative;
      margin: 0 auto;
      width: 60%;
  } */

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

  fieldset,
  label {
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: 1.5em;
    margin: 10px;
  }

  /****** Style Star Rating Widget *****/

  .rating {
    border: none;
    float: left;
  }

  .rating>input {
    display: none;
  }

  .rating>label:before {
    margin: 5px;
    font-size: 1.25em;
    font-family: FontAwesome;
    display: block;
    content: "\f005";
  }

  .rating>.half:before {
    content: "\f089";
    position: absolute;
  }

  .rating>label {
    color: #ddd;
    float: right;
  }

  /***** CSS Magic to Highlight Stars on Hover *****/

  .rating>input:checked~label,
  /* show gold star when clicked */

  .rating:not(:checked)>label:hover,
  /* hover current star */

  .rating:not(:checked)>label:hover~label {
    color: #FFD700;
  }

  /* hover previous stars in list */

  .rating>input:checked+label:hover,
  /* hover current star when changing rating */

  .rating>input:checked~label:hover,
  .rating>label:hover~input:checked~label,
  /* lighten current selection */

  .rating>input:checked~label:hover~label {
    color: #FFED85;
  }

</style>
