export class userProfile {
    public computerType: string;
    public cpuPreference: string;
    public gpuPreference: string;
    public ramPreference: number;
    
    constructor(computerType: string, cpuPreference: string, gpuPreference: string, ramPreference: number){
        this.computerType = computerType;
        this.cpuPreference = cpuPreference;
        this.gpuPreference = gpuPreference;
        this.ramPreference = ramPreference;
    }
}