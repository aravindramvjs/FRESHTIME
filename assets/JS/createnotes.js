let currentDate = new Date().toJSON().slice(0, 10)
document.querySelector(".welcome").innerHTML = `<h3>Today | ${currentDate}</h3>`;


let notesheading = document.getElementById("headline");
let notescreated = document.getElementById("lastmodified");
let notes = document.getElementById("notesinput");

notescreated.value = currentDate;

let existingnotes = JSON.parse(localStorage.getItem("usernotes")) ?? [];

function addnotes() {
    let newnotes = {
        "heading": notesheading.value,
        "createdOn": notescreated.value,
        "notes": notes.value
    }
    existingnotes.push(newnotes);
    localStorage.setItem("usernotes", JSON.stringify(existingnotes))
}

let savenotes = document.getElementById("savenotes");
    savenotes.addEventListener('click', e => {
        e.preventDefault();
        addnotes();
        // alert("Your Notes are Saved")
        Notify.success("Your Notes are Saved");
        window.location.href = "notesall.html"
});