<template>
  <div>
      <div class="col-md-12 " style="margin-bottom: 20px;">
          <label style="font-size: 13px;
    font-weight: 700;">Select a data :</label>
          <date-picker class="dat" v-model="date"  type="date" format ="YYYY-MM-dd" placeholder="Select a data"></date-picker>
      </div>

      <div class="col-md-12 ">
          <label style="font-size: 13px;
    font-weight: 700;" >Select a time :</label>
          <date-picker v-model="time"  type="time" format ="HH:mm anpm install verte --save" placeholder="Select a time"></date-picker>

      </div>
      <div class ="col-md-12" style="margin-top: 20px;
    margin-left: 25px;" >
            <p class="color-picker" style="color: crimson;font-size: 13px;
    font-weight: 700;">Select Your Color</p>
            <verte picker="square" model="rgb">
                <svg viewBox="0 0 24 24">
                    <path d="M0 20h24v4H0z"/>
                    <path style="fill: #000" d="M11 3L5.5 17h2.25l1.12-3h6.25l1.12 3h2.25L13 3h-2zm-1.38 9L12 5.67 14.38 12H9.62z"/>
               </svg>
            </verte>
      </div>

    <!-- <date-picker v-model="time2" type="datetime"></date-picker>
    <date-picker v-model="time3" range></date-picker> -->
  </div>
</template>

<script>
  import DatePicker from 'vue2-datepicker';
  import 'vue2-datepicker/index.css';
  import 'verte/dist/verte.css';

  export default {
    components: { DatePicker },
    data() {
      return {
        date: '',
        time:''
        // time2: null,
        // time3: null,
      };
    },
  };
</script>
<style >

</style>


