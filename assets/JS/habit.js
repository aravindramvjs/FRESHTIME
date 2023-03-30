// sidepanel lock
let sidepanel = document.querySelector('.sidepanel');
let toggle = document.querySelector('.toggle');
toggle.onclick = function(){
    sidepanel.classList.toggle('active')
}

// new habit slide function
let newhabitbtn = document.querySelector(".addnew")
let newhabitcls = document.querySelector(".addnewhabit")
newhabitbtn.onclick = function () {
    newhabitcls.style.display = "block";
}

// close new habit function
let close = document.getElementById("close")
close.onclick = function() {
    newhabitcls.style.display = "none";
}

// store habit in local storage
let habitinput = document.getElementById("habitname");
let addhabitbtn = document.getElementById("addhabit");
let habitlist = document.getElementById("habitlist");

let existinghabit = JSON.parse(localStorage.getItem("userhabit")) ?? [];
existinghabit.forEach(habit => renderhabit(habit))

function addhabit() {
    let newhabit = { habits: habitinput.value };
    existinghabit.push(newhabit);
    localStorage.setItem("userhabit", JSON.stringify(existinghabit))
    renderhabit(newhabit)
    Notify.success(`${habitinput.value} Habit Added`);
}

function renderhabit(habit) {
    let li = document.createElement('li')
    li.innerHTML = `
<span id="habitspan">${habit.habits}</span>
<input type="checkbox" id = "checkmon" > <span class="checkbox"> </span> 
<input type="checkbox" id = "checktue" > <span class="checkbox"> </span>
<input type="checkbox" id = "checkwed" > <span class="checkbox"> </span>
<input type="checkbox" id = "checkthu" > <span class="checkbox"> </span>
<input type="checkbox" id = "checkfri" > <span class="checkbox"> </span>
<input type="checkbox" id = "checksat" > <span class="checkbox"> </span>
<input type="checkbox" id = "checksun" > <span class="checkbox"> </span>

`

habitlist.append(li)

    // li.querySelector('#deletebtn').addEventListener('click', () => {
    //     let index = existinghabit.findIndex(t => t.habits == habit.habits)
    //     existinghabit.splice(index, 1)
    //     localStorage.setItem("userhabit", JSON.stringify(existinghabit))
    //     li.remove()
    // })
    
}