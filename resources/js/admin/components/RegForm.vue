
<template>
    <div style="margin: 0 auto; width:60%">
         <div style="padding:20px">
            <h1>Register as a dealer <i class="fas fa-check-circle" style="color: mediumslateblue;"></i></h1>
            <p style="color: rgb(142, 142, 142);font-size: 15px;">You are just a few steps away from creating your account</p>
        </div>
      <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
            <li class="nav-item">
                <div ><a class="nav-link "  @click="activTab = '1'" :class="[activTab === '1' ? 'active' : '']" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
                  <div class="title" :class="[activTab === '1' ? 'active' : '']">
                    <span class="c">1</span>
                    <p class="mb-0">Basic Information</p>
                 </div></a></div>
            </li>
            <li class="nav-item">
                <div  @click="activTab = '2'" >
                <a class="nav-link" id="profile-tab" @click="activTab = '2'" :class="[activTab === '2' ? 'active' : '']" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false"><div class="title" :class="[activTab === '2' ? 'active' : '']" >
              <span class="c">2</span>
              <p class="mb-0">Acount Information</p>
           </div></a>
                 </div>
            </li>
      </ul>
        <div class="tab-content" id="myTabContent">
        <div v-if="activTab === '1'" class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"><div  > <div>
   <div class="col-12" style="text-align: left;">
     <form class="needs-validation" novalidate>

  <div class="form-row">
    <div class="col-6 mb-3">
      <label for="validationCustom01">Shop Name</label>
      <input type="text" class="form-control" id="validationCustom01"  v-model="shopName" value="Mark" required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-6 mb-3">
      <label for="validationCustom04">Cuntry</label>
      <select class="custom-select" id="validationCustom02"  v-model="countryId" @change="GetCities"  required>
        <option selected disabled value="">Choose...</option>
                            <option
                                v-for="country in countries"
                                :key="country.id"
                                :value="country.id"
                                >{{ country.title }}
                            </option>
      </select>
      <div class="invalid-feedback">
        Please select a valid Cuntry.
      </div>
    </div>
  </div>
  <div class="form-row">
   <div class="col-md-6 mb-3">
      <label for="validationCustom04">City</label>
      <select v-model="cityId" class="custom-select"  id="validationCustom03" required>
        <option selected disabled value="">Choose...</option>
        <option
                            v-for="city in countryCities"
                            :key="city.id"
                            :value="city.id"
                            >{{ city.name }}</option>
      </select>
      <div class="invalid-feedback">
        Please select a valid City.
      </div>
    </div>
    <div class="col-6 mb-3">
      <label for="validationCustom05">Commercial No.</label>
      <input type="text" class="form-control" id="validationCustom04"  v-model="commercialNo" required>
      <div class="invalid-feedback">
        Please provide a valid Commercial Registration No.
      </div>
    </div>
  </div>
  <div class="form-row">
      <div class="col-md-12 mb-3">
         <label for="validationCustom05">Number Phone</label>
      <input type="number" class="form-control" id="validationCustom05" v-model="numberPhone" required>
      <div class="invalid-feedback">
        Please provide a valid Number.
      </div>
      </div>
  </div>
  <div class="form-row">
      <div class="col-6 mb-3">
          <label for="validationCustom06">Type of activity</label>
            <div class="form-group" >
                     <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" v-model="activityType" @change="radioSelect" id="inlineRadio1" value="0">
                    <label class="form-check-label" for="inlineRadio1">Products</label>
                    </div>
                    <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" v-model="activityType" @change="radioSelect" id="inlineRadio2" value="1">
                    <label class="form-check-label" for="inlineRadio2">Services</label>
                    </div>
            </div>
      </div>

        <div class="col-md-6 mb-3">
      <label for="validationCustom06">Type of service</label>
      <select class="custom-select" id="validationCustom07" v-model="serviceType" required>
        <option selected disabled value="">Choose...</option>
        <option
                        v-for="activity in selectActivity "
                        :key="activity.id"
                        :value="activity.id"
                        >{{activity.name}}</option >
      </select>
      <div class="invalid-feedback">
        Please select a valid Type of service.
      </div>
      </div>
  </div>

  <div style="text-align: center;">
     <div class="col-12 text-center mt-3">
                  <div class="error-container">
                    <transition name="fade">
                      <div v-if="errorsOne.length">
                        <p v-for="(error, i) in errorsOne" :key="i">{{error}} <i class="fas fa-exclamation-circle"></i></p>
                      </div>
                    </transition>
                </div>
                </div>

  <button class="btn btn-primary" type="submit" @click.prevent="checkValidation()" style="text-alight:center;width: 20%;
    margin-top: 10px; letter-spacing: 1px">Continue</button>
