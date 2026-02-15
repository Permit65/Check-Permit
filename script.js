function checkNow() {
    let selectedCountry = document.getElementById("countrySelect").value;
    let passportInput = document.getElementById("userInput").value.trim().toUpperCase();
    let resultBox = document.getElementById("resultBox");

    // DATABASE: Ekhane passport-er sathe country name (chhoto hater) thakte hobe
    const database = {
        "SERBIA101": { 
            name: "MR AL IMTIAZ ZISEN", 
            country: "serbia", 
            status: "Approved", 
            link: "MR AL IMTIAZ ZISEN FINAL.docx (3).pdf" 
        },
        "MAL880": { 
            name: "Sumon Ali", 
            country: "malaysia", 
            status: "Approved", 
            link: "malaysia_visa.pdf" 
        }
    };

    let user = database[passportInput];

    // Logic: Passport milte hobe + Selected Country-o milte hobe
    if (user && user.country === selectedCountry) {
        resultBox.style.display = "block";
        document.getElementById('resName').innerText = "Name: " + user.name;
        document.getElementById('resCountryDisplay').innerText = user.country.toUpperCase();
        document.getElementById('resStatus').innerText = user.status;
        document.getElementById('resLink').href = user.link;
    } else {
        alert("Sorry! Record not found for this country and passport.");
        resultBox.style.display = "none";
    }
}
