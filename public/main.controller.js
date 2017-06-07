var app = angular.module("DemoApp", ['ngMaterial', 'cl.paging']);
app.controller("MainController", ['$scope', '$http', function ($scope, $http) {

    $scope.currentPage = 0;

    $scope.paging = {
        total: 10,
        current: 1,
        onPageChanged: loadPages,
    };

    function loadPages() {
        console.log('Current page is : ' + $scope.paging.current);

        // TODO : Load current page Data here

        $scope.currentPage = $scope.paging.current;

        $http.get("http://localhost:8080/getUsers/" + $scope.currentPage)
            .then(function (response) {
                $scope.users = response.data;
                $scope.paging.total = response.data.pages;
            });
    }

}]);
