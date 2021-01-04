using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
        private readonly DataContext _context;

        public MoviesController(DataContext context)
        {
            this._context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Movie>>> List()
        {
            var movies = await _context.Movies.ToListAsync();
            return movies;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Movie>> Details(Guid id)
        {
            var movieInDb = await _context.Movies.SingleOrDefaultAsync(m => m.Guid == id);

            if (movieInDb != null)
            {
                return movieInDb;
            }

            return NotFound();
        }

        [HttpPost]
        public async Task<ActionResult> Create(MovieDto movie)
        {
            Movie newMovie = new Movie
            {
                Guid = Guid.NewGuid(),
                Name = movie.Name,
                Genre = movie.Genre,
                Year = movie.Year
            };

            await _context.Movies.AddAsync(newMovie);
            int result = _context.SaveChanges();

            if (result > 0)
                return Ok();

            return BadRequest();
        }


    }
}