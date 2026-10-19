/**  personalised-instructions.js - Script for personalising Research Drive setup instructions. Makes setup instructions include the drive name if it is part of the URL.

    URL parameters:
      name    - the Research Drive name, e.g. ressci202400035-drive-name
      backend - "vast" for drives on research.drive.auckland.ac.nz (default: files.auckland.ac.nz/research)

    Elements the page can provide (all optional):
      #defaultEnterMessage, #defaultPathInfo, .personalised-default - hidden when a drive name is given
      #personalisedEnterMessage, .personalised-message               - shown when a drive name is given
      #personalisedPathInfo                                          - filled with the full drive location
      .personalised-code                                             - code blocks where options.exampleName and
                                                                       options.exampleBasePath are swapped for the real values
*/
function initPersonalisedInstructions(os, options = {}) {
    let prefix = "smb://";
    let divider = "/";
    if (os === "windows") {
        prefix = "\\\\";
        divider = "\\";
    } else if (os === "linux") {
        prefix = "//";
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
        document.getElementById("personalisedPathInfo").textContent = basePath + driveName;
    }

    document.querySelectorAll("#defaultEnterMessage, #defaultPathInfo, .personalised-default").forEach(el => {
        el.style.display = "none";
    });
    document.querySelectorAll("#personalisedEnterMessage, .personalised-message").forEach(el => {
        el.style.display = "";
    });
    document.querySelectorAll(".personalised-drive-name").forEach(el => {
        el.textContent = driveName;
    });
    let pathInfo = document.getElementById("personalisedPathInfo");
    if (pathInfo) {
        pathInfo.style.display = "block";
        pathInfo.textContent = basePath + driveName;
    }

    // Replace the example drive name and location in code blocks. Text nodes are edited directly so syntax highlighting is kept.
    document.querySelectorAll(".personalised-code").forEach(block => {
        let walker = document.createTreeWalker(block, NodeFilter.SHOW_TEXT);
        while (walker.nextNode()) {
            let node = walker.currentNode;
            if (options.exampleBasePath) {
                node.nodeValue = node.nodeValue.split(options.exampleBasePath).join(basePath);
            }
            if (options.exampleName) {
                node.nodeValue = node.nodeValue.split(options.exampleName).join(driveName);
            }
        }
    });
}
