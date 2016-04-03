/**
 * Created by evelyncyrus on 2016/3/21.
 */

var firstController=function($scope){
    // $scope 作用域
    // 申明一个MODEL
    $scope.name = '青蛙';
    $scope.age  = '20';
    console.log($scope)

}

var secondController=function($scope){
    $scope.name = "蝌蚪";
    $scope.age = '5';
    console.log($scope)

}