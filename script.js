// Clock
var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleTimeString();

// Visit counter
// Learned how to do it from https://medium.com/@iamcodefoxx/how-to-count-the-number-of-visits-on-your-website-with-html-css-javascript-and-the-count-api-2f99b42b5990 
function websiteVisits(response) {
    document.querySelector("#visits").textContent = response.value;
}
