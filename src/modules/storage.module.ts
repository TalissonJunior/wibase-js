import { Subject } from "rxjs";
import { StorageOnEvent } from "../enum/storage-on-event.enum";
import { BaseErrorResponseCode } from "../enum/base-error-response-code.enum";
import { RestService } from "../services/rest.service";

export class Storage extends RestService {
    _obs: any = {};

    constructor() { super(); }

    /**
     * @description Refers to a table or collection name
     * depending on storage that the user is connected
     * @param collectionName string
     */
    public ref(collectionName: string) {

        return {

            // Adds to the table or collection
            push: (value: any): Promise<any> => {

                value.collectionName = collectionName;

                return this.post(value).then((response) => {
                    this._obs[collectionName].next(response);
                    return response;
                })
                    .catch((error) => {
                        this._obs[collectionName].error(error);
                        return;
                    });

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

                var exampleSocket = new WebSocket("ws://localhost:3000/wibase?token=ticketin-Zazsde1221-asda4racz5674");
                exampleSocket.onopen = function (event) {
                    exampleSocket.send("Here's some text that the server is urgently awaiting!"); 
                };

                // fired when using push, remove or update methods
                if (eventName == StorageOnEvent.VALUE) {

                    if (!this._obs[collectionName]) {
                        this._obs[collectionName] = new Subject();
                    }

                    this._obs[collectionName].subscribe(
                        (snapshot: any) => callback(snapshot),
                        (error: any) => callback(error)
                    );
                }
                else {
                    throw new Error(`${BaseErrorResponseCode.storage} - Couldn´t attach to the event called ${eventName}`);
                }
            }

        };
    }

}
