using SeriesesFinder.Server.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SeriesesFinder.Server.Domain.Interfaces
{
    public interface ISeriesService
    {
        public Task<Series> GetSeries(string seriesName);
        public Task<Season> GetSeriesAndSeason(string seriesName, int seasonNum);
    }
}
