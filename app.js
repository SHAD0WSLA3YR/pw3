document.addEventListener("DOMContentLoaded", function () {
    const emailLink = document.getElementById("emailLink");
    
    emailLink.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default behavior of the link
      
      // Create a temporary input element to copy the text
      const tempInput = document.createElement("input");
      tempInput.value = emailLink.textContent;
      
      // Append the input to the DOM
      document.body.appendChild(tempInput);
      
      // Select the input's text and copy it
      tempInput.select();
      document.execCommand("copy");
      
      // Remove the temporary input element
      document.body.removeChild(tempInput);
      
      alert("Email copied to clipboard!");
    });
  });
  


//Cursor   
  
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';
});

document.addEventListener('mouseenter', () => {
  cursor.style.opacity = 1;
});

document.addEventListener('mouseleave', () => {
  cursor.style.opacity = 0;
});


