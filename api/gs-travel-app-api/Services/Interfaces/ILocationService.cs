using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using gs_travel_app_api.Models;

namespace gs_travel_app_api.Services
{
  public interface ILocationService
  {
    public Task<IEnumerable<Location>> GetAll();

    public Task<IEnumerable<Location>> Create(Location location);
  }
}
