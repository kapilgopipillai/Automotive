using Backend.DataAccess;
using Backend.DataAccess.Interface;
using Backend.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("api/")]
    [ApiController]
    public class UserVehicleController : ControllerBase
    {
        private readonly IUserVehicleProvider _userVehicleProvider;

        public UserVehicleController(IUserVehicleProvider userVehicleProvider)
        {
            _userVehicleProvider = userVehicleProvider;
        }

        [HttpPost("AddUserVehicle")]
        public void AddUserVehicle([FromBody] UserVehicle userVehicle)
        {
            _userVehicleProvider.AddUserVehicle(userVehicle);
        }

        [HttpGet("GetUserVehicleByUserId/{userId}")]
        public List<UserVehicle> GetUserVehicleByUserId(int userId)
        {
            return _userVehicleProvider.GetUserVehicleByUserId(userId);
        }
    }
}
