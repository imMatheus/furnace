// math a collection name to a firestore path
export function getPath(collection: string): string {
	const lastLetter = collection.slice(-1);
	const docId =
		lastLetter === 's' ? `${collection.slice(0, -1)}Id` : `${collection}Id`;
	return `/${collection}/{${docId}}`;
}
