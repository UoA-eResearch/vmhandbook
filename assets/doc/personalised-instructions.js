/**  personalised-instructions.js - Script for personalising Research Drive setup instructions. Makes setup instructions include the drive name if it is part of the URL.
*/
function initPersonalisedInstructions(os) {
    let prefix = "\\\\";
    let divider = "\\";
    if (os !== "windows") {
        prefix = "smb://";
        divider = "/";
    }
    let params = new URLSearchParams(document.location.search);
    let basePath = `${prefix}files.auckland.ac.nz${divider}research${divider}`;
    if (params.get("backend") !== null && params.get("backend") === "vast") {
        basePath = `${prefix}research.drive.auckland.ac.nz${divider}`
    }
    let driveName = params.get("name");
    if (driveName) {
        document.getElementById("defaultEnterMessage").style.display = "none";
        document.getElementById("personalisedEnterMessage").style.display = "inline";
        document.getElementById("defaultPathInfo").style.display = "none";
        document.getElementById("personalisedPathInfo").style.display = "block";
        document.getElementById("personalisedPathInfo").innerHTML = basePath + driveName;
    }
}
