"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getKeysArray = void 0;
function getKeysArray(keys) {
    keys = keys.filter((key) => typeof key === 'string');
    return keys.map((key) => `'${key}'`).join(', ');
}
exports.getKeysArray = getKeysArray;
//# sourceMappingURL=getKeysArray.js.map