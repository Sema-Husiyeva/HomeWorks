let groups = ['Reputation', 'New users', 'Voters', 'Editors', 'Moderators'];

let groupingMenu = document.querySelector('.grouping-users-menu');
groupingMenu.innerHTML=groups.map(group=>
    `<li class="grouping-users-menu-list" data-group="${group}">${group}</li>`
).join('');


class User {
    constructor(img, userName, city, infos, group) {
        this.img = img;
        this.userName = userName;
        this.city = city;
        this.infos = infos;
        this.group = group;
    }

    createUser(){
        return `<div class="users-list-item">
                  <img class="user-image" src="${this.img}" alt="${this.userName}">
                  <div class="username">
                    <h3>${this.userName}</h3>
                    <h3>${this.city}</h3>
                    <div class="tags">
                      ${this.infos.map(info => `<p class="tag">${info}</p>`).join(' ')}
                    </div>
                  </div>
                </div>`
    }
}
const users = [
    new User("images/lelah.jpeg", "Lelah Nichols","Troy, MI", ["clothes", "stem"], ["Reputation", "Voters"]),
    new User("images/jesus.jpeg", "Jesus Weiss","Fort Worth, TX", ["headset", "gadget","speed","winter"], ["New users", "Moderators"]),
    new User("images/annie.png", "Annie Rice","Austin, TX", ["road", "mountain","trip","earth", "nature"], ["New users", "Moderators"]),
    new User("images/robert.png", "Robert Brower","Cincinnati, OH", ["Maintenance", "gears","frames","repair"],["New users", "Editors"]),
    new User("images/amy.png", "Amy Campbell","Warrior, AL", ["music", "disks"], ["Editors", "Moderators"]),
    new User("images/anthony.png", "Anthony S. Morin","Lyndhurst, NJ", ["vintage", "electric"], ["Reputation", "Voters"]),
];

let usersList = document.querySelector('.users-list-section');
usersList.innerHTML=users.map(user=>user.createUser()).join('');


let searchInput = document.getElementById('search-input');
searchInput.addEventListener('input',()=>{
    let searchItem = searchInput.value.toLowerCase();
    let filteredUsers = users.filter(user=>
        user.userName.toLowerCase().includes(searchItem)
    );
    usersList.innerHTML=filteredUsers.map(user=>
        `<div class="users-list-item">
                  <img class="user-image" src="${user.img}" alt="${user.userName}">
                  <div class="username">
                    <h3>${user.userName}</h3>
                    <h3>${user.city}</h3>
                    <div class="tags">
                      ${user.infos.map(info => `<p class="tag">${info}</p>`).join(' ')}
                    </div>
                  </div>
                </div>`
    ).join('');
});


let tabs = document.querySelectorAll('.grouping-users-menu-list');

tabs.forEach(tab=>{
  tab.addEventListener('click', ()=>{
    let getData = tab.getAttribute('data-group');
    let filteredUsers = users.filter(user=>user.group.includes(getData));

    usersList.innerHTML = filteredUsers.map(user => user.createUser()).join('');
  })
})

