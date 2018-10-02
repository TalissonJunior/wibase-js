import { IConfiguration } from "../interfaces/IConfiguration";
import { LocalStorageManager } from "../utilities/storage-manager";

export class StorageService extends LocalStorageManager {

    public setConfiguration(config: IConfiguration): void {
        this.add('W!b@s&-c*Nf1G', JSON.stringify(config));
    }

    public getConfiguration(): IConfiguration {
        var response = this.get('W!b@s&-c*Nf1G');

        if (response) {
            return <IConfiguration>JSON.parse(response);
        }
        return null;
    }

}
