// Your JavaScript code goes here
console.log("PWA is running!");
// app.js
document.addEventListener('DOMContentLoaded', () => {
    console.log("PWA is running!");

    // Check if geolocation is supported
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;

            // Call a function to get the suburb based on latitude and longitude
            getSuburbFromCoordinates(latitude, longitude);
        }, (error) => {
            console.error("Error getting location:", error.message);
        });
    } else {
        console.error("Geolocation is not supported in this browser");
    }
});

function getSuburbFromCoordinates(latitude, longitude) {
    // You can use a geocoding service or your own logic to get the suburb
    // For simplicity, let's just display the coordinates for now
    const suburbElement = document.getElementById("suburb");
    suburbElement.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
}

