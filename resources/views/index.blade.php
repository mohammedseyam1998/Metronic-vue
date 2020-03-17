<!DOCTYPE html>
<html lang="en">
  <head>
		<meta charset="utf-8" />
		<title>Metronic | Dashboard</title>
		<meta name="description" content="Latest updates and statistic charts">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no">
        <link rel="stylesheet" id="m" href="{{asset('/assets/demo/default/base/style.bundle.css')}}">
        <link rel="stylesheet" href="" id="rtlDir">
        <link rel="stylesheet" id="vendorRtl" href="{{asset('/assets/vendors/base/vendors.bundle.css')}}">

        <link rel="stylesheet" href="" id="ltfDir">

        <link rel="stylesheet" href="{{asset('/assets/vendors/custom/fullcalendar/fullcalendar.bundle.css')}}">
        <link rel="stylesheet" href="{{asset('/assets/demo/default/media/img/logo/favicon.ico')}}">
        <!--begin::Web font -->


		<script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js"></script>
		<script>
			WebFont.load({
            google: {"families":["Poppins:300,400,500,600,700","Roboto:300,400,500,600,700"]},
            active: function() {
                sessionStorage.fonts = true;
            }
          });
        </script>



		<!--end::Web font -->

		<!--begin::Global Theme Styles -->

		<!--RTL version:<link href="assets/vendors/base/vendors.bundle.rtl.css" rel="stylesheet" type="text/css" />-->

	</head>
  <body>
    <noscript>
      <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app"></div>
    <script src="{{ mix('js/main.js') }}"></script>
    		<!-- begin::Quick Nav -->
    		<script src="{{asset('/assets/vendors/base/vendors.bundle.js')}}" type="text/javascript"></script>
		<script src="{{asset('/assets/demo/default/base/scripts.bundle.js')}}" type="text/javascript"></script>

		<!--end::Global Theme Bundle -->

		<!--begin::Page Vendors -->
		<script src="{{asset('/assets/vendors/custom/fullcalendar/fullcalendar.bundle.js')}}" type="text/javascript"></script>

		<!--end::Page Vendors -->

		<!--begin::Page Scripts -->
		<script src="{{asset('/assets/app/js/dashboard.js')}}" type="text/javascript"></script>

  </body>
</html>
