"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keysMatchExact = void 0;
const hasAll_1 = require("@utils/rules/hasAll");
const hasOnly_1 = require("@utils/rules/hasOnly");
function keysMatchExact(keys) {
    return `${(0, hasAll_1.hasAll)(keys)} && ${(0, hasOnly_1.hasOnly)(keys)}`;
}
exports.keysMatchExact = keysMatchExact;
//# sourceMappingURL=keysMatchExact.js.map