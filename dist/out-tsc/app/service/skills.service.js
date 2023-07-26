import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
let SkillsService = class SkillsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.skillsURL = environment.URL + 'skills/';
    }
    lista() {
        return this.httpClient.get(this.skillsURL + 'list');
    }
    detail(id) {
        return this.httpClient.get(this.skillsURL + `detail/${id}`);
    }
    save(skills) {
        return this.httpClient.post(this.skillsURL + 'create', skills);
    }
    update(id, skills) {
        return this.httpClient.put(this.skillsURL + `update/${id}`, skills);
    }
    delete(id) {
        return this.httpClient.delete(this.skillsURL + `delete/${id}`);
    }
};
SkillsService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], SkillsService);
export { SkillsService };
//# sourceMappingURL=skills.service.js.map