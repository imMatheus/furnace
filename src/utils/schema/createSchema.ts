import { SchemaProps } from './types/SchemaProps';

export function createSchema(props: SchemaProps) {
	console.log(props);
}

// createSchema({ name: { unique: true, type: 'Number' } });