</div>
  </form>
   </div>
 </div> </div></div>
        <div  v-if="activTab === '2'" class="tab-pane fade" :class="[activTab === '2' ? 'show active' : '']" id="profile"  role="tabpanel" aria-labelledby="profile-tab"><div> <div class="col-12" style="text-align: left;">
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
      <input :type="fieldType" class="form-control" id="inputPassword3" placeholder="**************"  v-model="password" required>
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
      <input :type="fieldType" class="form-control" id="inputPassword4" placeholder="**************" v-model="Confpassword"  required>
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
         I confirm that all the above information is correct.
        </label>
      </div>
    </div>
    </div>
    <div class="col-12">
    <div >
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck2">
        <label class="form-check-label" for="gridCheck2">
          I agree to all platform policies
          <a class="d-block" href="#"> Terms and Policies </a>
        </label>
      </div>
    </div>
    </div>

  </div>
  <div class="form-group row">
    <div class="col-12" style="text-align: center">
      <button type="submit" class="btn btn-primary" @click="validation()" style="width: 20%;
    margin-top: 10px; letter-spacing: 1px">Submit</button>
    </div>
  </div>
</form>
</div> </div></div>

        </div>
    </div>
</template>
<script>
import swal from 'sweetalert'
export default {
    data(){
        return{
            activTab: '1',
             password:'',
         Confpassword:'',
         showPassword: false,
         fieldType: 'password',
          no:0,
          countries: [],
            cities: [],
            activities:[],
             countryId: 0,
              errorsOne: [],
            countryCities: [],
            activityType:'',
            selectActivity:[],
            shopName: '',
        countryId: '',
        cityId: '',
        commercialNo: '',
        numberPhone: '',
        activityType: '',
        serviceType:'',

    selectCity:[],
        active:'',

        }
    },
     mounted() {
        axios.get("/country.json")
            .then(response => {
                console.log(response);
                this.$set(this, "countries", response.data.resources);
            })
            .catch(function(error) {
                console.log(error);
            });
        axios.get("/city.json")
            .then(response => {
                console.log(response.data.data);
                this.$set(this, "cities", response.data.data);
            })
            .catch(function(error) {
                console.log(error);
            });
        axios.get("/activity-type-category.json")
            .then(response => {
                this.$set(this, "activities", response.data.data.children);
            })
            .catch(function(error) {
                console.log(error);
            });
    },
     methods: {
    validation() {

        console.log(this.activTab);

        console.log(this.active);

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

    //   this.$router.push('/accountform');
  },
    checkValidation() {
      this.errorsOne = []
       if (!this.shopName) {
        this.errorsOne.push('Please enter your shop name.');
      }else if (!this.countryId) {
        this.errorsOne.push('Please select your country.');
      } else if (!this.cityId) {
        this.errorsOne.push('Please select your City.');
      } else if(!this.commercialNo) {
          this.errorsOne.push('Please enter your Commercial Number.');
      } else if(isNaN(this.commercialNo)) {
          this.errorsOne.push('Commercial Number just number.');
      } else if(!this.numberPhone) {
          this.errorsOne.push('Please enter your Mobile Number.');
      } else if(isNaN(this.numberPhone)) {
          this.errorsOne.push('Mobile Number should be a number.');
      } else if (!this.serviceType) {
        this.errorsOne.push('Please select your Service Type.');
      } else {
        this.activTab = '2'
      }

    },
    // onChange(event) {
    //    for (var property in this.city) {
    //           if(this.city[property].country_id == event.target.value){
    //               this.selectCity.push(this.city[property].name);
    //               console.log(this.selectCity)
    //                 // console.log(event.target.value)
    //           };

    //         // console.log(event.target.value)
    //     }},
        GetCities() {
            this.$set(
                this,
                "countryCities",
                this.cities.filter(x => x.country_id == this.countryId)
            );
        },
        radioSelect(){
        console.log(this.activityType);
               this.$set(this,"selectActivity",this.activities[this.activityType].children);
        },
        // Change(event) {
        //      if(event.target.value == 1){
        //       this.no = 1;
        //      }else{
        //          this.no = 0;
        //      }
        //    console.log(event.target.value)
        // },
         switchField() {
      this.fieldType = this.fieldType === 'password' ? 'text' : 'password'
    }


 }
}
</script>
<style >
.tab-content{
  padding: 10px;
  font-weight: bold
}
.error-container{
  height: 20px;
  padding: 25px;
}
.error-container p{
    color:rgb(192, 9, 9)
    }
.title{
  display: inline-block;
  font-weight: bold;
  font-size: 15px;
  margin: auto;
  cursor: pointer;
}
 .title.active {
  color: #fc793d
}
 .title .c {
  border: 1px solid rgb(70, 70, 70);
  border-radius:50%;
  display: block;
  width:30px;
  height:30px;
  margin:auto;
  margin-bottom: 8px;
  line-height: 30px;
}
</style>
