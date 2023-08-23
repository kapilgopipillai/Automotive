using System;
using System.Collections.Generic;

namespace Backend.Model;

public partial class UserVehicle
{
    public int VehicleId { get; set; }

    public int UserId { get; set; }

    public string? Name { get; set; }

    public string? Description { get; set; }

    public string? Rcnumber { get; set; }

    public string? Model { get; set; }

    public string? Video { get; set; }
}
