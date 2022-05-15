export function getKeysArray(keys: string[]): string {
	keys = keys.filter((key) => typeof key === 'string');

	return keys.map((key) => `'${key}'`).join(', ');
}
