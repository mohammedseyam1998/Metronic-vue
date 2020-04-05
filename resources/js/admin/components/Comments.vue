<template>

    <div class="send-text" style="width:70%">
      <h4 style="float: left;">Send Comment</h4>
      <form>
        <textarea class="form-control" name cols="25" rows="8"></textarea>
        <button class="b-style mt-3" type="submit" style="margin: 10px 10px 10px -500px;">Send Comment</button>
      </form>
      <div class="load-more mt-3">
        <button class="b-style" type="submit">Load More<i class="fas fa-spinner ml-2"></i></button>
      </div>
    </div>

</template>
<style>
.send-text {
    border-radius: 15px;
    box-shadow: 0px 0px 16px 4px #d2e8f3;
    border: 2px solid #ebe8e8;
    padding: 25px;
    padding-bottom:0
}
.send-text form textarea{
    border-radius: 15px;
    border:1px solid #e6e6e6;
}
.send-text .b-style {
    background-color: #fd7130;
    color: rgb(252, 246, 237);
    padding: 10px 20px;
    border: 1px solid #fd7130;
    border-radius: 5px;
}

.send-text .load-more{
    border-top:1.5px solid #e6e6e6;
    padding: 25px;
}

</style>
