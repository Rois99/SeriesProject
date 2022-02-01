using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SeriesesFinder.Server.Domain.Models
{
    public class Season
    {
        public int SeasonNum { get; set; }
        public Episode[] Episodes { get; set; }
    }
}
