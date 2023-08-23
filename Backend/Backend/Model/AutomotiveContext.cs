using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Backend.Model;

public partial class AutomotiveContext : DbContext
{
    public AutomotiveContext()
    {
    }

    public AutomotiveContext(DbContextOptions<AutomotiveContext> options)
        : base(options)
    {
    }

    public virtual DbSet<UserAccount> UserAccounts { get; set; }

    public virtual DbSet<UserVehicle> UserVehicles { get; set; }

    public virtual DbSet<VehicleServiceLog> VehicleServiceLogs { get; set; }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<UserAccount>(entity =>
        {
            entity.HasKey(e => e.UserId);

            entity.ToTable("UserAccount");

            entity.Property(e => e.Password).HasMaxLength(50);
            entity.Property(e => e.UserName).HasMaxLength(50);
            entity.Property(e => e.UserProfile).HasMaxLength(50);
        });

        modelBuilder.Entity<UserVehicle>(entity =>
        {
            entity.HasKey(e => e.VehicleId);

            entity.ToTable("User_Vehicle");

            entity.Property(e => e.Description).HasMaxLength(50);
            entity.Property(e => e.Model).HasMaxLength(50);
            entity.Property(e => e.Name).HasMaxLength(50);
            entity.Property(e => e.Rcnumber)
                .HasMaxLength(50)
                .HasColumnName("RCNumber");
            entity.Property(e => e.Video).HasMaxLength(50);
        });

        modelBuilder.Entity<VehicleServiceLog>(entity =>
        {
            entity.HasKey(e => e.ServiceId);

            entity.ToTable("Vehicle_ServiceLog");

            entity.Property(e => e.DueDate).HasColumnType("date");
            entity.Property(e => e.LastDate).HasColumnType("date");
            entity.Property(e => e.ServiceDetails).HasMaxLength(50);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
