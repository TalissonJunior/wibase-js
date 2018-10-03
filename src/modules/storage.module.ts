import { Subject } from "rxjs";
import { StorageOnEvent } from "../enum/storage-on-event.enum";
import { BaseErrorResponseCode } from "../enum/base-error-response-code.enum";

export class Storage {
    _obs: any = {};

    constructor() { }

    /**
     * @description Refers to a table or collection name
     * depending on storage that the user is connected
     * @param collectionName string
     */
    public ref(collectionName: string) {

        return {

            // Adds to the table or collection
            push: (value: any) => {
                this._obs[collectionName].next(value);
            },

            // Removes from the table or collection
            remove: (key: string) => {
                this._obs[collectionName].next(key);
            },

            // Updates a table or collection
            update: (key: string, value: any) => {
                console.log(collectionName, 'update');
            },

            // Listen for changes
            on: (eventName: StorageOnEvent, callback: Function): void => {

                // fired when using push, remove or update methods
                if (eventName == StorageOnEvent.VALUE) {

                    if (!this._obs[collectionName]) {
                        this._obs[collectionName] = new Subject();
                    }

                    if (callback) {
                        this._obs[collectionName].subscribe(
                            (snapshot: any) => callback(snapshot),
                            (error: any) => callback(error)
                        );
                    }
                }
                else{
                    throw new Error(`${BaseErrorResponseCode.storage} - Couldn´t attach to the event called ${eventName}`);
                }
            }

        };
    }

}
