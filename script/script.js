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

//console log
const yyyy = d.getFullYear ();
const month = d.getDate ();
const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let mm = months[month];
console.log ('${mm} ${dd} ${yyyy}');

//loop numbers
for (let i = 0; i <= 11; i++) {
  const li = document.createElement("li");
  if (i === 0) {
    li.textContent = " odd";
  }
  else if (i % 2 === 0) {
    li.textContent = " odd";
  }
  else {
    li.textContent = " even";
  }
  document.getElementById(`numbers`).appendChild(li);
};
