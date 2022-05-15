import { SchemaOptions } from './SchemaOptions';

export type SchemaProps = {
	// any key with type of Options
	[key: string]: SchemaOptions;
};
