import { users } from "./users.js";
import { posts } from "./posts.js";


const root = document.getElementById(`root`);


const imprimir = async() => {

    try {
        const usuario = await users();
        await Promise.all(usuario.map(async ({name,email,id}) => {

            let div = document.createElement(`div`);
            let htmlName = document.createElement(`div`);
            let htmlEmail = document.createElement(`div`);
            let htmlButton = document.createElement(`button`);
            htmlName.innerText = name;
            htmlEmail.innerText = email;
            htmlButton.innerText = "cuantos Post"

            div.append(htmlName,htmlEmail, htmlButton)
            div.classList.add(`cards`);

            root.appendChild(div);
            
          htmlButton.addEventListener(`click`, () => {
            // alert(`el usuario con id ${usuario.id}`);
            posts(id).then(data => {
                alert(`el usuario ${name} tiene tantos ${data.length} posts`)
            })
          })
            
        }));

    } catch  {
        console.error("Error");
    }
}


imprimir();