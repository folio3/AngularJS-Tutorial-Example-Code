Main.controller("ReviewController", function($scope, $routeParams){
    this.review = {};

    this.addReview = function(product, form) {
        if(form.$valid === false) {
            console.log(form.submitted)
        } else {
            this.review.stars = parseInt(this.review.stars)
            product.reviews.push(this.review)
            this.review = {}
        }
    }
});