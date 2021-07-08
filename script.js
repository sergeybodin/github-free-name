let users = ['sergeybodin', 'freeger'];

users.forEach((user) => {
    fetch(`https://api.github.com/users/${user}`)
        .then(result => result.json())
        .then(result => {
            console.log(result);
            let img = document.createElement('img');
            img.src = result.avatar_url;
            document.body.append(img);
            let info = document.createElement('p');
            info.append(result.login);
            document.body.append(info);
        })
});
