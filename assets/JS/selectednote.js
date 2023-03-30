const url = window.location.search;
    
const urlParams = new URLSearchParams(url)

let heading = urlParams.get('heading');
let date = urlParams.get('createdOn');
let notes = urlParams.get('notes');

console.log(heading,date,notes)

const usernotesform = document.createElement("form");
usernotesform.id = "usernotesform";
document.querySelector(".journal").append(usernotesform)

const headlineH1 = document.createElement("h1");
headlineH1.id = "headline";
headlineH1.innerText = heading;
usernotesform.appendChild(headlineH1);

const labellastmodifiedLabel = document.createElement("label");
labellastmodifiedLabel.id = "labellastmodified";
labellastmodifiedLabel.innerText = "Last Modified";
usernotesform.appendChild(labellastmodifiedLabel);

const lastmodifiedH3 = document.createElement("h3");
lastmodifiedH3.id = "lastmodified";
lastmodifiedH3.innerText = date;
usernotesform.appendChild(lastmodifiedH3);

const hr = document.createElement("hr");
usernotesform.appendChild(hr);

const notesinputTextarea = document.createElement("textarea");
notesinputTextarea.name = "usernotes";
notesinputTextarea.id = "notesinput";
notesinputTextarea.cols = "68";
notesinputTextarea.rows = "20";
notesinputTextarea.value = notes;
usernotesform.appendChild(notesinputTextarea);

const savenotesButton = document.createElement("button");
savenotesButton.classList.add("savenotes");
savenotesButton.id = "savenotes";
savenotesButton.innerText = "save";
usernotesform.appendChild(savenotesButton);