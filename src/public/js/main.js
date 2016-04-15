var app = angular.module("myApp", ['ngResource', 'ngSanitize']);
app.controller("myCtrl", function ($scope, $resource) {
    $scope.message = "Hello";
    $scope.content = "";


    $scope.search = function (message) {
        $resource('/search').get({message: message}, function (item) {
            console.log(item);
            $scope.content = item.htmlWikiText;
        });
    }
});
