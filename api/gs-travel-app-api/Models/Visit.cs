using System;
using System.ComponentModel.DataAnnotations;

namespace gs_travel_app_api.Models
{
  public class Visit
  {
    [Key]
    public int Id { get; set; }

    [Required]
    public int UserId { get; set; }

    [Required]
    public int LocationId { get; set; }

    [Required]
    public bool DidVisit { get; set; }
  }
}
