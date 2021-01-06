using System;
using Microsoft.AspNetCore.Http;

namespace api.Models
{
    public class MovieDto
    {
        public Guid Guid { get; set; }
        public string Name { get; set; }
        public string Genre { get; set; }
        public string Year { get; set; }
        public string ImageName { get; set; }
        public IFormFile ImageFile { get; set; }
        public string ImageSrc { get; set; }
    }
}