//footer copyright
const fYear = document.getElementById("copyright");
const d = new Date();
fYear.textContent = d.getFullYear();

//greets 
document.getElementById('greetings').innerText = greet;

if (hrs <12)
    greet = "Good morning"
document.getElementById('greetings').style.color = '#5a1362';
else
if (hrs >= 12 && hrs <= 17)
    greet = 'Good afternoon',
document.getElementById('greetings').style.color = '#371F76';
else 
if (hrs >= 17 && <= 24)
    greet = 'Good evening'
document.getElementById('greeting').style.color = '#643B9F';

//button
const alertBtn = document.getElementById('btn-alert');
alertBtn.addEventListener ('click', () => {
    alert("Thanks for clicking!!1");
});
//hover
alertBtn.addEventListener ('mouseover', () => {
    alertBtn.textContent = "Go head";
});
//regular text
alertBtn.addEventListener('mouseout', => {
    alertBtn.textContent = "Click me!";
});