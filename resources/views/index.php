<!DOCTYPE html>
<html lang="en" ng-app="app">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>MC App</title>

    <!-- CSS -->
    <link media="all" type="text/css" rel="stylesheet" href="/css/app.css">
    <link media="all" type="text/css" rel="stylesheet" href="/css/vendor/font-awesome.css">

    <!-- Scripts -->
    <script src="/js/vendor/jquery.js"></script>
    <script src="/js/vendor/bootstrap.js"></script>
    <script src="/js/vendor/angular.js"></script>
    <script src="/js/vendor/angular-ui-router.js"></script>
    <script src="/js/vendor/statehelper.js"></script>
</head>
<body>

<div class="wrapper">
    <navigation-bar></navigation-bar>

    <div class="contentContainer">
        <div ui-view></div>
    </div>
</div>


    <script src="/js/app.js"></script>
    <script src="/js/include/controllers.js"></script>
    <script src="/js/include/navigation.js"></script>

</body>
</html>
