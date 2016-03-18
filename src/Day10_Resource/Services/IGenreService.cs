using System.Collections.Generic;
using Day10_Resource.Models;

namespace Day10_Resource.Services
{
    public interface IGenreService
    {
        Genre FindGenre(int id);
        IList<Genre> ListGenres();
    }
}
