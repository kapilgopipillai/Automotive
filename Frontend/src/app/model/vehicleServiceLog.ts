export class VehicleServiceLog{
    public serviceId: number;
    public vehicleId: number;
    public serviceDetails: string;
    public LastDate: Date;
    public DueDate: Date;

    constructor(serviceId: number, vehicleId: number, serviceDetails: string, LastDate: Date, DueDate:Date){
        this.serviceId = serviceId;
        this.vehicleId = vehicleId;
        this.serviceDetails = serviceDetails;
        this.LastDate = LastDate;
        this.DueDate = DueDate;
    }
}

export interface IVehicleServiceLog{
    serviceId: number;
    vehicleId: number;
    serviceDetails: string;
    LastDate: Date;
    DueDate: Date;
}