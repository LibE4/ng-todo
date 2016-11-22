"use strict";

app.controller("ItemListCtrl", function($scope, ItemFactory){
	$scope.items = [];

	let getItems = function(){
		ItemFactory.getItemList().then(function(fbItems){
			$scope.items = fbItems;
		})
	}
	getItems();

	$scope.deleteItem = function(itemId){
		ItemFactory.deleteItem(itemId).then(function(resonse){
			getItems();
		})
	};

	$scope.inputChange = function(checkItem){
		ItemFactory.editItem(checkItem).then(function(resonse){
			console.log("ctrl inputChange response", resonse);
		});
	};	
});