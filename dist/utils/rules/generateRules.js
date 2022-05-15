"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRules = void 0;
const index_1 = require("./index");
const schemas_1 = require("@utils/schema/schemas");
const keysMatchExact_1 = require("./keysMatchExact");
const hasAny_1 = require("./hasAny");
const getRequiredKeys_1 = require("./getRequiredKeys");
const getImmutableKeys_1 = require("./getImmutableKeys");
function generateRules() {
    let init = ``;
    schemas_1.schemas.forEach((schema) => {
        const requiredKeys = (0, getRequiredKeys_1.getRequiredKeys)(schema);
        const immutableKeys = (0, getImmutableKeys_1.getImmutableKeys)(schema);
        const rules = [];
        rules.push(`allow create: if ${(0, keysMatchExact_1.keysMatchExact)(requiredKeys)};`);
        rules.push(`allow update: if !${(0, hasAny_1.hasAny)(immutableKeys)};`);
        rules.push(`allow delete: if request.auth != null;`);
        rules.push(`allow read: if request.auth != null;`);
        init += `\t\tmatch ${(0, index_1.getPath)('users')} {\n\t\t\t${rules
            .map((rule) => `${rule}\n`)
            .join(`\t\t\t`)}\n\t\t}\n`;
    });
    init = `rules_version = '2';
service cloud.firestore {
\tmatch /databases/{database}/documents {
${init}
\t}
}`;
    console.log(init);
}
exports.generateRules = generateRules;
//# sourceMappingURL=generateRules.js.map