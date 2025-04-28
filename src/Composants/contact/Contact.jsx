import "./Contact.css"

function MonContact({texte}) {
  return (
    <>
    <section>
        <h1>CONTACT</h1>
        <form action="/votre-serveur" method="post">
            <div id="infos">
                <div>
                    <label for="prénom">Prénom</label>
                    <input type="text" id="prénom" name="prénom" required></input>
                </div>
                <div>
                    <label for="nom">Nom</label>
                    <input type="text" id="nom" name="nom" required></input>
                </div>
            </div>
            <div>
                <label for="message">Message</label>
                <input id="msg" type="text" name="message" required></input>
            </div>
        </form>
        <button id="btn" type="submit">Envoyer</button>
    </section>
    </>
  );
}

export default MonContact;