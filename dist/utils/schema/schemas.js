"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemas = void 0;
exports.schemas = [
    {
        name: { unique: true, type: 'Number', required: true },
        age: 'Number',
        vaf: { required: true, immutable: true },
        vabb: { required: true },
        as: { default: 'Hej' }
    },
    {
        vaf: { required: true, immutable: true },
        vabb: { required: true },
        as: { default: 'Hej' }
    },
    {
        age: 'Number'
    }
];
//# sourceMappingURL=schemas.js.map