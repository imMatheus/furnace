"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkImmutableIsNotChanged = void 0;
const getKeysArray_1 = require("./getKeysArray");
function checkImmutableIsNotChanged(keys) {
    return `(!request.resource.data.diff(resource.data).affectedKeys().hasAny([${(0, getKeysArray_1.getKeysArray)(keys)}]))`;
}
exports.checkImmutableIsNotChanged = checkImmutableIsNotChanged;
//# sourceMappingURL=checkImmutableIsNotChanged.js.map