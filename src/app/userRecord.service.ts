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

    getComputerType(){
        return this.userProfile.computerType;
    }

    setCPUPref(type: string){
        this.userProfile.cpuPref = type;
    }

    getCPUPref(){
        return this.userProfile.cpuPref;
    }
}