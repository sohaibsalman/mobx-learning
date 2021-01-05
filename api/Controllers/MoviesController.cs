using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using api.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly IWebHostEnvironment _hostEnvironment;

        public MoviesController(DataContext context, IWebHostEnvironment hostEnvironment)
        {
            this._hostEnvironment = hostEnvironment;
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
        public async Task<ActionResult> Create([FromForm] MovieDto movie)
        {
            Movie newMovie = new Movie
            {
                Guid = Guid.NewGuid(),
                Name = movie.Name,
                Genre = movie.Genre,
                Year = movie.Year,
            };
            newMovie.ImageName = await SaveImage(movie.ImageFile);

            await _context.Movies.AddAsync(newMovie);
            int result = await _context.SaveChangesAsync();

            if (result > 0)
                return Ok();

            return BadRequest();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(Guid id)
        {
            var movieInDb = await _context.Movies.SingleOrDefaultAsync(m => m.Guid == id);

            if (movieInDb != null)
            {
                _context.Remove(movieInDb);
                await _context.SaveChangesAsync();
                return Ok();
            }

            return BadRequest();
        }

        [NonAction]
        public async Task<string> SaveImage(IFormFile imageFile)
        {
            string imageName = new string(Path.
                                            GetFileNameWithoutExtension(imageFile.FileName).
                                            Take(10).
                                            ToArray());
            imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(imageFile.FileName);
            var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "Images", imageName);

            using (var fileStream = new FileStream(imagePath, FileMode.Create))
            {
                await imageFile.CopyToAsync(fileStream);
            }
            return imageName;
        }

    }
}