import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// type PcAssembly
export interface PcAssembly {
    id: boolean;
    computerType: string;
    cpuBrand: string;
    cpuId: number;
    gpuId: number;
    ramId: number;
  }

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
    private helloWorldUrl: string = 'http://localhost:8080/hello';
    private pcAssemblyUrl: string = 'http://localhost:8080/pcassembly';
    private allPcsUrl: string = 'http://localhost:8080/allpcs';

    constructor(private http: HttpClient) { }

    setUserData(dataItemName:string, dataItemValue: any){
        this.userProfile[dataItemName] = dataItemValue;
    }

    getUserData(dataItemName: string){
        return this.userProfile[dataItemName];
    }

    // --------------------------------
    // api methods
    // --------------------------------
    // just for testing if api is working
    public getHelloWorld(): Observable<any> {
        return this.http.get(this.helloWorldUrl, {responseType: 'text'});
    }

    // save all selected pc assembly
    public savePcAssemblyOptions(pcassembly: {}): Observable<any> {
        return this.http.post(this.pcAssemblyUrl, pcassembly);
        // or return this.http.post<PcAssembly>(this.pcAssemblyUrl, pcassembly);
    }
    
    // get all pcs info that already saved
    public getAllPcsInfo(): Observable<any> {
        return this.http.get(this.allPcsUrl, {responseType: 'json'});
        // or return this.http.get<any>(this.allPcsUrl);
    }
}