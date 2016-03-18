var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        // Movies List Controller
        var MoviesListController = (function () {
            function MoviesListController(moviesService) {
                this.moviesService = moviesService;
                // using the listMovies method within the moviesService to get a list of movies
                this.movies = this.moviesService.listMovies();
            }
            return MoviesListController;
        }());
        Controllers.MoviesListController = MoviesListController;
        // Movies Add Controller
        var MoviesAddController = (function () {
            function MoviesAddController(moviesService, $state) {
                this.moviesService = moviesService;
                this.$state = $state;
            }
            MoviesAddController.prototype.addMovie = function () {
                var _this = this;
                this.moviesService.save(this.movieToCreate).then(function () {
                    // once the movie has been sucessfully saved, navigate to the movies.html
                    _this.$state.go('movies');
                });
            };
            return MoviesAddController;
        }());
        Controllers.MoviesAddController = MoviesAddController;
        // Movies Edit Controller
        var MoviesEditController = (function () {
            function MoviesEditController(moviesService, $stateParams, $state) {
                this.moviesService = moviesService;
                this.$stateParams = $stateParams;
                this.$state = $state;
                // extracts the movie id from the url using $stateParams
                var movieId = this.$stateParams['id'];
                // makes a call to the database to get a single movie where the 
                this.movieToEdit = this.moviesService.getMovie(movieId);
            }
            MoviesEditController.prototype.editMovie = function () {
                var _this = this;
                this.moviesService.save(this.movieToEdit).then(function () {
                    _this.$state.go('movies');
                });
            };
            MoviesEditController.prototype.cancel = function () {
                this.$state.go('movies');
            };
            return MoviesEditController;
        }());
        Controllers.MoviesEditController = MoviesEditController;
        // Movies Delete Controller 
        var MoviesDeleteController = (function () {
            function MoviesDeleteController(moviesService, $stateParams, $state) {
                this.moviesService = moviesService;
                this.$stateParams = $stateParams;
                this.$state = $state;
                // get the movie to delete from the server
                this.movieToDelete = this.moviesService.getMovie(this.$stateParams['id']);
            }
            MoviesDeleteController.prototype.deleteMovie = function () {
                var _this = this;
                // option 1
                //this.moviesService.deleteMovie(this.$stateParams['id']).then(()=>{});
                // option 2
                this.moviesService.deleteMovie(this.movieToDelete.id).then(function () {
                    _this.$state.go('movies');
                });
            };
            MoviesDeleteController.prototype.cancel = function () {
                this.$state.go('movies');
            };
            return MoviesDeleteController;
        }());
        Controllers.MoviesDeleteController = MoviesDeleteController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=moviesControllers.js.map