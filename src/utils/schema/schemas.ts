import { SchemaProps } from './types/SchemaProps';

export let schemas: SchemaProps[] = [
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
