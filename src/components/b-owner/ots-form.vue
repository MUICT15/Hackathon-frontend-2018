<template>
  <div class="container">
  <h2 align="center">Off the shelf sofwares </h2>
  <hr>
  <form action="/action_page.php">
    <div class="form-group">
      <label for="text">Project name</label>
      <input type="text" class="form-control" id="text" placeholder="Enter project name" name="project">
    </div>
    <div class="form-group">
      <label for="text">Duration</label>
      <input type="text" class="form-control" id="pwd" placeholder="Enter Duration in day" name="text">
    </div>
    <label for="text">Choose your business type</label>
    <div class="form-group">
            <div class="dropdown">
                    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                     Business type
                    </button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#">Agriculture</a>
                      <a class="dropdown-item" href="#">Commerce</a>
                      <a class="dropdown-item" href="#">Industries</a>
                      <a class="dropdown-item" href="#">Factory</a>
                    </div>
            </div>
    </div>
    <label for="text">Requirement System</label>
    <div class="row">
            <div class="col-sm-12 col-md-12">
                    <div class="form-check">
                            <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="...">
                            <label for="text">Web Application</label>
                    </div>
                    <div class="form-check">
                            <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="...">
                            <label for="text">Mobile Application</label>
                        </div>
                    <div class="form-check">
                            <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="...">
                            <label for="text">Network Architecture</label>
                        </div>
                    <div class="form-check">
                            <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="...">
                            <label for="text">Management System</label>
                    </div>
                    <div class="form-check">
                            <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="...">
                            <label for="text">Intelligent System</label>
                    </div>
                    <div class="form-check">
                            <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="...">
                            <label for="text">Storage System</label>
                    </div>
            </div>
    </div>
    <hr>
    <button type="submit" class="btn btn-success">Submit</button>
  </form>
</div>
</template>
<style>

</style>
<script>
export default {
  
}
</script>


