//get json from localstorage
let notes = JSON.parse(localStorage.getItem("usernotes"));
for(let i = 0; i < notes.length; i++){

//Notes Card
const notesLink = document.createElement("a");
notesLink.href = `notes.html?heading=${notes[i].heading}&createdOn=${notes[i].createdOn}&notes=${notes[i].notes}`
notesLink.id = "noteslink";
document.querySelector(".allnotes").append(notesLink)

const mainNotesDiv = document.createElement("div");
mainNotesDiv.classList.add("main_notes");
notesLink.appendChild(mainNotesDiv);

const dateDiv = document.createElement("div");
dateDiv.classList.add("date");
mainNotesDiv.appendChild(dateDiv);

const datep = document.createElement("p");
datep.innerText = notes[i].createdOn;
dateDiv.appendChild(datep);

const dotp = document.createElement("P");
dotp.classList.add("dot");
dotp.innerText = "...";
dateDiv.appendChild(dotp);

const headingDiv = document.createElement("div");
headingDiv.classList.add("heading");
headingDiv.innerText = notes[i].heading;
mainNotesDiv.appendChild(headingDiv);

const tagsDiv = document.createElement("div") ;
tagsDiv.classList.add("tags");
mainNotesDiv.appendChild(tagsDiv);

const databaseButton = document.createElement("button");
databaseButton.innerText = "database";
tagsDiv.appendChild(databaseButton);

const academyButton = document.createElement("button");
academyButton.innerText = "academy";
tagsDiv.appendChild(academyButton);

const notesDiv = document.createElement("div");
notesDiv.classList.add("notes");
mainNotesDiv.appendChild(notesDiv);

const notesParagraph = document.createElement("p");
notesParagraph.innerText = notes[i].notes;
notesDiv.appendChild(notesParagraph);
}



