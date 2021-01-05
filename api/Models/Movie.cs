using System;

namespace api.Models
{
    public class Movie
    {
        public int Id { get; set; }
        public Guid Guid { get; set; }
        public string Name { get; set; }
        public string Genre { get; set; }
        public string Year { get; set; }
        public string ImageName { get; set; }
    }
}