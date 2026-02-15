function checkData() {
    let input = document.getElementById('passport').value.toUpperCase().trim();
    let resultBox = document.getElementById('resultBox');

    // DATABASE - Eikhane apni notun passport add korben
    const data = {"SERBIA001": { name: "Abdur Rahim",  country: "Serbia 🇷🇸",  status: "Approved",  link: "https://drive.google.com/uc?export=download&id=1f9L7_AnuNJpDsYRxvJ5sbmK2_KMUDBw9" 
},
        };

    if (data[input]) {
        let user = data[input];
        resultBox.style.display = "block";
        document.getElementById('resName').innerText = "Name: " + user.name;
        document.getElementById('resCountry').innerText = user.country;
        document.getElementById('resStatus').innerText = user.status;
        document.getElementById('resLink').href = user.link;
    } else {
        alert("No record found! Check your Passport number again.");
    }
}
