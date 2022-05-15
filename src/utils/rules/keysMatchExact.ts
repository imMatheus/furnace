import { hasAll } from '@utils/rules/hasAll';
import { hasOnly } from '@utils/rules/hasOnly';

export function keysMatchExact(keys: string[]): string {
	return `(${hasAll(keys)} && ${hasOnly(keys)})`;
}
