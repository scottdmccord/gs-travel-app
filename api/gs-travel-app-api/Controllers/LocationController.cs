using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using gs_travel_app_api.Models;
using gs_travel_app_api.Services;
using Microsoft.AspNetCore.Mvc;

namespace gs_travel_app_api.Controllers
{
  [ApiController]
  [Route("locations")]
  public class LocationController: ControllerBase
  {
    private readonly ILocationService _locationService;

    public LocationController(ILocationService locationService)
    {
      _locationService = locationService;
    }

    [HttpGet]
    public async Task<IEnumerable<Location>> GetAll()
    {
      return await _locationService.GetAll();
    }
  }
}
