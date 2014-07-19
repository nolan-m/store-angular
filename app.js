(function(){
	var app = angular.module('store', []);
	app.controller('StoreController', function(){
		this.products = gems;

	});

	app.controller('GalleryController', function(){
		this.current = 0;
		this.setCurrent = function(value){
      this.current = value || 0;
    };
	});

	app.controller('ReviewController', function(){
		this.review = {};
		this.addReview = function(product){
			product.reviews.push(this.review);
			this.review = {};
		}
	});

	app.directive('productTitle', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-title.html'
		}
	});

	app.directive('productPanels', function() {
		return {
			restrict: 'E',
			templateUrl: 'product-panels.html',
			controller: function(){
				this.tab = 1;
				this.selectTab = function(setTab){
					this.tab = setTab;
				};
				this.isSelected = function(checkTab){
					return this.tab === checkTab;
				};
			},
			controllerAs: 'panel'
		};
	});

	var gems= [
		{
			name: 'Dodecahedron',
			price: 2.95,
			description: 'Nice gem!',
			canPurchase: true,
			soldOut: false,
			images: [
				{full: 'img/red.jpg'
				}
			],
			reviews: [
				{ stars: 5,
					body: "Great Gem",
					author: "gemlover@email.com"
				}
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Very smooth!',
			canPurchase: true,
			soldOut: false,
			images: [
				{full: 'img/green.jpg'
				}
			],
			reviews: [
				{ stars: 4,
					body: "Pretty good",
					author: "gemlover@email.com"
				}
			]
		}
	];
})();
	