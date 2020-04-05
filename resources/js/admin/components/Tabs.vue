<template>
<div style="margin: 10px 20px; width:100%">
  <b-tabs content-class="mt-3" >
    <b-tab title="General overview" active>
        <v-overview></v-overview>
    </b-tab>
    <b-tab title="Features">
        <v-features></v-features>
    </b-tab>
    <b-tab title="Rating ( 0 )">
        <v-rating></v-rating>
    </b-tab>
    <b-tab title="Comments" >
        <v-comments></v-comments>
    </b-tab>
  </b-tabs>
</div>
</template>
<script>
export default {

}
</script>
