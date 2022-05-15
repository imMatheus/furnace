import { SchemaProps } from '@utils/schema/types/SchemaProps';

export function getRequiredKeys(schema: SchemaProps): string[] {
	return Object.keys(schema).filter((key) => {
		const val = schema[key];
		return typeof val === 'string' ? true : val.required;
	});
}
