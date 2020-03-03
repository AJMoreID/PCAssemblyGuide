import { Injectable } from "@angular/core";

@Injectable()

export class UserRecordService {
    storageTemplate = {
        computerType: "computerType",
        cpuBrand: "cpuBrand",
        cpuId: "cpuId",
        gpuId: "gpuId",
        ramId: "ramId",
        storageId: "storageId",
        mobId: "mobId",
        powerSupplyId: "powerSupplyId",
        caseId: "caseId"
    };

    public userProfile = {};

    setUserData(dataItemName:string, dataItemValue: any){
        this.userProfile[dataItemName] = dataItemValue;
    }

    getUserData(dataItemName: string){
        return this.userProfile[dataItemName];
    }
}