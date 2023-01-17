const year = ["0" ,"Year 1" ,"Year 2" ,"Year 3" ,"Year 4"];
const sem_tt = [
    ["0"],
    ["0" ,"Year 1 Sem 1" ,"Year 1 Sem 2"],
    ["0" ,"Year 2 Sem 1" ,"Year 2 Sem 2"],
    ["0" ,"Year 3 Sem 1" ,"Year 3 Sem 2"],
    ["0" ,"Year 4 Sem 1" ,"Year 4 Sem 2"]
];
const timetable_img = [
    ["0"],
    ["0" ,"./image/TimeTable/Year1Sem1_TT.png", "./image/TimeTable/Year1Sem2_TT.png"],
    ["0" ,"./image/TimeTable/Year2Sem1_TT.png", "./image/TimeTable/Year2Sem2_TT.png"],
    ["0" ,"./image/TimeTable/Year3Sem1_TT.png", "./image/TimeTable/Year3Sem2_TT.png"],
    ["0" ,"./image/TimeTable/Template_TT.png", "./image/TimeTable/Template_TT.png"]
];

let yearNum = localStorage.getItem("ThisYear");
let semNum = localStorage.getItem("ThisSem");
changeTT(yearNum, semNum);

function home(){
    localStorage.setItem("ThisYear", -1);
    localStorage.setItem("ThisSem", -1);
    document.getElementById("timetable-img").src = "./image/TimeTable/Template_TT.png";
    document.getElementById('L-content-title').textContent = null;
    location.replace("index.html");
}

function changeYear(year) {
    localStorage.setItem("ThisYear", year);
    localStorage.setItem("ThisSem", 1);
    location.replace("index.html");
}

function changeTT(year, sem) {
    if (year == -1 || sem == -1) {
        document.getElementById("timetable-img").src = "./image/TimeTable/Template_TT.png";
        document.getElementById("lightbox-img").src = "./image/TimeTable/Template_TT.png";
        return;
    }
    if (year < 1 || sem < 1) return;
    localStorage.setItem("ThisYear", year);
    localStorage.setItem("ThisSem", sem); 
    document.getElementById("timetable-img").src = timetable_img[year][sem];
    document.getElementById("lightbox-img").src = timetable_img[year][sem];
}

if (yearNum > 0) {
    document.getElementById('L-content-title').textContent = year[yearNum];
    document.getElementById('tt-list').innerHTML+="<button class='sem-btn' onclick='changeTT("+yearNum+" ,1)'>"+sem_tt[yearNum][1]+"</button>";
    document.getElementById('tt-list').innerHTML+="<button class='sem-btn' onclick='changeTT("+yearNum+" ,2)'>"+sem_tt[yearNum][2]+"</button>";
} 

function close1() {
    document.getElementById("lb-con").style.display = "none"; 
}
function open1() {
    document.getElementById("lb-con").style.display = "block";
}

