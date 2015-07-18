elixir = require('laravel-elixir');
gulp = require('gulp');


elixir(function(mix) {
    mix.sass('app.scss')
        .copy(
            'vendor/bower_components/jquery/dist/jquery.min.js',
            'public/js/vendor/jquery.js'
        )
        .copy(
            'vendor/bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js',
            'public/js/vendor/bootstrap.js'
        )
        .copy(
            'vendor/bower_components/font-awesome/css/font-awesome.min.css',
            'public/css/vendor/font-awesome.css'
        )
        .copy(
            'vendor/bower_components/angular/angular.min.js',
            'public/js/vendor/angular.js'
        )
        .copy(
            'vendor/bower_components/angular-ui-router/release/angular-ui-router.min.js',
            'public/js/vendor/angular-ui-router.js'
        )
        .copy(
            'vendor/bower_components/angular-ui-router.stateHelper/statehelper.min.js',
            'public/js/vendor/statehelper.js'
        )
    /*

     */
    ;
});