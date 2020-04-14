
<template>
 <div>
   <div class="col-12" style="text-align: left;">
     <form class="needs-validation" novalidate>

  <div class="form-row">
    <div class="col-6 mb-3">
      <label for="validationCustom01">Shop Name</label>
      <input type="text" class="form-control" id="validationCustom01" value="Mark" required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-6 mb-3">
      <label for="validationCustom04">Cuntry</label>
      <select class="custom-select" id="validationCustom02" @change="onChange($event)"  required>
        <option selected disabled value="">Choose...</option>
        <option v-for="res in resources" :value="res.id"> {{res.title}} </option>
      </select>
      <div class="invalid-feedback">
        Please select a valid Cuntry.
      </div>
    </div>
  </div>
  <div class="form-row">
   <div class="col-md-6 mb-3">
      <label for="validationCustom04">City</label>
      <select class="custom-select" id="validationCustom03" required>
        <option selected disabled value="">Choose...</option>
        <option v-for="cit in selectCity" > {{cit}} </option>
      </select>
      <div class="invalid-feedback">
        Please select a valid City.
      </div>
    </div>
    <div class="col-6 mb-3">
      <label for="validationCustom05">Commercial No.</label>
      <input type="text" class="form-control" id="validationCustom04" required>
      <div class="invalid-feedback">
        Please provide a valid Commercial Registration No.
      </div>
    </div>
  </div>
  <div class="form-row">
      <div class="col-md-12 mb-3">
         <label for="validationCustom05">Number Phone</label>
      <input type="number" class="form-control" id="validationCustom05" required>
      <div class="invalid-feedback">
        Please provide a valid Number.
      </div>
      </div>
  </div>
  <div class="form-row">
      <div class="col-6 mb-3">
          <label for="validationCustom06">Type of activity</label>
            <div class="form-group" @change="Change($event)">
                     <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="0">
                    <label class="form-check-label" for="inlineRadio1">Products</label>
                    </div>
                    <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="1">
                    <label class="form-check-label" for="inlineRadio2">Services</label>
                    </div>
            </div>
      </div>

        <div class="col-md-6 mb-3">
      <label for="validationCustom06">Type of service</label>
      <select class="custom-select" id="validationCustom07" v-model="active" required>
        <option selected disabled value="">Choose...</option>
        <option v-for="activ in children[this.no].children" :value="activ" >{{activ.name}}</option>
      </select>
      <div class="invalid-feedback">
        Please select a valid Type of service.
      </div>
      </div>
  </div>
  <div style="text-align: center;">
  <button class="btn btn-primary" type="submit" @click.prevent="validation()" style="text-alight:center">Follow Up</button>
</div>
  </form>
   </div>
 </div>
