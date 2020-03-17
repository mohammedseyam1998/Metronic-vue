<template>
    <!-- <div class="locale-changer">
        <select v-model="$i18n.locale">
            <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang" @click="setDirection">{{ lang }}</option>
        </select> -->
        									<div class="m-stack__item m-stack__item--middle m-brand__tools">

										<!-- begin::Quick Actions-->
										<div class="m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-left m-dropdown--align-push" m-dropdown-toggle="click" aria-expanded="true">
											<a href="#" class="dropdown-toggle m-dropdown__toggle btn btn-outline-metal m-btn  m-btn--icon m-btn--pill" style="height:45px; background-color: #716aca;">
												<span>Select Language</span>
											</a>
											<div class="m-dropdown__wrapper">
												<span class="m-dropdown__arrow m-dropdown__arrow--left m-dropdown__arrow--adjust"></span>
												<div class="m-dropdown__inner">
													<div class="m-dropdown__body">
														<div class="m-dropdown__content">
															<ul class="m-nav">
																<li class="m-nav__section m-nav__section--first m--hide">
																	<span class="m-nav__section-text">Quick Menu</span>
																</li>
																<li class="m-nav__item">
																	<a href="" class="m-nav__link" @click.prevent="setDirection('en')">
																		<i class="m-nav__link-icon flaticon-share"></i>
																		<span class="m-nav__link-text">English</span>
																	</a>
																</li>

																<li class="m-nav__item">
																	<a href="" class="m-nav__link" @click.prevent="setDirection('ar')">
																		<i class="m-nav__link-icon flaticon-info"></i>
																		<span class="m-nav__link-text">Arabic</span>
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
										</div>

										<!-- end::Quick Actions-->

										<!-- begin::Responsive Header Menu Toggler-->
										<a id="m_aside_header_menu_mobile_toggle" href="javascript:;" class="m-brand__icon m-brand__toggler m--visible-tablet-and-mobile-inline-block">
											<span></span>
										</a>

										<!-- end::Responsive Header Menu Toggler-->

										<!-- begin::Topbar Toggler-->
										<a id="m_aside_header_topbar_mobile_toggle" href="javascript:;" class="m-brand__icon m--visible-tablet-and-mobile-inline-block">
											<i class="flaticon-more"></i>
										</a>

										<!--end::Topbar Toggler-->
									</div>

</template>



<script>
export default {
  methods :{
      setDirection(lang){
          this.$i18n.locale = lang
          if (lang === 'ar'){
              const rtlDir = document.getElementById('rtlDir');
              rtlDir.setAttribute('href', "/assets/demo/default/base/style.bundle.rtl.css");
              const ltr = document.getElementById('ltfDir');
              ltr.setAttribute('href',"/assets/vendors/base/vendors.bundle.rtl.css");
              var Moh = document.getElementById('m');
              Moh.removeAttribute('href')
              console.log(rtlDir);
          }else{
              var Moh = document.getElementById('m');
              Moh.setAttribute('href',"/assets/demo/default/base/style.bundle.css")
              rtlDir.removeAttribute("href");
              ltrA = document.getElementById('vendorRtl')
              ltrA.setAttribute('href','/assets/vendors/base/vendors.bundle.css')
              ltr.removeAttribute("href");
              console.log(ltr);

          }
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
