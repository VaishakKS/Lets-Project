let countries;
const fetchPromise = fetch("https://restcountries.eu/rest/v2/all");
fetchPromise
    .then((response) => {
        return response.json();
    })
    .then((country) => {
        countries = country;
        console.log(countries);
        let ele = document.querySelector(".flag");
        for (var i = 0; i < countries.length; i++) {
            ele.innerHTML += `<option value="${countries[i].name}" class="${countries[i].name}"> ${countries[i].name} </option>`;
        }
    });

function getFlag(element) {
    let countryName = element.value;
    let index;
    if (countryName) {
        for (let i = 0; i < countries.length; i++) {
            if (countries[i].name === countryName) {
                index = i;
            }
        }
        document.querySelector(".flag-images").innerHTML = `<img src=${countries[index].flag} alt="${countryName}" visible/>`;
        document.querySelector(".flag-images").style.cssText = "  background-color: #2D2424;display: grid;";
        document.querySelector(".input-name").value = `${countries[index].name}`;
        document.querySelector(".input-capital").value = `${countries[index].capital}`;
        document.querySelector(".input-region").value = `${countries[index].region}`;
        document.querySelector(".input-population").value = `${countries[index].population}`;
        let countryCurrencies = countries[index].currencies;
        document.querySelector(".input-currency").value = `${countryCurrencies[0].name}`;
    } else {
        document.querySelector(".flag-images").innerHTML = `<img src="#" alt="select-image" hidden/>`;
        document.querySelector(".flag-images").style.visibility = "hidden";
        document.querySelector(".input-name").value = '';
        document.querySelector(".input-capital").value = '';
        document.querySelector(".input-region").value = '';
        document.querySelector(".input-population").value = '';
        document.querySelector(".input-currency").value = '';
    }
}