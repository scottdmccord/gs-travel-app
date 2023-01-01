using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using gs_travel_app_api.Models;

namespace gs_travel_app_api.Services.Interfaces
{
  public interface IVisitService
  {
    public Task<IEnumerable<Visit>> GetAll();

    public Task<IEnumerable<Visit>> Create(Visit visit);
  }
}
