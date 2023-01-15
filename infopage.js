const year = ["0" ,"Year 1" ,"Year 2" ,"Year 3"];
const sem_tt = [
    ["0"],
    ["Year 1 Sem 1" ,"Year 1 Sem 2"],
    ["Year 2 Sem 1" ,"Year 2 Sem 2"],
    ["Year 3 Sem 1","Year 3 Sem 2"]
];
const timetable_img = [
    ["0"],
    ["./image/TimeTable/Year1Sem1_TT.png", "./image/TimeTable/Year1Sem2_TT.png"],
    ["./image/TimeTable/Year2Sem1_TT.png", "./image/TimeTable/Year2Sem2_TT.png"],
    ["./image/TimeTable/Year3Sem1_TT.png", "./image/TimeTable/Year3Sem2_TT.png"],
];

let yearNum = localStorage.getItem("ThisYear");

function home(){
    localStorage.setItem("ThisYear", -1);
    document.getElementById("timetable-img").src = "./image/TimeTable/Template_TT.png";
    document.getElementById('L-content-title').textContent = null;
    location.replace("index.html");
}

function changeYear(year) {
    localStorage.setItem("ThisYear", year);
    location.replace("index.html");
    //document.getElementById('L-content-title').textContent = year[x];
    //alert(x);

}

function changeTT(x, y, str) {
    //alert(str);
    if (x < 0 || y < 0) return;
    document.getElementById("timetable-img").src = timetable_img[x][y];
    if (str == "one") 
    {
        document.getElementById("one").style.color='#816BFF';
        document.getElementById("two").style.color='#000000';
    }
    if (str == "two") 
    {
        document.getElementById("one").style.color='#000000';
        document.getElementById("two").style.color='#816BFF';
    }
}

if (yearNum > 0) {
    document.getElementById('L-content-title').textContent = year[yearNum];
    document.getElementById('tt-list').innerHTML+="<button class='sem-btn' onclick='changeTT("+yearNum+" ,0 , `one`)' id='one'>"+sem_tt[yearNum][0]+"</button>";
    document.getElementById('tt-list').innerHTML+="<button class='sem-btn' onclick='changeTT("+yearNum+" ,1 , `two`)' id='two'>"+sem_tt[yearNum][1]+"</button>";
    //console.log(sem_tt[yearNum][0]);
} 



