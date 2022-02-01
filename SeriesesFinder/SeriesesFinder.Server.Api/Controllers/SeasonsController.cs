using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using SeriesesFinder.Server.Domain.Interfaces;
using SeriesesFinder.Server.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SeriesesFinder.Server.Api.Controllers
{
    [ApiController]
    [Route("Season")]
    public class SeasonsController : Controller
    {
        private ISeriesService _seriesService;
        public SeasonsController(ISeriesService seriesService)
        {
            _seriesService = seriesService;
        }

        [HttpGet("GetByTitleAndNumber/{seriesName}/{seasonNum}")]
        public async Task<string> GetSeason(string seriesName, int seasonNum)
        {
            Season season = await _seriesService.GetSeriesAndSeason(seriesName, seasonNum);
            return JsonConvert.SerializeObject(season);
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}
