
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form"); 

    
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        
        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const service = document.getElementById("service").value;
        const contactInfo = document.getElementById("contact").value;

        console.log("Client Information:");
        console.log(`First Name: ${firstName}`);
        console.log(`Last Name: ${lastName}`);
        console.log(`Service: ${service}`);
        console.log(`Contact Info: ${contactInfo}`);

        
        alert(`Thank you, ${firstName}! Your request for ${service} has been received. We will contact you at ${contactInfo}.`);


        form.reset();
    });
});