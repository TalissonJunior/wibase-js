import { IConfiguration } from "./interfaces/IConfiguration";
import { StorageService } from "./services/storage.service";

class App {

    constructor(config: IConfiguration) {
        if(!config.apiKey){
            throw new Error("config/wibase - 'apiKey' property is missing");
        }
        else if(!config.projectId){
            throw new Error("config/wibase - 'projectId' property is missing");
        }

        // Save the user configuration
        new StorageService().setConfiguration(config);
    }


}

export const initializeApp = App;