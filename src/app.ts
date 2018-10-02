import { IConfiguration } from "./interfaces/IConfiguration";
import { Storage } from "./modules";
import { LocalStorageManager } from "./utilities/local-storage-manager";
import { settings } from "./settings";

class App {

    constructor(config: IConfiguration) {

        if (!config.apiKey) {
            throw new Error("config/wibase - 'apiKey' property is missing");
        }
        else if (!config.projectId) {
            throw new Error("config/wibase - 'projectId' property is missing");
        }

        // Save the user configuration
        LocalStorageManager.add(settings.keys.configuration, config);
    }

    public storage() {
        return new Storage();
    }
}

export const initializeApp = App;