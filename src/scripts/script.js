function talk() {
  const data = {
    text: "on"
  }  
  
  fetch('https://cors-anywhere.herokuapp.com/http://egg.hopto.org:8042/light', {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
}