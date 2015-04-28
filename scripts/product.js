(function () {
	var app = angular.module('products', []);

	// <product-information> directive
	app.directive('productInformation', function() {
		return {
			restrict: 'E',
			templateUrl: 'partials/product_information.html'
		};
	});

	// <module-pattern> directive
	app.directive('modulePattern', function() {
		return {
			restrict: 'E',
			templateUrl: 'partials/module_pattern.html'
		};
	});
	// <form-partial> directive including review controller
	app.directive('formPartial', function() {
		return {
			restrict: 'E',
			templuateUrl: 'partials/form_partial.html',
			controller: function() {
				this.review = {};

				this.addReview = function(product){
					this.review.createdOn = Date.now();
					product.reviews.push(this.review);
					this.review = {};
				};
			},
			controllerAs: 'reviewCtrl'
		};
	});

})();