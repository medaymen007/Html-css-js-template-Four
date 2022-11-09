let sectionOfDashboard = document.querySelector(".sectionOfDashboard");
sectionOfDashboard.style.display = "";
let sectionOfSetting = document.querySelector(".sectionOfSetting");
sectionOfSetting.style.display = "none";
let sectionOfProfile = document.querySelector(".sectionOfProfile");
sectionOfProfile.style.display = "none";
let sectionOfProject = document.querySelector(".sectionOfProject")
sectionOfProject.style.display = "none";
let sectionOfCourses = document.querySelector(".sectionOfCourses")
sectionOfCourses.style.display = "none";
let sectionOfFriends = document.querySelector(".sectionOfFriends")
sectionOfFriends.style.display = "none";
let sectionOfFiles = document.querySelector(".sectionOfFiles")
sectionOfFiles.style.display = "none";
let sectionOfPlans = document.querySelector(".sectionOfPlans");
sectionOfPlans.style.display = "none";


let btnDashboard = document.querySelector(".Dashboard");
let btnSettings = document.querySelector(".Settings");
let btnProfile = document.querySelector(".Profile");
let btnProjects = document.querySelector(".Projects");
let btnCourses = document.querySelector(".Courses");
let btnFriends = document.querySelector(".Friends");
let btnFiles = document.querySelector(".Files");
let btnPlans = document.querySelector(".Plans");

btnDashboard.addEventListener("click", () => {

    sectionOfDashboard.style.display = "";
    sectionOfSetting.style.display = "none";
    sectionOfProfile.style.display = "none";
    sectionOfProject.style.display = "none";
    sectionOfCourses.style.display = "none";
    sectionOfFriends.style.display = "none";
    sectionOfFiles.style.display = "none";
    sectionOfPlans.style.display = "none";

})

btnSettings.addEventListener("click", () => {
    sectionOfDashboard.style.display = "none";
    sectionOfSetting.style.display = "";
    sectionOfProfile.style.display = "none";
    sectionOfProject.style.display = "none";
    sectionOfCourses.style.display = "none";
    sectionOfFriends.style.display = "none";
    sectionOfFiles.style.display = "none";
    sectionOfPlans.style.display = "none";
})

btnProfile.addEventListener("click", () => {
    sectionOfDashboard.style.display = "none";
    sectionOfSetting.style.display = "none";
    sectionOfProfile.style.display = "";
    sectionOfProject.style.display = "none";
    sectionOfCourses.style.display = "none";
    sectionOfFriends.style.display = "none";
    sectionOfFiles.style.display = "none";
    sectionOfPlans.style.display = "none";
})

btnProjects.addEventListener("click", () => {
    sectionOfDashboard.style.display = "none";
    sectionOfSetting.style.display = "none";
    sectionOfProfile.style.display = "none";
    sectionOfProject.style.display = "";
    sectionOfCourses.style.display = "none";
    sectionOfFriends.style.display = "none";
    sectionOfFiles.style.display = "none";
    sectionOfPlans.style.display = "none";
})

btnCourses.addEventListener("click", () => {
    sectionOfDashboard.style.display = "none";
    sectionOfSetting.style.display = "none";
    sectionOfProfile.style.display = "none";
    sectionOfProject.style.display = "none";
    sectionOfCourses.style.display = "";
    sectionOfFriends.style.display = "none";
    sectionOfFiles.style.display = "none";
    sectionOfPlans.style.display = "none";
})

btnFriends.addEventListener("click", () => {
    sectionOfDashboard.style.display = "none";
    sectionOfSetting.style.display = "none";
    sectionOfProfile.style.display = "none";
    sectionOfProject.style.display = "none";
    sectionOfCourses.style.display = "none";
    sectionOfFriends.style.display = "";
    sectionOfFiles.style.display = "none";
    sectionOfPlans.style.display = "none";
})

btnFiles.addEventListener("click", () => {
    sectionOfDashboard.style.display = "none";
    sectionOfSetting.style.display = "none";
    sectionOfProfile.style.display = "none";
    sectionOfProject.style.display = "none";
    sectionOfCourses.style.display = "none";
    sectionOfFriends.style.display = "none";
    sectionOfFiles.style.display = "";
    sectionOfPlans.style.display = "none";
})

btnPlans.addEventListener("click", () => {
    sectionOfDashboard.style.display = "none";
    sectionOfSetting.style.display = "none";
    sectionOfProfile.style.display = "none";
    sectionOfProject.style.display = "none";
    sectionOfCourses.style.display = "none";
    sectionOfFriends.style.display = "none";
    sectionOfFiles.style.display = "none";
    sectionOfPlans.style.display = "";
})

let iconSpe = document.querySelector(".iconSpe");
let btnSpe = document.querySelector(".speeee");
//btnSpe.addEventListener("click", () => {
//  iconSpe.style.justifyContent = "flex-start";
//console.log("hello")
//})
console.log(btnSpe)