using Newtonsoft.Json;
using SeriesesFinder.Server.Domain.Interfaces;
using SeriesesFinder.Server.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Web.Helpers;

namespace SeriesesFinder.Server.Infra.Services
{
    public class SeriesService : ISeriesService
    {
        private const string webSitepPath = "http://www.omdbapi.com/";
        private const string apiKey = "6c8aac9d";

        public async Task<Series> GetSeries(string id)
        {
            OriginalSeriesObj originalData = new OriginalSeriesObj();
            string fullPath = CreatePath(id);
            using (HttpClient httpClient = new HttpClient())
            {
                HttpResponseMessage response = await httpClient.GetAsync(fullPath);
                var tr = httpClient.GetStringAsync(fullPath).Result;
                var tr2 = response.Content.ReadAsStringAsync().Result;
                originalData = JsonConvert.DeserializeObject<OriginalSeriesObj>(tr2);
            }
            var s = originalData.CreateSeries();
            return originalData.CreateSeries();
        
        }

    
        public async Task<Season> GetSeriesAndSeason(string seriesName,int seasonNum)
        {
            string fullPath = CreatePath(seriesName,seasonNum);
            OriginalSeasonObj originalSeasonObj = new OriginalSeasonObj();
            using (HttpClient httpClient = new HttpClient())
            {
                HttpResponseMessage response = await httpClient.GetAsync(fullPath);
                originalSeasonObj = JsonConvert.DeserializeObject<OriginalSeasonObj>( response.Content.ReadAsStringAsync().Result);
            }
            return originalSeasonObj.CreateSeason();
        }

        private string CreatePath(string MovieName) => $"{webSitepPath}?t={MovieName}&apikey={apiKey}";

        private string CreatePath(string movieName, int season) => $"{webSitepPath}?t={movieName}&Season={season}&apikey={apiKey}";
    }
}
