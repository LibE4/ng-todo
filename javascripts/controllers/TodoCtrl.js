"use strict";

app.controller("TodoCtrl", function($scope, ItemFactory){
	$scope.welcome = "hello";
	$scope.showListView = true;
	$scope.newTask = {};
	$scope.items = [];

	let getItems = function(){
		ItemFactory.getItemList().then(function(fbItems){
			$scope.items = fbItems;
		})
	}
	getItems();

	ItemFactory.getItemList().then(function(fbItems){
		console.log("items form controller", fbItems);
		$scope.items = fbItems;
	})

	$scope.allItems = function(){
		console.log("you clicked all items");
		$scope.showListView = true;
	};
	$scope.newItem = function(){
		console.log("you clicked new item");
		$scope.showListView = false;
	};

	$scope.addNewItem =function(){
		$scope.newTask.isCompleted = false;
		// $scope.newTask.id = $scope.items.length;
		// console.log("newTask in funtion", $scope.newTask);
		// $scope.items.push($scope.newTask);
		ItemFactory.postNewItem($scope.newTask).then(function(itemId){
			getItems();
			$scope.newTask = {};
			$scope.showListView = true;
		})
	};

	$scope.deleteItem = function(itemId){
		console.log("deleteItem");
		ItemFactory.deleteItem(itemId).then(function(resonse){
			getItems();
		})
	};
	
});