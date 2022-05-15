"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const getPath_1 = require("@utils/rules/getPath");
const checkImmutableIsNotChanged_1 = require("@utils/rules/checkImmutableIsNotChanged");
const keysMatchExact_1 = require("@utils/rules/keysMatchExact");
const isSignedIn_1 = require("@utils/rules/functions/isSignedIn");
console.log((0, getPath_1.getPath)('users'));
console.log((0, checkImmutableIsNotChanged_1.checkImmutableIsNotChanged)(['name', 'age']));
console.log((0, keysMatchExact_1.keysMatchExact)(['name', 'age']));
console.log((0, isSignedIn_1.isSignedIn)());
//# sourceMappingURL=index.js.map