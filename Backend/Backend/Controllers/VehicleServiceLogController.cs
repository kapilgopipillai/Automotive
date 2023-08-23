using Backend.DataAccess;
using Backend.DataAccess.Interface;
using Backend.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("api/")]
    [ApiController]
    public class VehicleServiceLogController : ControllerBase
    {
        private readonly IVehicleServiceLogProvider _vehicleServiceLogProvider;

        public VehicleServiceLogController(IVehicleServiceLogProvider vehicleServiceLogProvider)
        {
            _vehicleServiceLogProvider = vehicleServiceLogProvider;
        }

        [HttpPost("AddVehicleServiceLog")]
        public void AddVehicleServiceLo([FromBody] VehicleServiceLog vehicleServiceLog)
        {
            _vehicleServiceLogProvider.AddVehicleServiceLog(vehicleServiceLog);
        }

        [HttpGet("GetVehicleServiceLogByVehicleId/{vehicleId}")]
        public List<VehicleServiceLog> GetVehicleServiceLogByVehicleId(int vehicleId)
        {
            return _vehicleServiceLogProvider.GetVehicleServiceLogByVehicleId(vehicleId);
        }
    }
}
