using System;
using System.Threading.Tasks;
using gs_travel_app_api.Models;
using gs_travel_app_api.Services;
using Microsoft.AspNetCore.Mvc;

namespace gs_travel_app_api.Controllers
{
  [ApiController]
  [Route("locations")]
  public class LocationController : ControllerBase
  {
    private readonly ILocationService _locationService;

    public LocationController(ILocationService locationService)
    {
      _locationService = locationService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
      try
      {
        return Ok(await _locationService.GetAll());
      }
      catch (Exception exception)
      {
        Console.WriteLine($"Error getting locations: {exception.Message}");
        return StatusCode((int) this.HttpContext.Response.StatusCode, exception.Message);
      }
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] Location location)
    {
      try
      {
        var createdLocation = await _locationService.Create(location);
        return Ok(createdLocation);
      }
      catch (Exception exception)
      {
        Console.WriteLine($"Error adding location: {exception.Message}");
        return StatusCode(500);
      }
    }
  }
}
