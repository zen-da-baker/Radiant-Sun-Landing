"use client"

// Import models
import { Token } from "@/models/Token";

// The component form for the client side
export function LoginForm( 
    { handleLogin } 
    : 
    { handleLogin: ( username: string, password: string ) => Promise<string> } 
) {

    // Local variables for storing the input values
    let username: string = "";

    let password: string = "";

    // The local variable update functions
    function usernameHandler( event: any ) {

        username = event.target.value;

    }

    function passwordHandler( event: any ) {

        password = event.target.value;

    }

    // The submission function that is trigged when the login button is pressed
    async function handleLoginSubmission() {

        // Client side input validation
        if ( username === "" || password === "" ) {

            return;

        }

        // Trigger the server function which is a network request
        const token = await handleLogin( username, password );

        console.log( token );

    }

    return (
        <div>

            <h2>Login</h2>

            <label>
                Username
                <input type="text" placeholder="Username..." onChange={ usernameHandler } />

            </label>

            <label>
                Password
                <input type="password" placeholder="Password..." onChange={ passwordHandler } />

            </label>

            <button onClick={ handleLoginSubmission }>Login</button>

        </div>
    )
    
}