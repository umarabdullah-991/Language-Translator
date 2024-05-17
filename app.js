const fromText = document.querySelector(".from-text"),
  toText = document.querySelector(".to-text"),
  exchangeIcon = document.querySelector(".exchange"),
  selectingTag = document.querySelector(".select"),
  icons = document.querySelector(".row i"),
  translation = document.querySelector(".button");
selectingTag.forEach((tag, id) => {
  for (let country_code in countries) {
    let selected = id == 0 ? country_code == "en-GB" ? "selected" : "" : country_code == "ur-PK" ? "selected" : "" ;
    let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
    tag.insertAdjacentHTML("beforeend", option);
  }
});
exchageIcon.addEventListener("click", () => {
	let tempText = fromText.value,
		tempLang = selectTag[0].value;
	fromText.value = toText.value;
	toText.value = tempText;
	selectTag[0].value = selectTag[1].value;
	selectTag[1].value = tempLang;
});
