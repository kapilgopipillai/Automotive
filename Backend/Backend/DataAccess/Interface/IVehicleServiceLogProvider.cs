using Backend.Model;

namespace Backend.DataAccess.Interface
{
    public interface IVehicleServiceLogProvider
    {
        public List<VehicleServiceLog> GetVehicleServiceLogByVehicleId(int vehicleId);

        public void AddVehicleServiceLog(VehicleServiceLog vehicleServiceLog);
    }
}