</template>
<script>
 export default {
     data(){
         return{
             no:0,
         resources: [
        {
            "id": 1,
            "title": "عمان",
            "code": "OM",
            "image": null
        },
		{
            "id": 2,
            "title": "فلسطين",
            "code": "pal",
            "image": null
        },
		{
            "id": 3,
            "title": "الأردن",
            "code": "Jordan",
            "image": null
        }

    ],


    city: [
        {
            "id": 1,
            "name": "أدم",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:13",
            "updated_at": "2020-03-31 22:25:13",
            "deleted_at": null
        },
        {
            "id": 2,
            "name": "إبراء‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:13",
            "updated_at": "2020-03-31 22:25:13",
            "deleted_at": null
        },
        {
            "id": 3,
            "name": "إزكي‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:13",
            "updated_at": "2020-03-31 22:25:13",
            "deleted_at": null
        },
        {
            "id": 4,
            "name": "البريمي‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:13",
            "updated_at": "2020-03-31 22:25:13",
            "deleted_at": null
        },
        {
            "id": 5,
            "name": "الجازر‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:13",
            "updated_at": "2020-03-31 22:25:13",
            "deleted_at": null
        },
        {
            "id": 6,
            "name": "الحمراء‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:13",
            "updated_at": "2020-03-31 22:25:13",
            "deleted_at": null
        },
        {
            "id": 7,
            "name": "الخابورة‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:13",
            "updated_at": "2020-03-31 22:25:13",
            "deleted_at": null
        },
        {
            "id": 8,
            "name": "الدقم‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:13",
            "updated_at": "2020-03-31 22:25:13",
            "deleted_at": null
        },
        {
            "id": 9,
            "name": "الرستاق‏",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:13",
            "updated_at": "2020-03-31 22:25:13",
            "deleted_at": null
        },
        {
            "id": 10,
            "name": "السنينة‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:13",
            "updated_at": "2020-03-31 22:25:13",
            "deleted_at": null
        },
        {
            "id": 11,
            "name": "السويق‏",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:13",
            "updated_at": "2020-03-31 22:25:13",
            "deleted_at": null
        },
        {
            "id": 12,
            "name": "السيب‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:13",
            "updated_at": "2020-03-31 22:25:13",
            "deleted_at": null
        },
        {
            "id": 13,
            "name": "العامرات‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:13",
            "updated_at": "2020-03-31 22:25:13",
            "deleted_at": null
        },
        {
            "id": 14,
            "name": "العوابي‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:13",
            "updated_at": "2020-03-31 22:25:13",
            "deleted_at": null
        },
        {
            "id": 15,
            "name": "القابل‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:13",
            "updated_at": "2020-03-31 22:25:13",
            "deleted_at": null
        },
        {
            "id": 16,
            "name": "الكامل والوافي‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:13",
            "updated_at": "2020-03-31 22:25:13",
            "deleted_at": null
        },
        {
            "id": 17,
            "name": "المزيونة‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:13",
            "updated_at": "2020-03-31 22:25:13",
            "deleted_at": null
        },
        {
            "id": 18,
            "name": "المصنعة‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:13",
            "updated_at": "2020-03-31 22:25:13",
            "deleted_at": null
        },
        {
            "id": 19,
            "name": "المضيبي‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:13",
            "updated_at": "2020-03-31 22:25:13",
            "deleted_at": null
        },
        {
            "id": 20,
            "name": "بخا‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:13",
            "updated_at": "2020-03-31 22:25:13",
            "deleted_at": null
        },
        {
            "id": 21,
            "name": "بدبد‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:13",
            "updated_at": "2020-03-31 22:25:13",
            "deleted_at": null
        },
        {
            "id": 22,
            "name": "بدية‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:13",
            "updated_at": "2020-03-31 22:25:13",
            "deleted_at": null
        },
        {
            "id": 23,
            "name": "بركاء‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:13",
            "updated_at": "2020-03-31 22:25:13",
            "deleted_at": null
        },
        {
            "id": 24,
            "name": "بهلا‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:13",
            "updated_at": "2020-03-31 22:25:13",
            "deleted_at": null
        },
        {
            "id": 25,
            "name": "بوشر‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:13",
            "updated_at": "2020-03-31 22:25:13",
            "deleted_at": null
        },
        {
            "id": 26,
            "name": "ثمريت‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:13",
            "updated_at": "2020-03-31 22:25:13",
            "deleted_at": null
        },
        {
            "id": 27,
            "name": "جعلان بني بو حسن‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:13",
            "updated_at": "2020-03-31 22:25:13",
            "deleted_at": null
        },
        {
            "id": 28,
            "name": "جعلان بني بو علي‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:13",
            "updated_at": "2020-03-31 22:25:13",
            "deleted_at": null
        },
        {
            "id": 29,
            "name": "خصب‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:13",
            "updated_at": "2020-03-31 22:25:13",
            "deleted_at": null
        },
        {
            "id": 30,
            "name": "دبا‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:14",
            "updated_at": "2020-03-31 22:25:14",
            "deleted_at": null
        },
        {
            "id": 31,
            "name": "دماء والطائيين‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:14",
            "updated_at": "2020-03-31 22:25:14",
            "deleted_at": null
        },
        {
            "id": 32,
            "name": "رخيوت‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:14",
            "updated_at": "2020-03-31 22:25:14",
            "deleted_at": null
        },
        {
            "id": 33,
            "name": "سدح‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:14",
            "updated_at": "2020-03-31 22:25:14",
            "deleted_at": null
        },
        {
            "id": 34,
            "name": "سمائل‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:14",
            "updated_at": "2020-03-31 22:25:14",
            "deleted_at": null
        },
        {
            "id": 35,
            "name": "شليم وجزر الحلانيات‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:14",
            "updated_at": "2020-03-31 22:25:14",
            "deleted_at": null
        },
        {
            "id": 36,
            "name": "شناص‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:14",
            "updated_at": "2020-03-31 22:25:14",
            "deleted_at": null
        },
        {
            "id": 37,
            "name": "صحار‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:14",
            "updated_at": "2020-03-31 22:25:14",
            "deleted_at": null
        },
        {
            "id": 38,
            "name": "صحم‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:14",
            "updated_at": "2020-03-31 22:25:14",
            "deleted_at": null
        },
        {
            "id": 39,
            "name": "صلالة‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:14",
            "updated_at": "2020-03-31 22:25:14",
            "deleted_at": null
        },
        {
            "id": 40,
            "name": "صور‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:14",
            "updated_at": "2020-03-31 22:25:14",
            "deleted_at": null
        },
        {
            "id": 41,
            "name": "ضلكوت‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:14",
            "updated_at": "2020-03-31 22:25:14",
            "deleted_at": null
        },
        {
            "id": 42,
            "name": "ضنك‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:14",
            "updated_at": "2020-03-31 22:25:14",
            "deleted_at": null
        },
        {
            "id": 43,
            "name": "طاقة‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:14",
            "updated_at": "2020-03-31 22:25:14",
            "deleted_at": null
        },
        {
            "id": 44,
            "name": "عبري‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:14",
            "updated_at": "2020-03-31 22:25:14",
            "deleted_at": null
        },
        {
            "id": 45,
            "name": "قريات‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:14",
            "updated_at": "2020-03-31 22:25:14",
            "deleted_at": null
        },
        {
            "id": 46,
            "name": "لوى‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:14",
            "updated_at": "2020-03-31 22:25:14",
            "deleted_at": null
        },
        {
            "id": 47,
            "name": "محضة‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:14",
            "updated_at": "2020-03-31 22:25:14",
            "deleted_at": null
        },
        {
            "id": 48,
            "name": "محوت‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:14",
            "updated_at": "2020-03-31 22:25:14",
            "deleted_at": null
        },
        {
            "id": 49,
            "name": "مدحاء‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:14",
            "updated_at": "2020-03-31 22:25:14",
            "deleted_at": null
        },
        {
            "id": 50,
            "name": "مرباط‏  ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:14",
            "updated_at": "2020-03-31 22:25:14",
            "deleted_at": null
        },
        {
            "id": 51,
            "name": "مسقط‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:14",
            "updated_at": "2020-03-31 22:25:14",
            "deleted_at": null
        },
        {
            "id": 52,
            "name": "مصيرة‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:14",
            "updated_at": "2020-03-31 22:25:14",
            "deleted_at": null
        },
        {
            "id": 53,
            "name": "مطرح‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:14",
            "updated_at": "2020-03-31 22:25:14",
            "deleted_at": null
        },
        {
            "id": 54,
            "name": "مقشن‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:14",
            "updated_at": "2020-03-31 22:25:14",
            "deleted_at": null
        },
        {
            "id": 55,
            "name": "منح‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:14",
            "updated_at": "2020-03-31 22:25:14",
            "deleted_at": null
        },
        {
            "id": 56,
            "name": "نخل‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:14",
            "updated_at": "2020-03-31 22:25:14",
            "deleted_at": null
        },
        {
            "id": 57,
            "name": "نزوى‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:14",
            "updated_at": "2020-03-31 22:25:14",
            "deleted_at": null
        },
        {
            "id": 58,
            "name": "هيما‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:14",
            "updated_at": "2020-03-31 22:25:14",
            "deleted_at": null
        },
        {
            "id": 59,
            "name": "وادي المعاول‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:14",
            "updated_at": "2020-03-31 22:25:14",
            "deleted_at": null
        },
        {
            "id": 60,
            "name": "وادي بني خالد‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:14",
            "updated_at": "2020-03-31 22:25:14",
            "deleted_at": null
        },
        {
            "id": 61,
            "name": "ينقل‏ ",
            "country_id": 1,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:14",
            "updated_at": "2020-03-31 22:25:14",
            "deleted_at": null
        },
  {
            "id": 62,
            "name": "غزة‏ ",
            "country_id": 2,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:14",
            "updated_at": "2020-03-31 22:25:14",
            "deleted_at": null
        },
 {
            "id": 63,
            "name": "رام الله‏ ",
            "country_id": 2,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:14",
            "updated_at": "2020-03-31 22:25:14",
            "deleted_at": null
        },
 {
            "id": 64,
            "name": "القدس ",
            "country_id": 2,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:14",
            "updated_at": "2020-03-31 22:25:14",
            "deleted_at": null
        },
 {
            "id": 65,
            "name": "جرش ",
            "country_id": 3,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:14",
            "updated_at": "2020-03-31 22:25:14",
            "deleted_at": null
        },
{
            "id": 66,
            "name": "العقبة ",
            "country_id": 3,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:14",
            "updated_at": "2020-03-31 22:25:14",
            "deleted_at": null
        },
{
            "id": 67,
            "name": "اربد ",
            "country_id": 3,
            "is_active": 1,
            "user_id": 1,
            "created_at": "2020-03-31 22:25:14",
            "updated_at": "2020-03-31 22:25:14",
            "deleted_at": null
        }

    ],
    selectCity:[],

        children: [
            {
                "id": 1,
                "name": "منتجات",
                "parent_id": null,
                "is_active": 1,
                "user_id": 1,
                "created_at": "2020-03-31T20:53:18.000000Z",
                "updated_at": "2020-03-31T20:53:18.000000Z",
                "deleted_at": null,
                "localName": "منتجات",
                "children": [
                    {
                        "id": 1000,
                        "name": "الإلكترونيات",
                        "parent_id": 1,
                        "is_active": 1,
                        "user_id": 1,
                        "created_at": "2020-03-31T20:53:18.000000Z",
                        "updated_at": "2020-03-31T20:53:18.000000Z",
                        "deleted_at": null,
                        "localName": "الإلكترونيات",
                        "children": []
                    },
                    {
                        "id": 2000,
                        "name": "الأزياء والملابس",
                        "parent_id": 1,
                        "is_active": 1,
                        "user_id": 1,
                        "created_at": "2020-03-31T20:53:18.000000Z",
                        "updated_at": "2020-03-31T20:53:18.000000Z",
                        "deleted_at": null,
                        "localName": "الأزياء والملابس",
                        "children": []
                    },
                    {
                        "id": 3000,
                        "name": "الاناقة والجمال",
                        "parent_id": 1,
                        "is_active": 1,
                        "user_id": 1,
                        "created_at": "2020-03-31T20:53:18.000000Z",
                        "updated_at": "2020-03-31T20:53:18.000000Z",
                        "deleted_at": null,
                        "localName": "الاناقة والجمال",
                        "children": []
                    },
                    {
                        "id": 4000,
                        "name": "العطور والبخور",
                        "parent_id": 1,
                        "is_active": 1,
                        "user_id": 1,
                        "created_at": "2020-03-31T20:53:18.000000Z",
                        "updated_at": "2020-03-31T20:53:18.000000Z",
                        "deleted_at": null,
                        "localName": "العطور والبخور",
                        "children": []
                    },
                    {
                        "id": 5000,
                        "name": "الرياضة واللياقة البدنية",
                        "parent_id": 1,
                        "is_active": 1,
                        "user_id": 1,
                        "created_at": "2020-03-31T20:53:18.000000Z",
                        "updated_at": "2020-04-05T22:20:01.000000Z",
                        "deleted_at": null,
                        "localName": "الرياضة واللياقة البدنية",
                        "children": []
                    },
                    {
                        "id": 6000,
                        "name": "المستلزمات المنزلية",
                        "parent_id": 1,
                        "is_active": 1,
                        "user_id": 1,
                        "created_at": "2020-03-31T20:53:18.000000Z",
                        "updated_at": "2020-03-31T20:53:18.000000Z",
                        "deleted_at": null,
                        "localName": "المستلزمات المنزلية",
                        "children": []
                    },
                    {
                        "id": 7000,
                        "name": "الهدايا",
                        "parent_id": 1,
                        "is_active": 1,
                        "user_id": 1,
                        "created_at": "2020-03-31T20:53:19.000000Z",
                        "updated_at": "2020-03-31T20:53:19.000000Z",
                        "deleted_at": null,
                        "localName": "الهدايا",
                        "children": []
                    },
                    {
                        "id": 8000,
                        "name": "الصناعات الحرفيه",
                        "parent_id": 1,
                        "is_active": 1,
                        "user_id": 1,
                        "created_at": "2020-03-31T20:53:19.000000Z",
                        "updated_at": "2020-03-31T20:53:19.000000Z",
                        "deleted_at": null,
                        "localName": "الصناعات الحرفيه",
                        "children": []
                    },
                    {
                        "id": 9000,
                        "name": "المنتجات الصحية",
                        "parent_id": 1,
                        "is_active": 1,
                        "user_id": 1,
                        "created_at": "2020-03-31T20:53:19.000000Z",
                        "updated_at": "2020-03-31T20:53:19.000000Z",
                        "deleted_at": null,
                        "localName": "المنتجات الصحية",
                        "children": []
                    },
                    {
                        "id": 10000,
                        "name": "الاغذية",
                        "parent_id": 1,
                        "is_active": 1,
                        "user_id": 1,
                        "created_at": "2020-03-31T20:53:19.000000Z",
                        "updated_at": "2020-03-31T20:53:19.000000Z",
                        "deleted_at": null,
                        "localName": "الاغذية",
                        "children": []
                    },
                    {
                        "id": 11000,
                        "name": "الأدوات والمعدات",
                        "parent_id": 1,
                        "is_active": 1,
                        "user_id": 1,
                        "created_at": "2020-03-31T20:53:19.000000Z",
                        "updated_at": "2020-03-31T20:53:19.000000Z",
                        "deleted_at": null,
                        "localName": "الأدوات والمعدات",
                        "children": []
                    },
                    {
                        "id": 12000,
                        "name": "الألعاب",
                        "parent_id": 1,
                        "is_active": 1,
                        "user_id": 1,
                        "created_at": "2020-03-31T20:53:19.000000Z",
                        "updated_at": "2020-03-31T20:53:19.000000Z",
                        "deleted_at": null,
                        "localName": "الألعاب",
                        "children": []
                    },
                    {
                        "id": 13000,
                        "name": "الكتب والقرطاسية",
                        "parent_id": 1,
                        "is_active": 1,
                        "user_id": 1,
                        "created_at": "2020-03-31T20:53:19.000000Z",
                        "updated_at": "2020-03-31T20:53:19.000000Z",
                        "deleted_at": null,
                        "localName": "الكتب والقرطاسية",
                        "children": []
                    },
                    {
                        "id": 13021,
                        "name": "الكمالبات",
                        "parent_id": 1,
                        "is_active": 1,
                        "user_id": 1,
                        "created_at": "2020-04-05T07:27:20.000000Z",
                        "updated_at": "2020-04-05T07:28:23.000000Z",
                        "deleted_at": null,
                        "localName": "الكمالبات",
                        "children": []
                    }
                ]
            },
            {
                "id": 2,
                "name": "خدمات",
                "parent_id": null,
                "is_active": 1,
                "user_id": 1,
                "created_at": "2020-04-02T19:44:00.000000Z",
                "updated_at": "2020-04-02T19:44:00.000000Z",
                "deleted_at": null,
                "localName": "خدمات",
                "children": [
                    {
                        "id": 14000,
                        "name": "اخرى",
                        "parent_id": 2,
                        "is_active": 1,
                        "user_id": 1,
                        "created_at": "2020-04-02T19:44:00.000000Z",
                        "updated_at": "2020-04-02T19:44:00.000000Z",
                        "deleted_at": null,
                        "localName": "اخرى",
                        "children": []
                    },
                    {
                        "id": 50000,
                        "name": "خدمات التوصيل",
                        "parent_id": 2,
                        "is_active": 1,
                        "user_id": 1,
                        "created_at": "2020-04-02T19:44:00.000000Z",
                        "updated_at": "2020-04-02T19:44:00.000000Z",
                        "deleted_at": null,
                        "localName": "خدمات التوصيل",
                        "children": []
                    }
                ]
            }
        ],
        active:'',


    }
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
           this.activTab = '2' ;
      }, false);
    });

    //   this.$router.push('/accountform');
  },
    onChange(event) {
       for (var property in this.city) {
              if(this.city[property].country_id == event.target.value){
                  this.selectCity.push(this.city[property].name);
                  console.log(this.selectCity)
                    // console.log(event.target.value)
              };

            // console.log(event.target.value)
        }},
        Change(event) {
             if(event.target.value == 1){
              this.no = 1;
             }else{
                 this.no = 0;
             }
           console.log(event.target.value)
        }


 },
 }







</script>
<style>
.form-row{
    padding: 5px;
}
</style>

