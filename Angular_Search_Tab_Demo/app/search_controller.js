/**
 * Created by zshaikh on 3/9/2016.
 */
(function() {

    // define a new module
    angular.module("searchtab").controller("SearchController", ['SearchService', SearchController]);

    function SearchController(searchService) {
        this.countries = searchService.get();
    }

})();