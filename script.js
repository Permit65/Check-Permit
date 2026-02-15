function checkData() {
    let input = document.getElementById('passport').value.toUpperCase().trim();
    let resultBox = document.getElementById('resultBox');

    // DATABASE - Eikhane apni notun passport add korben
    const data = {
        "SERBIA001": { name: "Abdur Rahim", country: "Serbia 🇷🇸", status: "Approved", link: "https://drive.google.com/file/d/1QbZWRrGjUFB0CzvyjiH6wDqq8J-p9OYt/view?usp=drive_link" },
        "SERBIA002": { name: "Karim Uddin", country: "Serbia 🇷🇸", status: "Approved", link: "https://drive.google.com/your-pdf-link-2" },
        "MAL8877": { name: "Sumon Ali", country: "Malaysia 🇲🇾", status: "Approved", link: "https://link-to-pdf.com" }
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
