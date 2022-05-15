"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasOnly = void 0;
const getKeysArray_1 = require("./getKeysArray");
function hasOnly(keys) {
    return `request.resource.data.keys().hasOnly([${(0, getKeysArray_1.getKeysArray)(keys)}])`;
}
exports.hasOnly = hasOnly;
//# sourceMappingURL=hasOnly.js.map