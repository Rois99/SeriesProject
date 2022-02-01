using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
namespace SeriesesFinder.Server.Domain.Models
{

    public class OriginalSeasonObj
    {
        public string Title { get; set; }
        public string Season { get; set; }
        public string totalSeasons { get; set; }
        public Episode[] Episodes { get; set; }
        public string Response { get; set; }

        public Season CreateSeason()
        {
            Season season = new Season();
            int.TryParse(this.Season, out int seasonnum);
            season.SeasonNum = seasonnum;
            season.Episodes = this.Episodes;
            return season;
        }



    }
}
