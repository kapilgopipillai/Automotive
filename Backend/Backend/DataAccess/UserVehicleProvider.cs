using Backend.DataAccess.Interface;
using Backend.Model;

namespace Backend.DataAccess
{
    public class UserVehicleProvider : IUserVehicleProvider
    {

        private readonly AutomotiveContext _context;
        public UserVehicleProvider(AutomotiveContext context)
        {
            _context = context;
        }
        public void AddUserVehicle(UserVehicle userVehicle)
        {
            try
            {
                _context.UserVehicles.Add(userVehicle);
                _context.SaveChanges();
            }
            catch(Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public List<UserVehicle> GetUserVehicleByUserId(int UserId)
        {
            try
            {
                List<UserVehicle> vehicle = _context.UserVehicles.Where(u => u.UserId == UserId).ToList();
                return vehicle;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}
