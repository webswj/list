var app = angular.module("myApp",[]);
	app.controller("cartCtrl",function($scope){
		$scope.list=[
			{
				id:101,
				name:'iphone5s',
				quantity:1,
				price:4300
			},
			{
				id:111,
				name:'魅族MX6',
				quantity:1,
				price:1999
			},
			{
				id:133,
				name:'魅族PRO 6',
				quantity:1,
				price:2499
			},
			{
				id:268,
				name:'华为P9',
				quantity:1,
				price:3430
			},
			{
				id:3300,
				name:'iphone5',
				quantity:1,
				price:3300
			},
			{
				id:232,
				name:'imac',
				quantity:1,
				price:23000
			},
			{
				id:131,
				name:'ipad',
				quantity:1,
				price:6800
			}
		];

		$scope.cart=[
			// {
			// 	id:101,
			// 	name:'iphone5s',
			// 	quantity:3,
			// 	price:4300
			// },
			// {
			// 	id:3300,
			// 	name:'iphone5',
			// 	quantity:30,
			// 	price:3300
			// },
			// {
			// 	id:232,
			// 	name:'imac',
			// 	quantity:5,
			// 	price:23000
			// },
			// {
			// 	id:131,
			// 	name:'ipad',
			// 	quantity:11,
			// 	price:6800
			// }
		];
		//商品列表中的商品添加到购物车
		$scope.addTo = function(id){
			var index = -1;
			angular.forEach($scope.list,function(item,key){
				if(item.id === id){
					index = key;
					return;
				}
			});			
			var goods = $scope.list[index];
			if(goods.quantity>0){
				if($scope.cart.indexOf(goods)!==-1){
					alert("商品已添加到购物车，请在购物车中修改数量");
				}else{
					$scope.cart.push(goods);					
				}

			}
		}
		//购物车货物价钱合计
		$scope.totalPrice = function(){
			var total = 0;
			angular.forEach($scope.cart,function(item){
				total +=item.quantity*item.price;
			});
			return total;
		};
		//数量总计方法
		$scope.totalQuantity = function(){
			var quantity = 0;
			angular.forEach($scope.cart,function(item){
				quantity += item.quantity;
			});
			return quantity;
		};
		//移除一条购物车记录
		$scope.remove = function(id){
			var index = findIndex(id);
			if(index!==-1){
				$scope.cart.splice(index,1);
			}			
		};
		//根据ID寻找索引值
		var findIndex = function(id){
			var index = -1;
				angular.forEach($scope.cart,function(item,key){
					if(item.id === id){
						index = key;
						return;
					}
				});
			return index;	
		}
		//为某个产品添加一个数量
		$scope.add = function(id){
			var index = findIndex(id);
			if(index!==-1){
				$scope.cart[index].quantity++;
			}
		};
		//为某个产品减少一个数量
		$scope.reduce = function(id){
			var index = findIndex(id);
			if($scope.cart[index].quantity>1){
				$scope.cart[index].quantity--;
			}else{
				var re = confirm("是否从购物车里移除该产品!");				
				if(re){
					$scope.remove(id);					
				}
			}			
		};
		//手动检测输入框的值
		$scope.$watch('cart',function(newValue,oldValue){
			angular.forEach(newValue,function(item,key){
				if (item.quantity<1) {
					var re = confirm("是否从购物车里移除该产品!");
					if(re){
						$scope.remove(item.id);
					}else{
						item.quantity = oldValue[key].quantity;
					}
					return;
				}
			});
		},true);
	});