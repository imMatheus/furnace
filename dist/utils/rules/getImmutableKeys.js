"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImmutableKeys = void 0;
function getImmutableKeys(schema) {
    return Object.keys(schema).filter((key) => {
        const val = schema[key];
        return typeof val === 'string' ? false : val.immutable;
    });
}
exports.getImmutableKeys = getImmutableKeys;
//# sourceMappingURL=getImmutableKeys.js.map