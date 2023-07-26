import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
let PersonaService = class PersonaService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.URL = environment.URL + 'personas/';
    }
    list() {
        return this.httpClient.get(this.URL + 'list');
    }
    detail(id) {
        return this.httpClient.get(this.URL + `detail/${id}`);
    }
    update(id, persona) {
        return this.httpClient.put(this.URL + `update/${id}`, persona);
    }
};
PersonaService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], PersonaService);
export { PersonaService };
//# sourceMappingURL=persona.service.js.map