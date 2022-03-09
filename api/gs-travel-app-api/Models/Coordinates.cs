using System;
using System.ComponentModel.DataAnnotations;

namespace gs_travel_app_api.Models
{
  public struct Coordinates
  {
    [Required]
    public double Latitude { get; set; }

    [Required]
    public double Longitudue { get; set; }
  }
}
