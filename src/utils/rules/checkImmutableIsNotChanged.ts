import { getKeysArray } from './getKeysArray';

export function checkImmutableIsNotChanged(keys: string[]): string {
	return `(!request.resource.data.diff(resource.data).affectedKeys().hasAny([${getKeysArray(
		keys
	)}]))`;
}
