import { settings } from "../settings";


export class LocalStorageManager {
    private data: any;
    private storageKey = settings.keys.storage;

    constructor() {
    }

    protected add(name: string, item: any) {

        this.data = localStorage.getItem(this.storageKey);

        if (this.data) {
            this.data = JSON.parse(this.data);
            this.data[name] = item;
        }
        else {
            this.data = {};
            this.data[name] = item;
        }

        localStorage.setItem(this.storageKey, JSON.stringify(this.data));
    }

    protected get(name: string) {

        this.data = localStorage.getItem(this.storageKey);

        if (this.data) {
            return JSON.parse(this.data)[name];
        }

        return null;
    }

    protected remove(name: string) {
        this.data = localStorage.getItem(this.storageKey);

        if (this.data) {
            this.data = JSON.parse(this.data);
            delete this.data[name];

            localStorage.setItem(this.storageKey, JSON.stringify(this.data));
        }
    }

}