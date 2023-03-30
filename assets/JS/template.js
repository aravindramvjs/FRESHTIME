const sidepanelDiv = document.createElement("div");
sidepanelDiv.classList.add("sidepanel");
document.querySelector(".main").prepend(sidepanelDiv);

const logoLinkA = document.createElement("a");
logoLinkA.href = "../index.html";
sidepanelDiv.appendChild(logoLinkA);

const logoImg = document.createElement("img");
logoImg.src = "../assets/Images/FRESHTIME LOGO NEW.png";
// logoImg.classList.add("logo");
logoImg.width = "250";
logoImg.alt = "logo";
logoLinkA.appendChild(logoImg);

const homeLinkA = document.createElement("a");
homeLinkA.href = "dashboard.html";
sidepanelDiv.appendChild(homeLinkA);

const homeIcon = document.createElement("i");
homeIcon.classList.add("fas", "fa-home");
homeLinkA.appendChild(homeIcon);

const homeSpan = document.createElement("span");
homeSpan.classList.add("title");
homeSpan.innerText = "Home";
homeLinkA.appendChild(homeSpan);

const taskLinkA = document.createElement("a");
taskLinkA.href = "Task Page.html";
sidepanelDiv.appendChild(taskLinkA);

const taskIcon = document.createElement("i");
taskIcon.classList.add("fas", "fa-tasks");
taskLinkA.appendChild(taskIcon);

const taskSpan = document.createElement("span");
taskSpan.classList.add("title");
taskSpan.innerText = "Task";
taskLinkA.appendChild(taskSpan);

const timerLinkA = document.createElement("a");
timerLinkA.href = "timer.html";
sidepanelDiv.appendChild(timerLinkA);

const timerIcon = document.createElement("i");
timerIcon.classList.add("far", "fa-hourglass");
timerLinkA.appendChild(timerIcon);

const timerSpan = document.createElement("span");
timerSpan.classList.add("title");
timerSpan.innerText = "Timer";
timerLinkA.appendChild(timerSpan);

const habitLinkA = document.createElement("a");
habitLinkA.href = "habit.html";
sidepanelDiv.appendChild(habitLinkA);

const habitIcon = document.createElement("i");
habitIcon.classList.add("fas", "fa-spa");
habitLinkA.appendChild(habitIcon);

const habitSpan = document.createElement("span");
habitSpan.classList.add("title");
habitSpan.innerText = "Habit";
habitLinkA.appendChild(habitSpan);

const notesLinkA = document.createElement("a");
notesLinkA.href = "notesall.html";
sidepanelDiv.appendChild(notesLinkA);

const notesIcon = document.createElement("i");
notesIcon.classList.add("far", "fa-paper-plane");
notesLinkA.appendChild(notesIcon);

const notesSpan = document.createElement("span");
notesSpan.classList.add("title");
notesSpan.innerText = "Notes";
notesLinkA.appendChild(notesSpan);

const leaderboardLinkA = document.createElement("a");
leaderboardLinkA.href = "leaderboard.html";
sidepanelDiv.appendChild(leaderboardLinkA);

const leaderboardIcon = document.createElement("i");
leaderboardIcon.classList.add("fa-solid", "fa-shield-halved");
leaderboardLinkA.appendChild(leaderboardIcon);

const leaderboardSpan = document.createElement("span");
leaderboardSpan.classList.add("title");
leaderboardSpan.innerText = "Leaderboard";
leaderboardLinkA.appendChild(leaderboardSpan);

const profileLink = document.createElement("a");
profileLink.href = "profile.html";

const profileIcon = document.createElement("i");
profileIcon.classList.add("fas", "fa-user-ninja");
profileLink.appendChild(profileIcon);

const profileSpan = document.createElement("span");
profileSpan.classList.add("title");
profileSpan.innerText = "Profile";
profileLink.appendChild(profileSpan);
sidepanelDiv.appendChild(profileLink);

const toggleDiv = document.createElement("div");
toggleDiv.classList.add("toggle");
sidepanelDiv.appendChild(toggleDiv);

const circle1 = document.createElement("div");
circle1.classList.add("circle1");
document.body.appendChild(circle1);

const circle2 = document.createElement("div");
circle2.classList.add("circle2");
document.body.appendChild(circle2);

const circle3 = document.createElement("div");
circle3.classList.add("circle3");
document.body.appendChild(circle3);

const circle4 = document.createElement("div");
circle4.classList.add("circle4");
document.body.appendChild(circle4);

const circle5 = document.createElement("div");
circle5.classList.add("circle5");
document.body.appendChild(circle5);


let sidepanel = document.querySelector('.sidepanel');
let toggle = document.querySelector('.toggle');
toggle.onclick = function(){
    sidepanel.classList.toggle('active')
}

