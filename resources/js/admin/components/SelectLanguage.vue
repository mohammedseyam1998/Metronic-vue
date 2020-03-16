<template>
    <div class="locale-changer">
        <select v-model="$i18n.locale">
            <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang" @click="setDirection">{{ lang }}</option>
        </select>
  </div>
</template>



<script>
export default {
  name: 'locale-changer',
  data () {
    return { langs: ['en', 'ar'] }
  },
  methods :{
      setDirection: function(){
          if (langs === 'ar') {
            document.getElementById('app').classList.toggle('rtl');
          }
          console.log(langs)
      }
  }
}
</script>

<style>
.locale-changer select{
    border-color: #716aca;
    color: #04040a;
    height: 25px;
    width: 50px;
}
</style>
