Main = angular.module("Main")

Main.directive('datePicker', function() {
	return {
		restrict: 'A',
		require : 'ngModel',
		link: function(scope, element, attrs, ngModelCtrl) {
			element.css("cursor", "pointer");
			element.css("background-color", "white");
			element.datepicker({
				startDate: attrs.startdate,
				endDate: attrs.enddate,
				format: attrs.format,
				weekStart: attrs.week_start,
				todayBtn: attrs.today_btn,
				onSelect: function(dateText, inst) {
					ngModelCtrl.$setViewValue(dateText);
					scope.$apply();
				}
			})
		}
	};
});
Main.controller("AppController", function($scope, $routeParams, $location){
	$scope.$routeParams = $routeParams

	$scope.isActive = function(route) {
    return route === $location.path();
  }
})

.controller("PanelController", function($scope){
	this.tab = 1;

	this.selectTab = function(setTab) {
		this.tab = setTab;
	}

	this.isSelected = function(checkTab) {
		return this.tab === checkTab;
	}

	// ratings
	this.ratings = function(rate) {
		var str = "";
		if(rate === 0) {
			str = "fa-star-o";
		} else if (rate < 5) {
			str = "fa-star-half-o";
		} else if (rate >= 5) {
			str = "fa-star";
		}
		return str;
		// {'fa-star-o':review.stars === 0, 'fa-star':review.stars >= 1, 'fa-star-half-o':review.stars >= 5}
	}

	this.highlyRated = function(ratings) {
		var stars = [];
		angular.forEach(ratings, function(value, key) {
		  this.push(value["stars"]);
		}, stars);
		return Math.max.apply(Math, stars);
	}
})

