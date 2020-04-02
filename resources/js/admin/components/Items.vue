<template>
    <div>
       <Carousel :value="cars" :numVisible="4" :numScroll="3" :responsiveOptions="responsiveOptions">
	<template #item="slotProps">
		<div class="car-details">
			<div class="p-grid p-nogutter">
				<div class="p-col-12">
					<img src= "https://via.placeholder.com/150"/>
				</div>
				<div class="p-col-12 car-data">
                       <div class="item">

                        <h4 class="text-uppercase mt-2">{{slotProps.data.title}}</h4>
                        <ul class="list-unstyled slider-eval">
                        <li class="active"><i class="fas fa-star" style="font-size: 20px;"></i></li>
                        <li class="active"><i class="fas fa-star" style="font-size: 20px;"></i></li>
                        <li class="active"><i class="fas fa-star" style="font-size: 20px;"></i></li>
                        <li class="active"><i class="fas fa-star" style="font-size: 20px;"></i></li>
                        <li><i class="fas fa-star" style="font-size: 20px;"></i></li>

                        </ul>
                        <p class="price">{{slotProps.data.price}}</p>
                        <div class="progress-bar"><span class="fill-color"></span></div>
                        <span class="sold">sold:10</span>
                    </div>
				</div>
			</div>
		</div>
	</template>
</Carousel>
    </div>
</template>
<script>
export default {
    data() {
	return {
        cars:[
            {
                  title:"mohammed",
                  year:';lkjh',
                  color:'jhgf',
                  price:'30%'

            },
            {
                  title:"mohammed",
                  year:';lkjh',
                  color:'jhgf',
                  price:'45%'

            },
              {
                  title:"mohammed",
                  year:';lkjh',
                  color:'jhgf',
                     price:'80%'

            },
              {
                  title:"mohammed",
                  year:';lkjh',
                  color:'jhgf',
                     price:'40%'

            },  {
                  title:"mohammed",
                  year:';lkjh',
                  color:'jhgf',
                     price:'330%'

            },
              {
                  title:"mohammed",
                  year:';lkjh',
                  color:'jhgf',
                     price:'3550%'

            },
              {
                  title:"mohammed",
                  year:';lkjh',
                  color:'jhgf',
                     price:'380%'

            },
              {
                  title:"mohammed",
                  year:';lkjh',
                  color:'jhgf',
                     price:'60%'

            },

          ] ,
		responsiveOptions: [
			{
				breakpoint: '1024px',
				numVisible: 3,
				numScroll: 3
			},
			{
				breakpoint: '600px',
				numVisible: 2,
				numScroll: 2
			},
			{
				breakpoint: '480px',
				numVisible: 1,
				numScroll: 1
			}
		]
	}
},

}
</script>
<style>
#pv_id_1{
max-width: 1100px;
}








.item .price{
  font-size:15px;
  color: rgb(189, 32, 32);
  font-weight: bold;
}
 .item .progress-bar{
  width:80%;
  margin: 0 auto;
  height:8px;
  background-color: rgb(255, 255, 255);
}
.item .progress-bar .fill-color{
  background: rgb(192, 216, 126);
  display: block;
  width:80%;
  height:100%
}
 .item .sold {
  font-size: 15px;
}
 .item .slider-eval li{
  display: inline-block;
}

.item .slider-eval li.active i{
  color:#f5ce41;

}

</style>
