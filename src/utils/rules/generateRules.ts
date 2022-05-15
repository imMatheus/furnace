import { getPath } from './index';
import { schemas } from '@utils/schema/schemas';
import { SchemaProps } from '@utils/schema/types/SchemaProps';
import { keysMatchExact } from './keysMatchExact';
import { hasAny } from './hasAny';
import { getRequiredKeys } from './getRequiredKeys';
import { getImmutableKeys } from './getImmutableKeys';

export function generateRules() {
	let init = ``;

	schemas.forEach((schema) => {
		const requiredKeys = getRequiredKeys(schema);
		const immutableKeys = getImmutableKeys(schema);
		const rules: string[] = [];
		rules.push(`allow create: if ${keysMatchExact(requiredKeys)};`);
		rules.push(`allow update: if !${hasAny(immutableKeys)};`);
		rules.push(`allow delete: if request.auth != null;`);
		rules.push(`allow read: if request.auth != null;`);

		init += `\t\tmatch ${getPath('users')} {\n\t\t\t${rules
			.map((rule) => `${rule}\n`)
			.join(`\t\t\t`)}\n\t\t}\n`;
	});

	init = `rules_version = '2';
service cloud.firestore {
\tmatch /databases/{database}/documents {
${init}
\t}
}`;

	console.log(init);
}
