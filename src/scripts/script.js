function talk() {
  const data = {
    text: "green"
  }  
  
  fetch('http://egg.hopto.org:8042/light', {
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

function khaana() {
  const data = {
    text: "red"
  }  
  
  fetch('http://egg.hopto.org:8042/light', {
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

function night() {
  const data = {
    text: "blue"
  }  
  
  fetch('http://egg.hopto.org:8042/light', {
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