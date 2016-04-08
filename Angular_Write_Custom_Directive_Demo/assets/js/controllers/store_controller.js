angular.module("Main")

.controller("StoreController", function($scope, $routeParams){
	$scope.controller_name = "BookController";

	$scope.greet = "Bonjour!"
	$scope.params = $routeParams;

	$scope.products = [
			{
				id: 1, 
				name: "Gem One", 
				description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus iure dicta adipisci incidunt, maiores ex, eveniet iste commodi asperiores omnis cumque reprehenderit", 
				price: "45", 
				image: "https://devopsbootcamp.osuosl.org/_images/ruby-gem.png",
				specifications: [
					{materialType: "Solid", color: "Red", weight: 29}
				],
				reviews: [
					{stars: 3, comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", author: "abc@example.com", birthday: "2013-07-25"},
					{stars: 5, comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", author: "xyz@example.com", birthday: "2013-05-13"}
				], 
				canPurchase: false, 
				soldOut: false,
				publishedAt: "1388123412323"
			},
			{
				id: 2, 
				name: "Gem Two", 
				description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus iure dicta adipisci incidunt, maiores ex, eveniet iste commodi asperiores omnis cumque reprehenderit", 
				price: "60", 
				image: "https://lh3.googleusercontent.com/-xsS1M2ASymc/VXpmiWtt1FI/AAAAAAAAB60/ZqBeMYLNRxc/w506-h440/ruby.png",
				specifications: [
					{materialType: "Solid Charge", color: "Redish", weight: 20}
				],
				reviews: [
					{stars: 2, comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", author: "abc@example.com", birthday: "2013-07-25"},
					{stars: 4, comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", author: "xyz@example.com", birthday: "2013-07-25"}
				], 
				canPurchase: true, 
				soldOut: false,
				publishedAt: "1388123412323"
			}
	]

	$.grep($scope.products, function(e) {
		if(e.id == $scope.params.id) {
			$scope.product = {
				id: e.id,
				name: e.name,
				description: e.description,
				price: e.price,
				image: e.image,
				specifications: e.specifications,
				reviews: e.reviews
			}
		}
	});
})
