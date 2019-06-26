//Event listener to prevent user from leaving the home page

window.addEventListener('beforeunload', (event)=> {
    event.preventDefault()
    event.returnValue = 'Are you sure you want to leave?'
});