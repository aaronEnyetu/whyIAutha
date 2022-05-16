// use checkAuth function to redirect is user not authenticated


import { checkAuth, logout } from '../fetch-utils';

const logoutButton = document.getElementById('logout');

checkAuth();

// add event listener to the logout button and call logout
logoutButton.addEventListener('click', async () => {
    await logout();
});
