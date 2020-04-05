<template>
    <div class="row">
      <div class="col-6 mt-3">
        <div class="sendInfo">
            <form >
              <div class="row">
              <div class="col-4"><h4 style="font-size: 18px;">Send Evaluation</h4></div>

            <div class="col-8" style="margin: -8px 0px 5px 0px;">
              <rate :length="5" v-model="myRate" />
            </div>
            </div>
            <textarea class="form-control" cols="25" rows="8"></textarea>
            <button class="b-style mt-3" style="margin: 10px 10px 10px -280px;">Send an evaluation</button>
          </form>
          <div class="moreDetailes mt-3 text-center">
            <button class="b-style">More Deatailes<i class="fas fa-spinner ml-2"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="progresEv">
            <div style="text-align: left;">
            <h2>{{myRate}}</h2>
          <rate :length="5" v-model="myRate" />
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-2 text-right">
            <span>5 Stars</span>
          </div>
          <div class="col-6"  id="ev"></div>
          <div class="col-2">100%</div>
        </div>
        <div class="row mt-3">
          <div class="col-2 text-right">
            <span>4 Stars</span>
          </div>
          <div class="col-6" id="ev"></div>
          <div class="col-2">0%</div>
        </div>
        <div class="row mt-3">
          <div class="col-2 text-right">
            <span>3 Stars</span>
          </div>
          <div class="col-6" id="ev"></div>
          <div class="col-2">0%</div>
        </div>
        <div class="row mt-3">
          <div class="col-2 text-right">
            <span>2 Stars</span>
          </div>
          <div class="col-6"  id="ev"></div>
          <div class="col-2">0%</div>
        </div>
        <div class="row mt-3">
          <div class="col-2 text-right">
            <span>1 Stars</span>
          </div>
          <div class="col-6"  id="ev"></div>
          <div class="col-2">0%</div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
           myRate: 0
        }
    }
}
</script>
<style>
.progresEv h2{
    font-size: 70px;
    padding: 5px;
    color: #6d9411
}
#ev{
    background-color: white;
    height: 15px;
    margin: 2px;
}
</style>

