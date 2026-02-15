// 1. List of 100+ Countries (Code, Name)
const countries = [
    {code: "us", name: "USA"}, {code: "ca", name: "Canada"}, {code: "cy", name: "Cyprus"},
    {code: "de", name: "Germany"}, {code: "it", name: "Italy"}, {code: "ru", name: "Russia"},
    {code: "au", name: "Australia"}, {code: "pt", name: "Portugal"}, {code: "es", name: "Spain"},
    {code: "rs", name: "Serbia"}, {code: "ee", name: "Estonia"}, {code: "az", name: "Azerbaijan"},
    {code: "nz", name: "New Zealand"}, {code: "gr", name: "Greece"}, {code: "at", name: "Austria"},
    {code: "al", name: "Albania"}, {code: "fr", name: "France"}, {code: "hu", name: "Hungary"},
    {code: "fi", name: "Finland"}, {code: "ch", name: "Switzerland"}, {code: "hr", name: "Croatia"},
    {code: "dk", name: "Denmark"}, {code: "pl", name: "Poland"}, {code: "no", name: "Norway"},
    {code: "xk", name: "Kosovo"}, {code: "ro", name: "Romania"}, {code: "bg", name: "Bulgaria"},
    {code: "my", name: "Malaysia"}, {code: "sa", name: "Saudi Arabia"}, {code: "qa", name: "Qatar"},
    {code: "ae", name: "UAE"}, {code: "om", name: "Oman"}, {code: "kw", name: "Kuwait"},
    {code: "bh", name: "Bahrain"}, {code: "sg", name: "Singapore"}, {code: "mt", name: "Malta"},
    {code: "jp", name: "Japan"}, {code: "kr", name: "South Korea"}, {code: "tr", name: "Turkey"},
    {code: "br", name: "Brazil"}, {code: "ar", name: "Argentina"}, {code: "mx", name: "Mexico"},
    {code: "eg", name: "Egypt"}, {code: "za", name: "South Africa"}, {code: "gb", name: "UK"},
    {code: "ie", name: "Ireland"}, {code: "be", name: "Belgium"}, {code: "nl", name: "Netherlands"},
    {code: "se", name: "Sweden"}, {code: "cz", name: "Czech Republic"} 
    // Apni eibhabe aro code add korte parben...
];

// 2. Render Grid
const grid = document.getElementById('gridContainer');
countries.forEach(c => {
    let item = document.createElement('div');
    item.className = 'country-item';
    item.innerHTML = <img src="https://flagcdn.com/w160/${c.code}.png"><span>${c.name}</span>;
    item.onclick = () => {
        document.querySelectorAll('.country-item').forEach(el => el.classList.remove('active'));
        item.classList.add('active');
        document.getElementById('countrySelect').value = c.name.toLowerCase();
        document.getElementById('selectedDisplay').innerText = "Selected: " + c.name;
    };
    grid.appendChild(item);
});

// 3. Verification Logic
function checkNow() {
    let selCountry = document.getElementById('countrySelect').value;
    let passport = document.getElementById('userInput').value.trim().toUpperCase();
    
    // User Data (Ekhane apnar passport data add korun)
    const database = {"AA11": { 
            name: "MR AL IMTIAZ ZISEN", 
            country: "serbia", 
            status: "Approved", 
            link: "IMTIAZ.pdf" 
        },
        "SERBIA786": { name: "Rahim Uddin", country: "serbia", status: "Approved", pdf: "rahim.pdf" },
        "ITALY555": { name: "Sumon Ali", country: "italy", status: "Approved", pdf: "sumon.pdf" }
    };

    let user = database[passport];

    if (user && user.country === selCountry) {
        document.getElementById('resultBox').style.display = "block";
        document.getElementById('resName').innerText = user.name;
        document.getElementById('resStatus').innerText = user.status;
        document.getElementById('resLink').href = user.pdf;
    } else {
        alert("Record not found! Ensure you selected the correct flag and entered the right code.");
    }
}
