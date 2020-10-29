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
      return await _dbContext.Locations.ToListAsync();
    }
  }
}
