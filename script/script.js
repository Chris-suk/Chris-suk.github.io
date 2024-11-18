//footer copyright
const fYear = document.getElementById("copyright");
const d = new Date();
fYear.innerText = d.getFullYear();



//greets 
    const currentHour = new Date (). getHours ();
    const greetingElement = document.getElementById('greetings');
    if (currentHour < 12) {
        greetingElement.textContent = 'Good Morning!';
        greetingElement.classList.add('morning');
      } else if (currentHour >= 12 && currentHour < 17) {
        greetingElement.textContent = 'Good Afternoon!';
        greetingElement.classList.add('afternoon');
      } else {
        greetingElement.textContent = 'Good Evening!';
        greetingElement.classList.add('evening');
      }


//button
const alertBtn = document.getElementById('btn-alert');
alertBtn.addEventListener ('click', () => {
    alert("Thanks for clicking!!");
});
//hover
alertBtn.addEventListener ('mouseover', () => {
    alertBtn.textContent = "Go ahead";
});
//regular text
alertBtn.addEventListener('mouseout', () => {
    alertBtn.textContent = "Click me!";
});

//loop
const olElement = document.getElementById('numbers'); 
for (let i = 1; i <= 12; i++) {
  const listItem = document.createElement('li');

  if (i % 2 === 0) {
    listItem.textContent = 'Even'; 
  } else {
    listItem.textContent = 'Odd'; 
  }
  
  olElement.appendChild(listItem);
}