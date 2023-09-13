function formatDoc(cmd, value=null) {
	if(value) {
		document.execCommand(cmd, false, value);
	} else {
		document.execCommand(cmd);
	}
}

function addLink() {
	const url = prompt('Insert url');
	formatDoc('createLink', url);
}




let content = document.getElementById('content');

content.addEventListener('mouseenter', function () {
	const a = content.querySelectorAll('a');
	a.forEach(item=> {
		item.addEventListener('mouseenter', function () {
			content.setAttribute('contenteditable', false);
			item.target = '_blank';
		})
		item.addEventListener('mouseleave', function () {
			content.setAttribute('contenteditable', true);
		})
	})
})


const showCode = document.getElementById('show-code');
let active = false;

showCode.addEventListener('click', function () {
	showCode.dataset.active = !active;
	active = !active
	if(active) {
		content.textContent = content.innerHTML;
		content.setAttribute('contenteditable', false);
	} else {
		content.innerHTML = content.textContent;
		content.setAttribute('contenteditable', true);
	}
})



const filename = document.getElementById('filename');

function fileHandle(value) {
	if(value === 'new') {
		content.innerHTML = '';
		filename.value = 'untitled';
	} else if(value === 'txt') {
		const blob = new Blob([content.innerText])
		const url = URL.createObjectURL(blob)
		const link = document.createElement('a');
		link.href = url;
		link.download = `${filename.value}.txt`;
		link.click();
	} else if(value === 'pdf') {
		html2pdf(content).save(filename.value);
	}
}

let savenotes = document.getElementById("savenotes");
let notesform = document.getElementById("notesform");

const existingNotes = JSON.parse(localStorage.getItem("usernotes")) ?? [];

function saveNotes() {
	let notes = {
		createdOn: Date().slice(0,15),
		notesId: Math.floor(Math.random() * Date.now()),
		heading: filename.value,
		notes: content.innerHTML
	}
	existingNotes.push(notes);
	localStorage.setItem("usernotes", JSON.stringify(existingNotes));
	alert("notes saved");
	window.location.href = "notesall.html"
}

const url = window.location.search;
const urlParams = new URLSearchParams(url);
const notesId = urlParams.get("notesId");
const heading = urlParams.get("heading");


for(let i = 0; i < existingNotes.length; i++){
	if(existingNotes[i].notesId == notesId){
		filename.value = heading;
		const storedString = existingNotes[i]["notes"];
		const sanitizedString = DOMPurify.sanitize(storedString);
		content.innerHTML = sanitizedString
		console.log(sanitizedString);
	}
}




savenotes.addEventListener("click", (e)=>{
	e.preventDefault();
	if(notesId){
		for(let i = 0; i < existingNotes.length; i++){
			if(existingNotes[i].notesId == notesId){
				existingNotes[i]["notes"] = content.innerHTML;
				localStorage.setItem("usernotes", JSON.stringify(existingNotes));
				alert("notes saved");
				window.location.href = "notesall.html"
			}
		}
	}
	else{
		saveNotes();
	}

})

const deletenotes = document.getElementById("deletenotes");

deletenotes.onclick = ()=>{
	for(let i = 0; i < existingNotes.length; i++){
		if(existingNotes[i].notesId == notesId){
			existingNotes.splice(i, 1);
			localStorage.setItem("usernotes", JSON.stringify(existingNotes));
			window.location.href = "notesall.html";
			alert("notes deleted");
		}
	}
}