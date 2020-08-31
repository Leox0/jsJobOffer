
const userInput = document.getElementById('userId__value');
const userButton = document.querySelector('button[type="submit"]');
const jobOfferContainer = document.querySelector('.jobOffer__container');
const ulrUserJobOffer = 'http://localhost:8080/users/';

let spaceInputValue = '';

console.log(userButton);
userButton.addEventListener('click', function (e) {
    e.preventDefault();
    spaceInputValue = userInput.value;
    jobOfferContainer.innerHTML = '';
    console.log(ulrUserJobOffer);
    let config = {
        allowedHeaders: [
            "Content-Type",
            "Authorization",
            "Access-Control-Allow-Methods",
            "Access-Control-Request-Headers"
          ],
        // headers: { 'Access-Control-Allow-Origin': '*'} ,
        crossdomain: true
    };
    axios.get(ulrUserJobOffer, config)
        .then((response) => {
            // Success 🎉
            console.log(response);
            console.log("+++++++");
        })
        .catch((error) => {
            // Error 😨
            if (error.response) {
                /*
                 * The request was made and the server responded with a
                 * status code that falls out of the range of 2xx
                 */
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                /*
                 * The request was made but no response was received, `error.request`
                 * is an instance of XMLHttpRequest in the browser and an instance
                 * of http.ClientRequest in Node.js
                 */
                console.log(error.request);
            } else {
                // Something happened in setting up the request and triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        });

});
