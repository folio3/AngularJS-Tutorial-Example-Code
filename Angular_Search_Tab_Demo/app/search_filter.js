/**
 * Created by zshaikh on 3/9/2016.
 */
(function() {

    // define a new module
    angular.module("searchtab").filter('search', SearchFilter);

    function SearchFilter() {

        return function (array, query) {

            // if no query defined, then return complete array
            if (!query) {
                return array;
            }

            var filtered = [];

            // convert search query to lower case
            query = query.toLowerCase();

            // loop on all items of array and match with query
            angular.forEach(array, function (item) {
                var name = item.name.toLowerCase();
                var found = name.indexOf(query) > -1;

                // if query matches name field
                // then add item in filtered array
                if (found === true) {
                    filtered.push(item);
                }
            });

            return filtered;
        };

    }

})();