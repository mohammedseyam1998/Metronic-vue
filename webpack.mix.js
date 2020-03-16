const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/main.js', 'public/js')
// .css('resources/css/app.css', 'public/css');

// mix.webpackConfig({
//     resolve: {
//         alias: {
//             'morris.js': 'morris.js/morris.js',
//             'jquery-ui': 'jquery-ui',
//         },
//     },
//     plugins: [
//         new webpack.ProvidePlugin({
//           $: 'jquery',
//           jQuery: 'jquery',
//           'window.jQuery': 'jquery',
//           Popper: ['popper.js', 'default']
//         })
//       ]
//  });
