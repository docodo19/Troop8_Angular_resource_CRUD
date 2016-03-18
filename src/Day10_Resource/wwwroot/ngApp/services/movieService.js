var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var MoviesService = (function () {
            function MoviesService($resource) {
                this.$resource = $resource;
                // adds an object that has connectiong to /api/movies/:id to this.MoviesResource so that it can utilize the $resource methods such as get(), query(), save(), delete().
                this.MoviesResource = this.$resource('/api/movies/:id');
            }
            // Method that queries a list of Movies - returns an array of movies
            MoviesService.prototype.listMovies = function () {
                return this.MoviesResource.query();
            };
            // Method that will let you save a movie - sends the data to the serverside action method which will actually save the movie to the database
            MoviesService.prototype.save = function (data) {
                return this.MoviesResource.save(data).$promise;
            };
            // Method that will get a single movie
            MoviesService.prototype.getMovie = function (id) {
                return this.MoviesResource.get({ id: id });
            };
            // Method that will delete a movie
            MoviesService.prototype.deleteMovie = function (id) {
                return this.MoviesResource.delete({ id: id }).$promise;
            };
            return MoviesService;
        }());
        Services.MoviesService = MoviesService;
        angular.module("MyApp").service("moviesService", MoviesService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=movieService.js.map