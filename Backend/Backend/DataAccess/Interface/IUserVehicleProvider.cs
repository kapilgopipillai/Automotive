using Backend.Model;

namespace Backend.DataAccess.Interface
{
    public interface IUserVehicleProvider
    {
        public List<UserVehicle> GetUserVehicleByUserId(int UserId);

        public void AddUserVehicle(UserVehicle userVehicle);
    }
}
