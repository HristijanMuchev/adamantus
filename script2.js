const data = JSON.parse(
  sessionStorage.getItem(window.location.search.substring(1))
);
console.log(data);

const username = document.getElementById("username");
const email = document.getElementById("email");
const phone_number = document.getElementById("phone");
const date = document.getElementById("date");
const city = document.getElementById("city");
const address = document.getElementById("address");
const zip = document.getElementById("zip");
const state = document.getElementById("state");
const avatar = document.getElementById("avatar");
const first_name = document.getElementById("first_name");
const last_name = document.getElementById("last_name");
const username1 = document.getElementById("username1");

avatar.src = `${data.avatar}`;
avatar.innerHTML = `${data.avatar}`;
first_name.innerHTML = `${data.first_name}  ${data.last_name}`;
username1.innerHTML = `@${data.username}`;
username.innerHTML = `${data.username}`;
email.innerHTML = `${data.email}`;
phone_number.innerHTML = `${data.phone_number}`;
date.innerHTML = `${data.date_of_birth}`;
city.innerHTML = `${data.address.city}`;
address.innerHTML = `${data.address.street_address}`;
zip.innerHTML = `${data.address.zip_code}`;
state.innerHTML = `${data.address.state}`;
