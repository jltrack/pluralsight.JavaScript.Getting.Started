// home.js file

changePercentOff(32);

//utils.js file

function showMessage(message) {
    document.getElementById('message').textContent = message;
}

function changePercentOff(percentage) {
    document.getElementById('percent-off').textContent = percentage + "% OFF";
}

//index.html file

  <h1 id="message" class="col-sm-12">GET A GRIP</h1>
            <h2 id ="percent-off">20% OFF</h2>
