const requestURL = "https://api.github.com/users/hiteshchoudhary";
const xhr = new XMLHttpRequest();
const card = document.querySelector(".card");
xhr.open("GET", requestURL);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    let data = JSON.parse(this.responseText);
    console.log(this.responseText);
    const pic = data.avatar_url;
    const name = data.name;
    const followers = data.followers;
    const id = data.id;
    card.innerHTML = `<img src="${pic}" alt="">
            <h1>Name : ${name}</h1>
            <h3>Id : ${id}</h3>
            <h3>Followers : ${followers}</h3>
      
            `;
  }
};
xhr.send();
