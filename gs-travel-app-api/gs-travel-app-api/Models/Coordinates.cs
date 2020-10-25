using System;
using System.ComponentModel.DataAnnotations;

namespace gs_travel_app_api.Models
{
  public class Coordinates
  {
    [Required]
    public double Latitude { get; set; }

    [Required]
    public double Longitudue { get; set; }
  }
}
