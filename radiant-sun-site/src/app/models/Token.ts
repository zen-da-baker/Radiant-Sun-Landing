// Import helper functions
import { createTokenString } from "@/helpers/createTokenString";

export class Token {

    tokenId: string;

    status: boolean = false;

    constructor( ) {

        this.tokenId = createTokenString();

    }

}