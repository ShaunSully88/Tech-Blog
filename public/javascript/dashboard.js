async function dashboard() {
    const response =  await fetch('/api/users/dashboard', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('#dashboard').addEventListener('click', dashboard)