using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace gs_travel_app_api.Models
{
  public class User
  {
    [Key]
    public int Id { get; set; }

    [Required]
    public string email { get; set; }

    [Required]
    public string password { get; set; }

    [Required]
    public string FirstName { get; set; }

    [Required]
    public string LastName { get; set; }
  }
}
