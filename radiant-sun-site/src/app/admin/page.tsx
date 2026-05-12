// Import Next packages
import { redirect } from "next/navigation";

// Import components
import { LoginForm } from "@/page-components/admin/LoginForm"

// Import helper functions
import { escapeStrings } from "@/helpers/escapeStrings";

// Import models
import { Token } from "../models/Token";

/*
    This page is for the viewing of messages submitted to the website and 
    for the creation of blog posts.
*/
export default function Admin() {

    let loggedIn = false;

    async function handleLogin( username: string, password: string ): Promise<string> {

        "use server"

        // Input strings escaped
        username = escapeStrings( username );

        password = escapeStrings( password );

        console.log( username );

        console.log( password );

        // If the credentials are a match, return true, otherwise, return false

        // redirect("/");

        const token = "token";

        return token;

    }

    if ( !loggedIn ) {

        return (
            <main>

                <h1>Admin</h1>

                <LoginForm handleLogin={ handleLogin } />

            </main>
        )

    }

    return (
        <main>

            <h1>Admin</h1>

        </main>
    )


}