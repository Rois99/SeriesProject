using Microsoft.AspNetCore.Cors;
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
    [Route("Series")]
    public class SeriesController : Controller
    {
        private ISeriesService _seriesService;
        public SeriesController(ISeriesService seriesService)
        {
            _seriesService = seriesService;
        }

        [HttpGet("GetByTitle/{SeriesName}")]
        public async Task<string> GetSeries(string SeriesName)
        {
            var series = await _seriesService.GetSeries(SeriesName);
            return JsonConvert.SerializeObject(series);           
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}
