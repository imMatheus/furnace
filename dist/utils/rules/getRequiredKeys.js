"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRequiredKeys = void 0;
function getRequiredKeys(schema) {
    return Object.keys(schema).filter((key) => {
        const val = schema[key];
        return typeof val === 'string' ? true : val.required;
    });
}
exports.getRequiredKeys = getRequiredKeys;
//# sourceMappingURL=getRequiredKeys.js.map