// Import components
import { LoginForm } from "@/page-components/admin/LoginForm";

// Import helper functions
import { escapeStrings } from "@/helpers/escapeStrings";

// Import data models
import { Token } from "@/models/Token";

export default function Login() {

    async function handleLogin( username: string ): Promise<string> {
    
            "use server"
    
            // Input strings escaped
            username = escapeStrings( username );    
    
            console.log( username );
    
            
    
            // If the credentials are a match, return true, otherwise, return false
    
            // redirect("/");
    
            // Create the token string to be issued to the user
    
            const token = "token";
    
            // Store the token string on the server for validation
    
            return token;
    
        }

    return (
        <main>

            <h1>Login</h1>

            <LoginForm handleLogin={ handleLogin } />

        </main>
    )
}