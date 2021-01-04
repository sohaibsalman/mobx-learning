using System;

namespace api.Models
{
    public class MovieDto
    {
        public Guid Guid { get; set; }
        public string Name { get; set; }
        public string Genre { get; set; }
        public string Year { get; set; }
    }
}