console.log('Client side is loaded');




const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.querySelector('#message-1')
const message2 = document.querySelector('#message-2')


weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const location = search.value
  message1.textContent = 'Loading ...'
  message2.textContent = ''
  console.log('search', location);
  const url = `/weather?address=${location}`
  fetch(url).then((response) => {
    return response.json();

  }).then((response) => {
    console.log(response);
    if (response.data) {
      message1.textContent = response.data.temp_max
    }

    else {
      message1.textContent = ""
      message2.textContent = 'There is some error'
    }
  })


})