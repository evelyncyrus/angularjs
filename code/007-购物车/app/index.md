#首页
##说明
* 1王臭臭
* 2逗逼
* 3我相信你
<pre>
 $scope.remove = function (id) {
    var index = findIndex(id);

    if (index !== -1) {
      $scope.cart.splice(index, 1);
    } else {
      return false;
    }
  }
<code>

