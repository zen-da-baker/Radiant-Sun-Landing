"user client"

import { handleLogin } from "@/helpers/handleLogin"

export function LoginForm() {

    return (
        <div>

            <h2>Login</h2>

            <button onClick={ handleLogin }>Login</button>

        </div>
    )
    
}