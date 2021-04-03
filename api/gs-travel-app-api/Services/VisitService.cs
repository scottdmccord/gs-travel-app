using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using gs_travel_app_api.Database;
using gs_travel_app_api.Models;
using gs_travel_app_api.Services.Interfaces;

namespace gs_travel_app_api.Services
{
  public class VisitService : IVisitService
  {
    private readonly MariaDbContext _dbContext;

    public VisitService(MariaDbContext dbContext)
    {
      _dbContext = dbContext;
    }

    public async Task<IEnumerable<Visit>> GetAll()
    {
      Console.WriteLine("Getting visits from the database.");
      return await _dbContext.Visits.ToListAsync();
    }

    public async Task<IEnumerable<Visit>> Create(Visit visit)
    {
      Console.WriteLine($"Creating new visit");
      _dbContext.Visits.Add(visit);
      _dbContext.SaveChanges();

      return await _dbContext.Visits.ToListAsync();
    }
  }
}
