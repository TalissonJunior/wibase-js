import { environment } from "../environment/environment";

export class RestService {
    private baseUrl: string;

    constructor() {
        this.baseUrl = environment.apiUrl;
    }

    protected post(model: any): Promise<any> {

        var request = new Request(this.baseUrl, {
            method: 'POST',
            body: JSON.stringify(model),
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json; charset=utf-8"
            }
        });

        return fetch(request).then((response) => {
            return response.json();
        });
    }
}