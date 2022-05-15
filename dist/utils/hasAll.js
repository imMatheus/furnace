"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasAll = void 0;
const getKeysArray_1 = require("./getKeysArray");
function hasAll(keys) {
    return `request.resource.data.keys().hasAll([${(0, getKeysArray_1.getKeysArray)(keys)}])`;
}
exports.hasAll = hasAll;
//# sourceMappingURL=hasAll.js.map