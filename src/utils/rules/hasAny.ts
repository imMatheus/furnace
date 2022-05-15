import { getKeysArray } from './getKeysArray';

export function hasAny(keys: string[]): string {
	return `request.resource.data.diff(resource.data).affectedKeys().hasAny([${getKeysArray(
		keys
	)}])`;
}
