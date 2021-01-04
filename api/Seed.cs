using System;
using System.Collections.Generic;
using System.Linq;
using api.Models;

namespace api
{
    public class Seed
    {
        public static void SeedData(DataContext context)
        {
            if (!context.Movies.Any())
            {
                var movies = new List<Movie>
                {
                    new Movie
                    {
                        Guid = Guid.NewGuid(),
                        Name = "Avengers Endgame",
                        Genre = "Action",
                        Year = "2019"
                    },
                     new Movie
                    {
                        Guid = Guid.NewGuid(),
                        Name = "Inception",
                        Genre = "Thriller",
                        Year = "2010"
                    },
                     new Movie
                    {
                        Guid = Guid.NewGuid(),
                        Name = "The Matrix",
                        Genre = "Sci Fi",
                        Year = "1999"
                    },
                };

                context.Movies.AddRange(movies);
                context.SaveChanges();
            }
        }
    }
}