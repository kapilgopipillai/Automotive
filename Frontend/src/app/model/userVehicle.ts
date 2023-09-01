export class UserVehicle{
    public vehicleId: number;
    public userId: number;
    public name: string;
    public description: string;
    public rcnumber: string;
    public model: string;
    public video: string;

    constructor(vehicleId: number, userId: number, name: string, description: string, rcnumber:string, model: string, video: string){
        this.vehicleId = vehicleId;
        this.userId = userId;
        this.name = name;
        this.description = description;
        this.rcnumber = rcnumber;
        this.model = model;
        this.video = video;
    }
}