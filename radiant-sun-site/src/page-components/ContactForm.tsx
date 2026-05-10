export function ContactForm() {

    return (
        <form action="mailto:don7229fraz@gmail.com">
                <input type="text" name="name" />
                <input type="text" name="subject" />
                <textarea name="body">

                </textarea>

                <input type="submit" value="submit" />
        </form>
    )
}