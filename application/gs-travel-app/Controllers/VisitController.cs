using System;
using System.Threading.Tasks;
using gs_travel_app_api.Models;
using gs_travel_app_api.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace gs_travel_app_api.Controllers
{
  [ApiController]
  [Route("visits")]
  public class VisitController : ControllerBase
  {
    private readonly IVisitService _visitService;

    public VisitController(IVisitService visitService)
    {
      _visitService = visitService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
      try
      {
        return Ok(await _visitService.GetAll());
      }
      catch (Exception exception)
      {
        Console.WriteLine($"Error getting visits: {exception.Message}");
        return StatusCode((int) this.HttpContext.Response.StatusCode, exception.Message);
      }
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] Visit visit)
    {
      try
      {
        var createdVisit = await _visitService.Create(visit);
        return Ok(createdVisit);
      }
      catch (Exception exception)
      {
        Console.WriteLine($"Error adding visit: {exception.Message}");
        return StatusCode(500);
      }
    }
  }
}
