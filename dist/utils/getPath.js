"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPath = void 0;
// math a collection name to a firestore path
function getPath(collection) {
    const lastLetter = collection.slice(-1);
    const docId = lastLetter === 's' ? `${collection.slice(0, -1)}Id` : `${collection}Id`;
    return `/${collection}/{${docId}}`;
}
exports.getPath = getPath;
//# sourceMappingURL=getPath.js.map