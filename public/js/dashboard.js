const title = document.querySelectorAll('#subTitle');
const div = document.querySelectorAll("#iconDiv");

for (i = 0; i < title.length; i++) {
    const firstLetter = title[i].innerHTML.charAt(0)
    div[i].append(firstLetter)
}

const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/login');
    } else {
      alert(response.statusText);
    }
  };

document
    .querySelector('#logoutBtn')
    .addEventListener('click', logout);