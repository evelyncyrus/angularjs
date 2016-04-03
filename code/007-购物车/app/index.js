/**
 * Created by evelyncyrus on 2016/4/1.
 */
var CartController = function ($scope) {
  $scope.cart = [
    {
      id: 1000,
      name: 'iphone6s',
      quantity: 3,
      price: 5800
    },
    {
      id: 2000,
      name: 'iphone6',
      quantity: 3,
      price: 4800
    },
    {
      id: 3000,
      name: 'imac',
      quantity: 3,
      price: 10800
    },
  ];
  /*商品总价*/
  $scope.totalPrice = function () {
    var total = 0;
    angular.forEach($scope.cart, function (item) {
      total += parseInt(item.quantity) * parseInt(item.price);
    });
    return total;
  }

  /*商品总数*/
  $scope.totalNum = function () {
    var total = 0;
    angular.forEach($scope.cart, function (item) {
      total += parseInt(item.quantity);
    });
    return total;
  }

  /*增加商品*/
  $scope.add = function (id) {
    var index = findIndex(id);

    if (index !== -1) {
      ++$scope.cart[index].quantity;
    }
  }

  /*减少商品*/
  $scope.reduce = function (id) {
    var index = findIndex(id);

    if (index !== -1) {
      var item = $scope.cart[index];
      if (item.quantity > 1) {
        --item.quantity;
      } else {
        var returnKey = confirm('是否将商品从购物车移除？');
        if (returnKey) {
          $scope.remove(id);
        }
      }
    }
  }

  /*移除商品*/
  $scope.remove = function (id) {
    var index = findIndex(id);

    if (index !== -1) {
      $scope.cart.splice(index, 1);
    } else {
      return false;
    }
  }

  /*查找索引值*/
  var findIndex = function (id) {
    var index = -1;
    angular.forEach($scope.cart, function (item, key) {
      if (item.id === id) {
        index = key;
        return;
      }
    });
    return index;
  }

  $scope.$watch('cart', function (newValue, oldValue) {

    angular.forEach(newValue, function (item, key) {
      if (item.quantity < 1) {
        var returnKey = confirm('是否将商品从购物车移除?');
        if (returnKey) {
          $scope.remove(item.id);
        }
      }
    })
  }, true);
}