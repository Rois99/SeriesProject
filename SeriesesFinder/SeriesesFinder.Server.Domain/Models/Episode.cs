using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SeriesesFinder.Server.Domain.Models
{
    public class Episode
    {
        public string Title { get; set; }
        public string Released { get; set; }
        public string episode { get; set; }
        public string imdbRating { get; set; }
        public string imdbID { get; set; }
    }
}
