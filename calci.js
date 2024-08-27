function display(a) {
  const k = document.getElementById('txt');
  k.value += a;
}

function solve() {
try {
    var txt = document.getElementById('txt');  
    var result = eval(txt.value);  

    if (result === undefined || isNaN(result)) {
        alert("Enter a valid expression");  
        return;
    } else {
        txt.value = result;  
        console.log("Result calculated: " + result);  
    }
} catch (error) {
    alert("Enter a valid expression"); 
    console.error("An error occurred: ", error); 
}
}

function clr() {
  document.getElementById('txt').value = "";

}

document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
      event.preventDefault();  // Prevent the default form submission or page refresh
      solve();  
      document.getElementById('txt').focus();  // Keep the focus on the input box
  }
});