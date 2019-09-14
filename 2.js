// Code goes here

let filters = [];
function pouplateSelectOptions(selectInput, listOfOptions) {
  for (let i = 0; i < listOfOptions.length; i++) {
    var opt = listOfOptions[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    selectInput.appendChild(el);
  }
}

function addFilters(listToFilter) {
  let filterElement = document.getElementById("filters");
  listToFilter.forEach(function(elem) {
    filters.push(elem.value);
    filterElement.innerHTML += "<span class='filterElement greyButtonElement'>" + elem.value + " x</span>"
  });
  
}

function loadData() {
  let langOptions = ['Hindi', 'English'];
  let genreOptions = ['Comedy', 'Thriller']
  let langSelect = document.getElementById("language");
  let genreSelect = document.getElementById("genre");
  let listToFilter = [langSelect, genreSelect]; 
  pouplateSelectOptions(langSelect, langOptions);
  pouplateSelectOptions(genreSelect, genreOptions);
  addFilters(listToFilter);
}
