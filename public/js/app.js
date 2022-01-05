console.log('Client side is loaded');




const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.querySelector('#message-1')
const message2 = document.querySelector('#message-2')


weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const location = search.value
  console.log(location);
  message1.textContent = 'Loading ...'
  message2.textContent = ''

  const url = `/weather?address=${location}`
  fetch(url).then((response) => {
    return response.json();

  }).then((response) => {
    console.log(response);
    if (response.data) {
      message1.textContent = response.data.main.temp_max
    }
    else {
      message1.textContent = ""
      message2.textContent = 'There is some error'
    }
  })


})