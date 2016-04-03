/**
 * Created by evelyncyrus on 2016/3/21.
 */

var firstController=function($scope){
    // $scope 作用域
    // 申明一个MODEL
    $scope.date = new Date();


    setInterval(function(){
        //这里虽然变 但是并没有触发  脏检查
        $scope.date = new Date();
    },1000);

    setInterval(function(){
        $scope.$apply(function(){
            $scope.date = new Date();
            //触发脏检查
        })
    },1000);
}