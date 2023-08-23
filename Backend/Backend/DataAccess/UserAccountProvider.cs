using Backend.DataAccess.Interface;
using Backend.Model;

namespace Backend.DataAccess
{
    public class UserAccountProvider : IUserAccountProvider
    {

        private readonly AutomotiveContext _context;
        public UserAccountProvider(AutomotiveContext context)
        {
            _context = context;
        }

        public void AddUser(UserAccount userAccount)
        {
            try
            {
                _context.UserAccounts.Add(userAccount);
                _context.SaveChanges();
            }catch(Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public UserAccount GetUserDetails(int userId)
        {
            try
            {
               return _context.UserAccounts.FirstOrDefault(x => x.UserId == userId);
            }catch(Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public int Login(string username, string password)
        {
            try
            {
                UserAccount user = _context.UserAccounts.FirstOrDefault(x => x.UserName == username && x.Password == password);
                return user.UserId;
            }catch(Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public void Logout()
        {
            throw new NotImplementedException();
        }
    }
}
