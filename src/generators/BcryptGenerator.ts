import {hashSync} from "bcryptjs";

export function generateBcrypt(input: string | undefined): string {
    if(input === undefined) {
        return '';
    }

    return hashSync(input);
}
