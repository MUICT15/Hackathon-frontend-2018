<template>

  <body>
    <div class="container">
      <h2 align="center">Create Project</h2>
      <form action="/action_page.php">
        <div class="form-group">
          <label for="pjname">Project name</label>
          <input type="text" class="form-control" id="pjname" placeholder="Enter project name" name="pjname" v-model="projectName">
        </div>
        <div class="form-group">
          <label for="pwd">Duration</label>
          <input type="text" class="form-control" id="pwd" placeholder="Enter duration(days)" name="pswd" v-model="projectDuration">
        </div>
        <div class="form-group">
          <label for="pwd">Requirement</label>
          <textarea type="text" class="form-control" id="pwd" placeholder="Enter Requirement" name="rqq" v-model="projectDetail">
          </textarea>
        </div>
        <br>
        <button type="submit" class="btn btn-success">Submit</button>
      </form>
    </div>

  </body>
</template>
<style scoped>


</style>
<script>
import {} from '../../feathers';
import cookie from 'js-cookie';
  export default {
    data: function () {
      return {
        projectName: '',
        projectDuration: '',
        projectDetail: '',
      }
    },
  }

</script>
