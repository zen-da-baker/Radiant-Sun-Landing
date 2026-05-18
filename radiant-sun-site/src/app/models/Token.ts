// Import helper functions
import { createTokenString } from "@/helpers/createTokenString";

export class Token {

    tokenId: string;

    expirationDate: string;

    status: boolean = false;

    constructor( ) {

        this.tokenId = createTokenString();

        const currentDate = new Date();

        currentDate.setDate( currentDate.getDate() + 14 );

        this.expirationDate = currentDate.toString();

    }

}