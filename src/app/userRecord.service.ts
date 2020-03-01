import { Injectable } from "@angular/core";

@Injectable()

export class UserRecordService {
    userProfile = {
      computerType: "",
      cpuPref: ""
    }

    setComputerType(type:string){
        this.userProfile.computerType = type;
    }

    setCPUPref(type: string){
        this.userProfile.cpuPref = type;
    }

    getComputerType(){
        return this.userProfile.computerType;
    }
}