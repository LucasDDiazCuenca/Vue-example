export default function loadUsers() {

    const usersString = localStorage.getItem('users');

    const freshUsers = JSON.parse(usersString);

    console.log("users loaded")

    return freshUsers;

}