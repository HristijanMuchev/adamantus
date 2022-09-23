const splash = document.getElementById("splash");
const cklicked = document.getElementById("cklicked");
const output = document.getElementById("output");
const first_name = document.getElementById("first_name");
const last_name = document.getElementById("last_name");
const email = document.getElementById("email");
const screen = document.getElementById("screen");

document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    splash.classList.add("display-none");
  }, 1500);
});

cklicked.onclick = () => {
  fetchUsers();
};

const fetchUsers = () => {
  fetch("https://random-data-api.com/api/v2/users")
    .then(function (response) {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      sessionStorage.setItem(data.id, JSON.stringify(data));
      Show(data);
    });
};

const Show = (data) => {
  screen.innerHTML += `
  <li class="listfirstpage">
  <img class="pimg" src="${data.avatar}">
  <div class="param">
    <span class="pname">${data.first_name} ${data.last_name}</span> <br>
    <span class="pemail">${data.email}</span>
    <span class="peye"> 
      <a href="page2.html?${data.id}">
        <i class="fa-regular fa-eye"></i>
      </a>
    </span>
  </div>
  </li>
    `;
};
