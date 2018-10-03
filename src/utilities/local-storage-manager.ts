import { environment } from "../environment/environment";

/**
 * @description This class will use the same object and store it on
 * localstorage
 */
export class LocalStorageManager {

    constructor() {}

    public static add(name: string, item: any) {

        var data:any = localStorage.getItem(environment.keys.storage);

        if (data) {
            data = JSON.parse(data);
            data[name] = item;
        }
        else {
            data = {};
            data[name] = item;
        }

        localStorage.setItem(environment.keys.storage, JSON.stringify(data));
    }

    public static get(name: string) {

        var data:any = localStorage.getItem(environment.keys.storage);

        if (data) {
            return JSON.parse(data)[name];
        }

        return null;
    }

    public static remove(name: string) {
        var data:any = localStorage.getItem(environment.keys.storage);

        if (data) {
            data = JSON.parse(data);
            delete data[name];

            localStorage.setItem(environment.keys.storage, JSON.stringify(data));
        }
    }

}