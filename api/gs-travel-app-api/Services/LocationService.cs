using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using gs_travel_app_api.Database;
using gs_travel_app_api.Models;
using Microsoft.EntityFrameworkCore;

namespace gs_travel_app_api.Services
{
  public class LocationService : ILocationService
  {
    private readonly MariaDbContext _dbContext;

    public LocationService(MariaDbContext dbContext)
    {
      _dbContext = dbContext;
    }

    public async Task<IEnumerable<Location>> GetAll()
    {
      Console.WriteLine("Getting locations from the database.");
      return await _dbContext.Locations.ToListAsync();
    }

    public async Task<IEnumerable<Location>> Add(Location location)
    {
      Console.WriteLine($"Adding location {location.Name} to the database.");
      _dbContext.Locations.Add(location);
      _dbContext.SaveChanges();

      // return success or failure (?)
      return await _dbContext.Locations.ToListAsync();
    }
  }
}
