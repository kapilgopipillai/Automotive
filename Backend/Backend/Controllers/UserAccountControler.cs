using Backend.DataAccess.Interface;
using Backend.Model;
using Microsoft.AspNetCore.Mvc;


namespace Backend.Controllers
{
    [Route("api/")]
    [ApiController]
    public class UserAccountControler : ControllerBase
    {
        private readonly IUserAccountProvider _userAccountProvider;

        public UserAccountControler(IUserAccountProvider userAccountProvider)
        {
            _userAccountProvider = userAccountProvider;
        }

        [HttpGet("GetUserDetails/{userId}")]
        public UserAccount GetUserDetails(int userId)
        {
            return _userAccountProvider.GetUserDetails(userId);
        }

        [HttpPost("AddUser")]
        public void AddUser([FromBody] UserAccount userAccount)
        {
            _userAccountProvider.AddUser(userAccount);
        }

        [HttpGet("login/{username}/{password}")]
        public int login(string username, string password) 
        { 
            return _userAccountProvider.Login(username, password);
        }
    }
}
