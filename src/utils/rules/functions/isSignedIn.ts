export function isSignedIn(): string {
	return `function isSignedIn() {\n\treturn request.auth != null;\n}`;
}
