using Backend.DataAccess.Interface;
using Backend.Model;

namespace Backend.DataAccess
{
    public class VehicleServiceLogProvider : IVehicleServiceLogProvider
    {

        private readonly UserVehicleContext _context;
        public VehicleServiceLogProvider(UserVehicleContext context)
        {
            _context = context;
        }
        public void AddVehicleServiceLog(VehicleServiceLog vehicleServiceLog)
        {
            try
            {
                _context.VehicleServiceLogs.Add(vehicleServiceLog);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public List<VehicleServiceLog> GetVehicleServiceLogByVehicleId(int vehicleId)
        {
            try
            {
                List<VehicleServiceLog> vehicleService = _context.VehicleServiceLogs.Where(u => u.VehicleId == vehicleId).ToList();
                return vehicleService;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}
