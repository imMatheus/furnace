import 'module-alias/register';
import { getPath } from '@utils/rules/getPath';
import { checkImmutableIsNotChanged } from '@utils/rules/checkImmutableIsNotChanged';
import { keysMatchExact } from '@utils/rules/keysMatchExact';
import { isSignedIn } from '@utils/rules/functions/isSignedIn';

console.log(getPath('users'));
console.log(checkImmutableIsNotChanged(['name', 'age']));
console.log(keysMatchExact(['name', 'age']));
console.log(isSignedIn());
