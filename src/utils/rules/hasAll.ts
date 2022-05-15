import { getKeysArray } from './getKeysArray';

export function hasAll(keys: string[]): string {
	return `request.resource.data.keys().hasAll([${getKeysArray(keys)}])`;
}
