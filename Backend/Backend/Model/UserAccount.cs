using System;
using System.Collections.Generic;

namespace Backend.Model;

public partial class UserAccount
{
    public int UserId { get; set; }

    public string UserName { get; set; } = null!;

    public string? Password { get; set; }

    public string? UserProfile { get; set; }
}
