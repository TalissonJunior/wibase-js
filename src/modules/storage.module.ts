export class Storage {

    constructor(){}

    /**
     * @description Refers to a table or collection name
     * depending on storage that the user is connected
     * @param collectionName string
     */
    public ref(collectionName: string) {
        
        return {

            // Adds to the table or collection
            push: () => {
                console.log(collectionName, 'add');
            },

            // Removes from the table or collection
            remove: () => {
                console.log(collectionName, 'remove');
            },

            // Updates a table or collection
            update: () => {
                console.log(collectionName, 'update');
            },

            // Listen for changes -> fired when using push, remove or update methods
            on: (event: StorageEvent) => {
                console.log(event);
            }
        };
    }

}
