<template>
    <div>
       <Carousel :value="cars" :numVisible="4" :numScroll="3" :responsiveOptions="responsiveOptions">
	<template #item="slotProps">
		<div class="car-details">
			<div class="p-grid p-nogutter">
				<div class="p-col-12" style="min-height: 66px;">
					<img :src="'./assets/app/media/img/logos/' + slotProps.data.brand + '.png'" />
				</div>
				<div class="p-col-12 ">
                       <div class="item">

                        <p class="mt-2" style="color: #3927ca;font-weight: bold">{{slotProps.data.title}}</p>
                        <ul class="list-unstyled slider-eval">
                        <li class="active"><i class="fas fa-star" style="font-size: 18px;"></i></li>
                        <li class="active"><i class="fas fa-star" style="font-size: 18px;"></i></li>
                        <li class="active"><i class="fas fa-star" style="font-size: 18px;"></i></li>
                        <li class="active"><i class="fas fa-star" style="font-size: 18px;"></i></li>
                        <li><i class="fas fa-star" style="font-size: 18px;"></i></li>

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
                  title:"Mohammed Seyam",
                  price:'30$',
                  brand:'logo-1'

            },
            {
                  title:"Mohammed Seyam",
                  price:'45$',
                   brand:'logo-2'

            },
              {
                  title:"Mohammed Seyam",
                     price:'80$',
                      brand:'logo-3'

            },
              {
                  title:"Mohammed Seyam",
                     price:'40$',
                      brand:'logo-4'

            },  {
                  title:"Mohammed Seyam",
                     price:'330$'

            },
              {
                  title:"Mohammed Seyam",
                     price:'350$'

            },
              {
                  title:"Mohammed Seyam",
                     price:'380$'

            },
              {
                  title:"Mohammed Seyam",
                     price:'60$'

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
  margin-bottom: 5px;

}
.item .progress-bar .fill-color{
  background: rgb(192, 216, 126);
  display: block;
  width:80%;
  height:100%
}
 .item .sold {
  font-size: 15px;
  margin-left: -140px;
}
 .item .slider-eval li{
  display: inline-block;
}

.item .slider-eval li.active i{
  color:#f5ce41;

}

</style>
