using System;
using System.ComponentModel.DataAnnotations;

namespace gs_travel_app_api.Models
{
  public class Location
  {
    [Key]
    public int Id { get; set; }

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
