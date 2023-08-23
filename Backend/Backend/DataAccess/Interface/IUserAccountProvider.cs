using Backend.Model;

namespace Backend.DataAccess.Interface
{
    public interface IUserAccountProvider
    {
        public int Login(string username, string password);
        public void Logout();
        public UserAccount GetUserDetails(int userId);
        public void AddUser(UserAccount userAccount);
    }
}
