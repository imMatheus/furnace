import { SchemaTypes } from './SchemaTypes';

export type SchemaOptions =
	| {
			type?: SchemaTypes;
			unique?: boolean;
			required?: boolean;
			immutable?: boolean;
			default?: any;
	  }
	| SchemaTypes;
