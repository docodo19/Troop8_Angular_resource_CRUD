namespace MyApp.Services {

    export class MoviesService {
        private MoviesResource;

        constructor(private $resource: ng.resource.IResourceService) {
            // adds an object that has connectiong to /api/movies/:id to this.MoviesResource so that it can utilize the $resource methods such as get(), query(), save(), delete().
            this.MoviesResource = this.$resource('/api/movies/:id');
        }

        // Method that queries a list of Movies - returns an array of movies
        listMovies() {
            return this.MoviesResource.query();
        }

        // Method that will let you save a movie - sends the data to the serverside action method which will actually save the movie to the database
        save(data) {
            return this.MoviesResource.save(data).$promise;
        }

        // Method that will get a single movie
        getMovie(id) {
            return this.MoviesResource.get({ id: id });
        }

        // Method that will delete a movie
        deleteMovie(id) {
            return this.MoviesResource.delete({ id: id }).$promise;
        }


    }
    
    angular.module("MyApp").service("moviesService", MoviesService);
}

