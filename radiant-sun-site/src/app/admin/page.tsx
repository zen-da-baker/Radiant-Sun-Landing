import { LoginForm } from "@/page-components/admin/LoginForm"

/*
    This page is for the viewing of messages submitted to the website and 
    for the creation of blog posts.
*/
export default function Admin() {

    let loggedIn = false;

    if ( !loggedIn ) {

        return (
            <main>

                <h1>Admin</h1>

                <LoginForm />

            </main>
        )

    }

    return (
        <main>

            <h1>Admin</h1>
            
        </main>
    )


}