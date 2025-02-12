export const posts = async () => {
    let data = await fetch('https://jsonplaceholder.typicode.com/users/${id}/posts')
    let response = await data.json();
    return response;
    
    }



    