"use strict";

app.controller("ItemEditCtrl", function($scope, $routeParams, $location, ItemFactory){
	$scope.newTask = {};
	let itemId = $routeParams.id;
		console.log("itemId", itemId);
	ItemFactory.getSingleItem(itemId).then(function(oneItem){
		oneItem.id = itemId;
		$scope.newTask = oneItem;
	});
	$scope.addNewItem = function(){
		ItemFactory.editItem($scope.newTask).then(function(response){
			$scope.newTask = {};
			$location.url("/items/list")			
		})
	}

});