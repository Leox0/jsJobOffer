
const userInput = document.getElementById('userId__value');
// const userButton = document.querySelector('button[type="submit"]');
const userButton = document.getElementById('getUserByIdButton');
const allUserButton = document.getElementById('getAllUserButton');
const jobOfferContainer = document.querySelector('.jobOffer__container');
const ulrUserJobOffer = 'http://localhost:8080/users/';

let userId = '';

userButton.addEventListener('click', function (e) {
    e.preventDefault();
    userId = userInput.value;
    jobOfferContainer.innerHTML = '';
    console.log("ulrUserJobOffer + userId");
    console.log(ulrUserJobOffer + userId);
    $.ajax({
        method: 'GET',
        url: ulrUserJobOffer + userId,
        success: function (response) {
            showResponseToHtml(response)
        },
        error: function (err) {
            console.log(err);
        }
    });
    userInput.value = '';
});

allUserButton.addEventListener('click', function (e) {
    e.preventDefault();
    jobOfferContainer.innerHTML = '';
    console.log("ulrUserJobOffer ");
    console.log(ulrUserJobOffer);
    $.ajax({
        method: 'GET',
        url: ulrUserJobOffer,
        success: function (response) {
            console.log("response.length");
            console.log(response.length);
            showResponseToHtml(response)
        },
        error: function (err) {
            console.log(err);
        }
    });
});
function showResponseToHtml(res) {
    const response = res;
    if (response.length !== undefined) {
        console.log("response");
        console.log(response);
        for (let i = 0; i < response.length; i++) {
            jobOfferContainer.innerHTML += `
        <div class="user__item">
        ID: ${response[i].uuid} <br>
        Name: ${response[i].name} <br>
        Login: ${response[i].login} <br>
        Creation date: ${response[i].creationDate}
        </div>
        `;
            // Zamiana Jsona na stringa
            // ${JSON.stringify(response[i])}
            console.log(res[i]);
        }
    } else {
        console.log("else showResponseToHtml");
        jobOfferContainer.innerHTML += `
        <div class="user__item">
        ID: ${response.uuid} <br>
        Name: ${response.name} <br>
        Login: ${response.login} <br>
        Creation date: ${response.creationDate}
        </div>
        `;
    }

}