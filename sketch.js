

let toggleNewHire = false
let toggleHire1 = false
let toggleHire2 = false
let toggleAssignBox = true

let toggleTest1 = false
let toggleTest2 = false

let textHeight = 30
let numRows = 13
let page, pageLine, headerLine, sideBarLine, projectLine
let interfaceColor = 230

let assignGroup, assignIconGroup, assignArray, assignIconArray
let newHireBox, hire1Box, hire2Box, personSelect

let jira


function setup() {
  createCanvas(2400, 1800);
  
  jira = new SS1(200, 50, 1000, 700)
  jira.openWindow()
  jira.createTable()

}



function draw() {
  background(220);

  jira.hired()

}

function mousePressed(){
  jira.assign()
}

