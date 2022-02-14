function submitData (userName, userEmail){
    const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          dogName: userName,
          dogBreed: userEmail,
        }),
      };
     
      return fetch("http://localhost:3000/dogs", configurationObject)
            .then(response => response.json())
            .then(data => console.log(data))
}

