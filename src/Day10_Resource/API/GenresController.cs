using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using Day10_Resource.Models;
using Day10_Resource.Services;


namespace Day10_Resource.API
{
    [Route("api/[controller]")]
    public class GenresController : Controller
    {
        private IGenreService _genreService;

        public GenresController(IGenreService genreService)
        {
            this._genreService = genreService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var genres = _genreService.ListGenres().Select(g => new {g.Id, g.Name});
            return Ok(genres);
        }

        [HttpGet("{id}")]
        public Genre Get(int id)
        {
            return _genreService.FindGenre(id);
        }
    }
}
