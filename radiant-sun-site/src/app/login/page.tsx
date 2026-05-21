// Import components
import { LoginForm } from "@/page-components/admin/LoginForm";

// Import helper functions
import { escapeStrings } from "@/helpers/escapeStrings";

export default function Login() {

    async function handleLogin( username: string, password: string ): Promise<string> {
    
            "use server"
    
            // Input strings escaped
            username = escapeStrings( username );
    
            password = escapeStrings( password );
    
            console.log( username );
    
            console.log( password );
    
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