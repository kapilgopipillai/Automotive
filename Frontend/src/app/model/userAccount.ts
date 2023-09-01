export class UserAccount{
    public userId: number;
    public userName: string;
    public password: string;
    public userProfile: string;

    constructor(userId: number, userName: string, password: string, userProfile:string){
        this.userId = userId;
        this.userName = userName;
        this.password = password;
        this.userProfile = userProfile;
    }
}