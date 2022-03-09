using System;
using System.ComponentModel.DataAnnotations;

namespace gs_travel_app_api.Models.Requests
{
  public class CreateLocationRequest
  {
    [Required]
    public string Name { get; set; }

    [Required]
    public string Country { get; set; }

    [Required]
    public double Latitude { get; set; }

    [Required]
    public double Longitude { get; set; }
  }
}
