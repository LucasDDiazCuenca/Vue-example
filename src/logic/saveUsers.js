export default function saveUsers(users) {

    const usersString = JSON.stringify(users);
    localStorage.setItem('users', usersString);

    console.log("users saved")
}

