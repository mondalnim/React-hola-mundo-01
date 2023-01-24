console.log("JS07 that's so Fetch");

const getUsers = (page = 1) => {
    const url = 'https://reqres.in/api/users?page=${page}';

    fetch(url)//si es otro método tienes que especificarlo como post put poniendo (url, {})
        .then(reponse => {
            console.log("Status" + reponse.status);
            return reponse.json();
        })
        .then(users => {
            console.log("Total de elementos: " + users.total);
            //console.log(users);
            //Leer a data = [{},{},{}]
            //console.log(users.data);
            for (let user of users.data)
                console.log(`${user.id} - ${user.first_name} ${user.last_name}`);

        })
        .catch(error => console.log(error));


}

const btnFetchApiPost = document.getElementById("fetch-api-post");
btnFetchApiPost.addEventListener('click', () => {

    const url = 'https://reqres.in/api/users';
    const data = {
        name: "Aurelio",
        job: "Obrero"
    };

    fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(response => console.log('Success:', response))
        .catch(error => console.error('Error:', error));

});