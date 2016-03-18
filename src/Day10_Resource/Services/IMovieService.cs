using System.Collections.Generic;
using Day10_Resource.Models;

namespace Day10_Resource.Services
{
    public interface IMovieService
    {
        void DeleteMovie(int id);
        Movie FindMovie(int id);
        IList<Movie> ListMovies();
        void SaveMovie(Movie movie);
    }
}
