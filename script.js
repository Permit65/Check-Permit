function checkNow() {
    // ১. Website theke input neya
    let selectedCountry = document.getElementById("countrySelect").value;
    let passportInput = document.getElementById("userInput").value.trim().toUpperCase();
    let resultBox = document.getElementById("resultBox");

    // ২. Magic Diary (Database) - Ekhanei apni apnar iccha moto nam boshaben
    const database = {
        
        // Passport Code : { Nam, Desh, Status, PDF file-er nam }
        
        "AA11": { 
            name: "MR AL IMTIAZ ZISEN", 
            country: "serbia", 
            status: "Approved", 
            link: "IMTIAZ.pdf" 
        },

        "BB22": { 
            name: "Hasan Mahmud", 
            country: "italy", 
            status: "Approved", 
            link: "hasan.pdf" 
        },

        "CC33": { 
            name: "Abdur Rahim", 
            country: "malaysia", 
            status: "Processing", 
            link: "rahim.pdf" 
        }

        // Aro nam add korte chaile uporer moto kore niche niche likhun
    };

    let user = database[passportInput];

    // ৩. Check kora (Passport ar Desh mileche kina)
    if (user && user.country === selectedCountry) {
        resultBox.style.display = "block";
        document.getElementById('resName').innerText = "Name: " + user.name;
        document.getElementById('resStatus').innerText = "Status: " + user.status;
        document.getElementById('resLink').href = user.link;
    } else {
        alert("Kono record paoya jayni! Code ba Desh check korun.");
        resultBox.style.display = "none";
    }
}
