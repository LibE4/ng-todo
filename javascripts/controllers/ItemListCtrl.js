"use strict";

app.controller("ItemListCtrl", function($scope, $rootScope, ItemFactory){
	$scope.items = [];

	let getItems = function(){
		ItemFactory.getItemList($rootScope.user.uid).then(function(fbItems){
			$scope.items = fbItems;
		})
	}
	getItems();

	$scope.deleteItem = function(itemId){
		ItemFactory.deleteItem(itemId).then(function(response){
			getItems();
		})
	};

	$scope.inputChange = function(checkItem){
		ItemFactory.editItem(checkItem).then(function(response){
			console.log("ctrl inputChange response", response);
		});
	};	
});