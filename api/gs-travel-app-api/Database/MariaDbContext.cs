using System;
using gs_travel_app_api.Models;
using Microsoft.EntityFrameworkCore;

namespace gs_travel_app_api.Database
{
  public class MariaDbContext: DbContext
  {
    public MariaDbContext(DbContextOptions<MariaDbContext> options) : base(options)
    {
    }

    public DbSet<User> Users { get; set; }
    public DbSet<Location> Locations { get; set; }
    public DbSet<Visit> Visits { get; set; }
  }
}
