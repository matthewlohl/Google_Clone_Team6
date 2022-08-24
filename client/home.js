function required() {
    let empt = document.forms["search_form"]["search_word"].value;
    if (empt == "") {
        alert("Please input a Value");
        return false;
    }
}
