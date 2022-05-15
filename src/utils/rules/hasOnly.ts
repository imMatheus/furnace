import { getKeysArray } from './getKeysArray';

export function hasOnly(keys: string[]): string {
	return `request.resource.data.keys().hasOnly([${getKeysArray(keys)}])`;
}
