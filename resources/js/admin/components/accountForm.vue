<template>
<div class="col-12" style="text-align: left;">
    <form class="needs-validation" novalidate>
  <div class="form-group row">
       <div class="col-12">
    <label for="inputEmail3" class=" col-form-label">Email</label>
    <div >
      <input type="email" class="form-control" id="inputEmail3" placeholder="name@example.com" required>
      <div class="invalid-feedback">
        Please provide a valid Email.
      </div>
    </div>
       </div>
  </div>
  <div class="form-group row">
       <div class="col-12">
    <label for="inputPassword3" class=" col-form-label">Password</label>
    <div >
      <input :type="fieldType" class="form-control" id="inputPassword3" placeholder="************"  v-model="password" required>
       <i @click="switchField(), showPassword = !showPassword" v-bind:class="{ slash: showPassword }" class="fas fa-eye fa-lg showpass-icon"></i>
      <div class="invalid-feedback">
        Please provide a valid password.
      </div>
    </div>
       </div>
  </div>
  <div class="form-group row ">
      <div class="col-12">
    <label for="inputPassword4" class=" col-form-label">Conf Password</label>

    <div >
      <input :type="fieldType" class="form-control" id="inputPassword4" placeholder="************" v-model="Confpassword"  required>
       <i @click="switchField(), showPassword = !showPassword" v-bind:class="{ slash: showPassword }" class="fas fa-eye fa-lg showpass-icon"></i>
       <div class="invalid-feedback">
        Please provide a valid password.
      </div>
    </div>
    </div>
  </div>
  <div class="form-group row">
      <div class="col-12">
    <div >
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck1">
        <label class="form-check-label" for="gridCheck1">
          Example checkbox
        </label>
      </div>
    </div>
    </div>
    <div class="col-12">
    <div >
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck2">
        <label class="form-check-label" for="gridCheck2">
          Example checkbox
        </label>
      </div>
    </div>
    </div>

  </div>
  <div class="form-group row">
    <div class="col-sm-10">
      <button type="submit" class="btn btn-primary" @click="validation()" style="text-alight:center">Sign in</button>
    </div>
  </div>
</form>
</div>
</template>
<script>
 export default {
     data(){
         return{
         password:'',
         Confpassword:'',
         showPassword: false,
         fieldType: 'password'
         }
     },

 methods: {
    validation() {

    var forms = document.getElementsByClassName('needs-validation');
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  },
  switchField() {
      this.fieldType = this.fieldType === 'password' ? 'text' : 'password'
    }

 },
 }







</script>
<style >
 .showpass-icon{
  position: absolute;
  right: 22px;
  top: 37px;
  cursor: pointer;
}
</style>
