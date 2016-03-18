namespace MyApp.Controllers {

    // Movies List Controller
    export class MoviesListController {
        public movies;

        constructor(private moviesService: MyApp.Services.MoviesService) {
            // using the listMovies method within the moviesService to get a list of movies
            this.movies = this.moviesService.listMovies();
        }
    }

    // Movies Add Controller
    export class MoviesAddController {
        public movieToCreate;

        constructor(
            private moviesService: MyApp.Services.MoviesService,
            private $state:ng.ui.IStateService) {
        }

        addMovie() {
            this.moviesService.save(this.movieToCreate).then(() => {
                // once the movie has been sucessfully saved, navigate to the movies.html
                this.$state.go('movies');
            });
        }
    }

    // Movies Edit Controller
    export class MoviesEditController {
        public movieToEdit;

        constructor(
            private moviesService: MyApp.Services.MoviesService,
            private $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService) {

            // extracts the movie id from the url using $stateParams
            let movieId = this.$stateParams['id'];
            // makes a call to the database to get a single movie where the 
            this.movieToEdit = this.moviesService.getMovie(movieId);
        }

        editMovie() {
            this.moviesService.save(this.movieToEdit).then(() => {
                this.$state.go('movies');
            });
        }

        cancel() {
            this.$state.go('movies');
        }
    }

    // Movies Delete Controller 
    export class MoviesDeleteController {
        public movieToDelete;

        constructor(
            private moviesService: MyApp.Services.MoviesService,
            private $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService) {

            // get the movie to delete from the server
            this.movieToDelete = this.moviesService.getMovie(this.$stateParams['id']);
        }

        deleteMovie() {
            // option 1
            //this.moviesService.deleteMovie(this.$stateParams['id']).then(()=>{});
            // option 2
            this.moviesService.deleteMovie(this.movieToDelete.id).then(() => {
                this.$state.go('movies');
            });
        }

        cancel() {
            this.$state.go('movies');
        }
    }
}