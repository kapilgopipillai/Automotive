using Backend.DataAccess;
using Backend.DataAccess.Interface;
using Backend.Model;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddCors();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle


var sqlConnectionString = builder.Configuration["ConnectionStrings:PostgreSqlConnectionString"];
builder.Services.AddDbContext<AutomotiveContext>(options => options.UseNpgsql(sqlConnectionString));

builder.Services.AddScoped<IUserAccountProvider, UserAccountProvider>();
builder.Services.AddScoped<IUserVehicleProvider, UserVehicleProvider>();
builder.Services.AddScoped<IVehicleServiceLogProvider, VehicleServiceLogProvider>();


builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(builder =>
{
    builder.AllowAnyOrigin()
           .AllowAnyMethod()
           .AllowAnyHeader();
});

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
