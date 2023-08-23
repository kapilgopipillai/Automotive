using System;
using System.Collections.Generic;

namespace Backend.Model;

public partial class VehicleServiceLog
{
    public int ServiceId { get; set; }

    public int VehicleId { get; set; }

    public string? ServiceDetails { get; set; }

    public DateTime? LastDate { get; set; }

    public DateTime? DueDate { get; set; }
}
