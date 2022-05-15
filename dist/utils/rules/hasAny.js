"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasAny = void 0;
const getKeysArray_1 = require("./getKeysArray");
function hasAny(keys) {
    return `request.resource.data.diff(resource.data).affectedKeys().hasAny([${(0, getKeysArray_1.getKeysArray)(keys)}])`;
}
exports.hasAny = hasAny;
//# sourceMappingURL=hasAny.js.map