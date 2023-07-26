import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
let SExperienciaService = class SExperienciaService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.expURL = environment.URL + 'experiencia/';
    }
    lista() {
        return this.httpClient.get(this.expURL + 'list');
    }
    detail(id) {
        return this.httpClient.get(this.expURL + `detail/${id}`);
    }
    save(experiencia) {
        return this.httpClient.post(this.expURL + 'create', experiencia);
    }
    update(id, experiencia) {
        return this.httpClient.put(this.expURL + `update/${id}`, experiencia);
    }
    delete(id) {
        return this.httpClient.delete(this.expURL + `delete/${id}`);
    }
};
SExperienciaService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], SExperienciaService);
export { SExperienciaService };
//# sourceMappingURL=Sexperiencia.service.js.map