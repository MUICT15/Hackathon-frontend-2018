<template>
<body>
<div class="container">
  <h2 align="center">Made To Order</h2>
  <form action="/action_page.php">
    <div class="form-group">
      <label for="pjname">Project name</label>
      <input type="text" class="form-control" id="pjname" placeholder="Enter project name" name="pjname">
    </div>
    <div class="form-group">
      <label for="pwd">Duration</label>
      <input type="text" class="form-control" id="pwd" placeholder="Enter duration(days)" name="pswd">
    </div>
    <div class="form-group">
            <label for="pwd">Requirement</label>
            <input type="text" class="form-control" id="pwd" placeholder="Enter Requirement" name="rqq">
          </div>
        
    <div class="form-check">
      <label class="form-check-label">
        <input class="form-check-input" type="checkbox" name="remember"> Remember me
      </label>
    </div>
    <button type="submit" class="btn btn-success">Submit</button>
  </form>
</div>

</body>  
</template>
<style>

</style>
<script>
export default {
  
}
</script>

