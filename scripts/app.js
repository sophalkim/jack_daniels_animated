(function () {
	// The module name is store and there are no dependencies
	var app = angular.module('store', ['products']);
	// Store Controller
	app.controller('StoreController', function() {
		this.products = gems;
	});
	// Review Controller
	app.controller('ReviewController', function() {
		this.review = {};

		this.addReview = function(product){
			this.review.createdOn = Date.now();
			product.reviews.push(this.review);
			this.review = {};
		};
	});
	// Groupon Controller
	app.controller('GrouponController', ['$http', function($http) {
		var store = this;
		store.products = ['loading', 'loading', 'loading'];
		$http.get('http://groupon-api.herokuapp.com/products.json').success(function(data){
			store.products = data;
		});
	}]);
	
	// Data for the Store Controller
	var gems = [
		{
			name: 'ruby',
			price: 4.99,
			canPurchase: true,
			soldOut: false,
			image: "images/ruby.jpg",
			reviews: [{
        stars: 3,
        body: "I think this gem was just OK, could honestly use more shine, IMO.",
        author: "JimmyDean@example.org",
        createdOn: 1397490980837
      }, {
        stars: 4,
        body: "Any gem with 12 faces is for me!",
        author: "gemsRock@example.org",
        createdOn: 1397490980837
      }]
		},
		{
			name: 'emerald',
			price: 3.99,
			canPurchase: true,
			soldOut: false,
			image: "images/emerald.jpg",
			reviews: [{
        stars: 1,
        body: "This gem is WAY too expensive for its rarity value.",
        author: "turtleguyy@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "BBW: High Shine != High Quality.",
        author: "LouisW407@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "Don't waste your rubles!",
        author: "nat@example.org",
        createdOn: 1397490980837
      }]
		},
		{
			name: 'sapphire',
			price: 5.45,
			canPurchase: true,
			soldOut: false,
			image: "images/sapphire.jpg",
			reviews: [{
        stars: 3,
        body: "I think this gem was just OK, could honestly use more shine, IMO.",
        author: "JimmyDean@example.org",
        createdOn: 1397490980837
      }, {
        stars: 4,
        body: "Any gem with 12 faces is for me!",
        author: "gemsRock@example.org",
        createdOn: 1397490980837
      }]
		}
	];
	// Controller for the list of Gems, it will use with a filter to sortBy ascending
	app.controller('GemListController', function() {
		this.gemlist = gemlist;
	});
	// Data for GemListController
	var gemlist = [
		'opal', 'diamond', 'topaz', 'rainbow', 'princess', 'heart'
	];
	// Controller for controlling the tabs and information about the gems
	app.controller('TabController', function() {
		// Private int variable
		this.tab = 1;
		// Setter for tab variable
		this.setTab = function(newValue) {
			this.tab = newValue;
			// console.log('The tab value is: ' + this.tab);
		};
		// Return true if the tabName is equal to tab
		this.isSet = function(tabName) {
			return this.tab === tabName;
		};
	});

	

})();