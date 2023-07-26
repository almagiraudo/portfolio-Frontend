import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
let EducacionService = class EducacionService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.eduURL = environment.URL + 'educacion/';
    }
    list() {
        return this.httpClient.get(this.eduURL + 'list');
    }
    detail(id) {
        return this.httpClient.get(this.eduURL + `detail/${id}`);
    }
    save(educacion) {
        return this.httpClient.post(this.eduURL + 'create', educacion);
    }
    update(id, educacion) {
        return this.httpClient.put(this.eduURL + `update/${id}`, educacion);
    }
    delete(id) {
        return this.httpClient.delete(this.eduURL + `delete/${id}`);
    }
};
EducacionService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], EducacionService);
export { EducacionService };
//# sourceMappingURL=educacion.service.js.map