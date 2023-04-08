
let jiraPage, jiraOriginX, jiraOriginY, jiraEndX, jiraEndY;
let pageLine, pageLine1, pageLine2, pageLine3

let numRows, textHeight, tabColor

let pageListWidth;

let key, keyGY;

let topBar, siteIcon, siteLogo, siteTabs, searchAccount
let sideBar, projects, projectList, feedback
let listBar, listTabs, projectTitle, projectMembers, listSettings, creat
let pageList, listEndY, listEnd, listLine, pageListColms

let colmKey, colmSum, colmStat, colmAssign, colmPrio
let list, listOriginY
let keyGroup, sumGroup, statGroup,assignGroup, prioGroup
let keyArray, sumArray, statArray, assignArray, prioArray
let keyText, sumText, statText, assignText, prioText;

let assignIconGroup, assignIconArray, assignIconText;
let personSelect, dropDownBox, searchBox, instructionBox, newHireBox, hire1Box, hire2Box;

let toggleNewHire = false
let toggleHire1 = false
let toggleHire2 = false
let toggleAssignBox = true

let toggleTest1 = false
let toggleTest2 = false


function setup() {
  createCanvas(1400, 2400);

  textHeight = 30
  numRows = 13
  tabColor = 240
  //can assign these sprites images

  jiraPage = new Sprite(700, 400, 1000, 700)
  jiraPage.collider='s'
  jiraPage.color='white'
  jiraPage.stroke='black'
  jiraPage.layer = 1

    //sprites rect mode center instead of corner. 700-(1000/2)=200. so origin is 200 >> instead of -/+ in refactoring. convery with w/h
  jiraOriginX= jiraPage.x-(jiraPage.w/2)
  jiraOriginY= jiraPage.y-(jiraPage.h/2)
  jiraEndX= jiraOriginX+jiraPage.w
  jiraEndY= jiraOriginY+jiraPage.h

  pageLine = new Group()
  pageLine.collider = 's'
  pageLine.stroke = 230
  pageLine.strokeWeight = 2
  pageLine.layer = 2

  pageLine1 = new pageLine.Sprite([[jiraOriginX+2, jiraOriginY+50], [jiraEndX-2, jiraOriginY+50]])
  pageLine2 = new pageLine.Sprite([[jiraOriginX+250, jiraOriginY+50], [jiraOriginX+250, jiraEndY-2]])
  pageLine3 = new pageLine.Sprite([[jiraOriginX+275, jiraOriginY+150], [jiraEndX-25, jiraOriginY+150]])


  topBar = new Group()
  topBar.collider = 's'
  topBar.color = tabColor
  topBar.stroke = topBar.color
  topBar.y = pageLine1.y - 25
  topBar.h = textHeight * 0.75
  
  siteIcon = new topBar.Sprite()
    siteIcon.x = jiraOriginX + 35
    siteIcon.w = pageLine1.w * 0.025
    siteIcon.h = siteIcon.w 
  siteLogo = new topBar.Sprite()
    siteLogo.w = pageLine1.w * 0.25
    // siteLogo.x = jiraOriginX + (siteLogo.w*0.75)
    siteLogo.x = 15 + (siteIcon.x + (siteIcon.w/2)) + siteLogo.w/2
  siteTabs = new topBar.Sprite()
    siteTabs.w = pageLine1.w * 0.3
    siteTabs.x = 15 + (siteLogo.x + (siteLogo.w/2)) + siteTabs.w/2
  searchAccount = new topBar.Sprite()
    searchAccount.w = pageLine1.w * 0.3
    searchAccount.x = 55 + (siteTabs.x + (siteTabs.w/2)) + searchAccount.w/2

  sideBar = new Group()
  sideBar.collider = 's'
  sideBar.w = pageLine1.w / 5
  sideBar.x = pageLine1.x + (sideBar.w * 0.6)
  sideBar.h = 1
    //place holder so its not a circle
  sideBar.color = tabColor
  sideBar.stroke = sideBar.color 
  
  projects = new sideBar.Sprite ()
    projects.y = pageLine2.y + 45
    projects.h = pageLine2.h * 0.05
  projectList = new sideBar.Sprite()
    projectList.h = pageLine2.h * 0.3
    projectList.y = (projects.y + projects.h) + projectList.h/2
  feedback = new sideBar.Sprite()
    feedback.h = pageLine2.h * 0.1
    feedback.y = (pageLine2.y + (pageLine2.h)) - (feedback.h/2) - 30

 

  listBar = new Group()
  listBar.collider = 's'
  listBar.color = tabColor
  listBar.stroke = listBar.color

  listTabs = new listBar.Sprite()
  listTabs.y = pageLine3.y - 25
  listTabs.w = pageLine3.w
  listTabs.x = pageLine3.x + (listTabs.w/2)
  listTabs.h = siteTabs.h

  projectTitle = new listBar.Sprite()
  projectTitle.y = listTabs.y - listTabs.h*2 
  projectTitle.h = projects.h
  projectTitle.w = pageLine3.w * 0.3
  projectTitle.x = pageLine3.x + (projectTitle.w/2)

  projectMembers = new listBar.Sprite()
  projectMembers.y = listTabs.y + listTabs.h*2.5
  projectMembers.h = projects.h
  projectMembers.w = pageLine3.w * 0.4
  projectMembers.x = pageLine3.x + (projectMembers.w/2)
  
  listSettings = new listBar.Sprite()
  listSettings.y = listTabs.y + listTabs.h*2.5
  listSettings.h = projects.h
  listSettings.w = pageLine3.w * 0.4
  // listSettings.x = (jiraEndX - (listSettings.w/2)) - 30
  listSettings.x = (pageLine3.x + (pageLine3.w)) - (listSettings.w/2)


  //redundancy, necessary for new group? 
  pageList = new Group()
  pageList.collider='s'
  pageList.color=255
  pageList.stroke=230
  pageList.strokeWeight=0.5
  pageList.layer = 2

  pageList.x = jiraOriginX+575
  pageListWidth = jiraPage.w-400
  // pageList.w = jiraPage.w-400
  // pageList.h=0
    //if I set outside of loop, wouldn't apply to all 


  // while (pageList.length<(numRows*2)){
  //   // let list = new pageList.Sprite([[x1, y],[x2, y]])
  //   // x1 = jiraOriginX+275
  //   // x2 = jiraEndX-25
  //   // y = 10 + (10*pageList.length)
  //   //ok might be tricky if theyre lines instead of rect (can't use .x)
  //     //want x of jiraOriginX+275 or 475. w will be jiraOriginX+275 to jiraEndX-25 or jiraPage.w - 300?
  //   let listText = new pageList.Sprite()
  //   // listText.x = jiraOriginX+575
  //   listText.y = (jiraOriginY + 200) + (textHeight*(pageList.length/2))
  //       //need /2 because now theres ore things in array (list lines)
  //   listText.w = pageListWidth
  //   listText.h = textHeight
  //   listText.stroke=255
  //   //this actually might not be needed. would prob do columns of text boxes instead >> lemme try re-writing this section w just lines 

  //   let listLine = new pageList.Sprite()
  //   // listLine.x = jiraOriginX+575
  //   listLine.y = (listText.y) - (listText.h/2)
  //   listLine.w = pageListWidth
  //   listLine.h = 1
  //   listLine.stroke=220
  // }
  // //need y of the last row and then add width/2 bc it's in middle 
  //   //(jiraOriginY + 200) + (textHeight*numRows) + (textHeight/2)
  listEndY = (jiraOriginY + 200) + (textHeight*numRows)
  listEnd = new pageList.Sprite(pageList.x , listEndY, pageListWidth, 1)
  listEnd.strokeWeight=1


  while (pageList.length<(numRows-1)){
    listLine = new pageList.Sprite()
    listLine.y = ((jiraOriginY + 200) + (textHeight*(pageList.length)))
    listLine.w = pageListWidth
    listLine.h = 0
    listLine.stroke=230
  }

  creat = new listBar.Sprite()
  creat.h = siteTabs.h
  creat.y = 5+ (listEnd.y + (listEnd.h/2)) + creat.h/2
  creat.w = pageLine3.w * 0.1
  creat.x = pageLine3.x + (creat.w/2)




  pageListColms = new Group()
  pageListColms.collider='s'
  pageListColms.color=230
  pageListColms.stroke=230
  pageListColms.strokeWeight=0.5
  pageListColms.layer= 3

  pageListColms.w = 0
  pageListColms.h = textHeight*(numRows-1)
  pageListColms.y = (jiraOriginY + 200) + (pageListColms.h/2) +textHeight
      // pageListColms.y = 460
      //first list line y -text height. move below h to use h (why adding extra text height?)


  colmKey = new pageListColms.Sprite()
    colmKey.x = pageList.x - 250
      // colmKey.x= 550
      // colmKey.x = (pageList.x - (pageList.w/2)) + 100
          //pageList.x = jiraOriginX+575; pageList.x - ( pageListWidth = jiraPage.w-400 /2)
  colmSum = new pageListColms.Sprite()
    colmSum.x = 750
  colmStat = new pageListColms.Sprite()
    colmStat.x = 850
  colmAssign = new pageListColms.Sprite()
    colmAssign.x = 1000
  colmPrio = new pageListColms.Sprite()
    colmPrio.x = 1075
    colmPrio.visible = false


    //refactor into array?
    // let colmArray = []
    // while(colmArray.length < 4){
    //   let colm = new pageListColms.Sprite()
    // }

    // colm[1].x=750


  // while (pageListColms.length<(numColms-1)){
  //   let listColms = new pageListColms.Sprite()
  //   listColms.y = ((jiraOriginY + 200) + (textHeight*(listColms.length)))

  //   listColms.w = pageListWidth
  //   listColms.h = 0
  //   listColms.stroke=230
  // }


// let key = []
//   while (key.length<3){
//     key.push(new Sprite())
//   }
//   key[1].text='test'
//   key.color = 255
    // also doesnt work bc not group, just array (doesnt work inside loop either)
  
  list = new Group()
  list.color = 255
  list.stroke = list.color
  list.collider = 's'
  list.layer= 1
  list.h=textHeight


  keyGroup = new Group()
  keyGroup.color = list.color
  keyGroup.stroke = list.color 
  keyGroup.collider= list.collider
  keyGroup.layer = list.layer
  
  keyGroup.h = list.h
  keyGroup.w = colmKey.x - (pageList.x-(pageListWidth/2))
  keyGroup.x = colmKey.x - (keyGroup.w /2)
  listOriginY = pageListColms.y - (pageListColms.h/2)
  keyGroup.y= listOriginY - (keyGroup.h/2)
  //thought about generalizing this group and moving location stuff into loop (then I can make 1 group for colm text and multiple arrays)but didn't work (generated in top corner of screen on top of each other)

  keyArray = []
  while (keyArray.length< (numRows-1)){
    keyText = new keyGroup.Sprite()
    keyArray.push(keyText)
    keyText.y = keyGroup.y + (keyArray.length * textHeight)
  }
  keyArray[0].text='# Key'


  sumGroup = new Group()
  sumGroup.color = list.color
  sumGroup.stroke = list.color 
  sumGroup.collider= list.collider
  sumGroup.layer = list.layer

  sumGroup.h = list.h
  sumGroup.w = colmSum.x - colmKey.x
  sumGroup.x = colmSum.x - (sumGroup.w /2)
  sumGroup.y= listOriginY - (sumGroup.h/2)

  sumArray = []
  while (sumArray.length<(numRows-1)){
    sumText = new sumGroup.Sprite()
    sumArray.push(sumText)
    sumText.y = sumGroup.y + (sumArray.length * textHeight)
  }
  sumArray[0].text='Summary'

  
  statGroup = new Group()
  statGroup.color = list.color
  statGroup.stroke = list.color 
  statGroup.collider= list.collider
  statGroup.layer = list.layer-1

  statGroup.h = list.h
  statGroup.w = colmStat.x - colmSum.x
  statGroup.x = colmStat.x - (statGroup.w /2)
  statGroup.y= listOriginY - (statGroup.h/2)

  statArray = []
  while (statArray.length<(numRows-1)){
    statText = new statGroup.Sprite()
    statArray.push(statText)
    statText.y = statGroup.y + (statArray.length * textHeight)
  }
  statArray[0].text='Status'
  statArray[0].layer = list.layer
  

  assignGroup = new Group()
  assignGroup.color = list.color
  assignGroup.stroke = list.color 
  assignGroup.collider= list.collider
  assignGroup.layer = list.layer

  assignGroup.h = list.h
  assignGroup.w = colmAssign.x - colmStat.x
  assignGroup.x = colmAssign.x - (assignGroup.w /2)
  assignGroup.y= listOriginY - (assignGroup.h/2)

  assignArray = []
  while (assignArray.length<(numRows-1)){
    assignText = new assignGroup.Sprite()
    assignArray.push(assignText)
    assignText.y = assignGroup.y + (assignArray.length * textHeight)
  }
  assignArray[0].text='Assignee'

  prioGroup = new Group()
  prioGroup.color = list.color
  prioGroup.stroke = list.color 
  prioGroup.collider= list.collider
  prioGroup.layer = list.layer

  prioGroup.h = list.h
  prioGroup.w = colmPrio.x - colmAssign.x
  prioGroup.x = colmPrio.x - (prioGroup.w /2)
  prioGroup.y= listOriginY - (prioGroup.h/2)

  prioArray = []
  while (prioArray.length<(numRows-1)){
    prioText = new prioGroup.Sprite()
    prioArray.push(prioText)
    prioText.y = prioGroup.y + (prioArray.length * textHeight)
  }
  prioArray[0].text='Priority'




  assignIconGroup = new Group()
  // assignIconGroup.color = 230
  assignIconGroup.stroke = list.color 
  assignIconGroup.collider= list.collider
  assignIconGroup.layer = list.layer
  assignIconGroup.d = list.h-5
  // assignIconGroup.w = colmAssign.x - colmStat.x
  assignIconGroup.x = colmStat.x + 25
  assignIconGroup.y= listOriginY - (assignIconGroup.d/2) - 2.5

  assignIconArray = []
  while (assignIconArray.length<(numRows)){
    assignIconText = new assignIconGroup.Sprite()
    assignIconArray.push(assignIconText)
    assignIconText.y = assignIconGroup.y + ((assignIconArray.length+1) * textHeight)
  }
  assignIconArray[1].visible = false
  assignIconArray[4].visible = false
  assignIconArray[6].visible = false
  assignIconArray[7].visible = false



  personSelect = new Group()
  personSelect.color=255
  personSelect.stroke=0
  personSelect.collider = 's'
  personSelect.layer = 4

  dropDownBox = new personSelect.Sprite()
  dropDownBox.x = assignArray[4].x
  dropDownBox.y = assignArray[6].y + (assignGroup.h/2)
  dropDownBox.w = assignGroup.w
  dropDownBox.h = (assignGroup.h * 5) + (assignGroup.h/2)
  dropDownBox.color = 255

  searchBox = new personSelect.Sprite()
  searchBox.x = assignArray[4].x
  searchBox.y = assignArray[4].y
  searchBox.w = assignGroup.w
  searchBox.h = assignGroup.h
  searchBox.layer = personSelect.layer + 1
  searchBox.color = 210
  searchBox.textColor = 0
  searchBox.text = 'Search for a person...      '

  instructionBox = new personSelect.Sprite()
  instructionBox.x = assignArray[4].x
  instructionBox.y = assignArray[5].y
  instructionBox.w = assignGroup.w - 8
  instructionBox.h = assignGroup.h - 8
  instructionBox.layer = personSelect.layer + 1
  instructionBox.color = 255
  instructionBox.stroke = instructionBox.color 
  instructionBox.textSize = 10
  instructionBox.text = 'Select one or more person'

  newHireBox = new personSelect.Sprite()
  newHireBox.x = assignArray[4].x
  newHireBox.y = assignArray[7].y + 7
  newHireBox.w = assignGroup.w - 12
  newHireBox.h = assignGroup.h + 5
  newHireBox.color = 255
  newHireBox.stroke = 255
  newHireBox.layer = personSelect.layer+1
  newHireBox.text = 'new hire'
  assignIconArray[11].layer = newHireBox.layer+1
  assignIconArray[11].y = assignIconArray[6].y +7

  hire1Box = new personSelect.Sprite()
  hire1Box.x = assignArray[4].x
  hire1Box.y = assignArray[6].y + 3
  hire1Box.w = assignGroup.w - 12
  hire1Box.h = assignGroup.h + 5
  hire1Box.color = 255
  hire1Box.stroke = 255
  hire1Box.layer = personSelect.layer+1
  hire1Box.text = 'hire 1'
  assignIconArray[10].layer = hire1Box.layer+1
  assignIconArray[10].y = assignIconArray[5].y +3


  hire2Box = new personSelect.Sprite()
  hire2Box.x = assignArray[4].x
  hire2Box.y = assignArray[8].y + 10
  hire2Box.w = assignGroup.w - 12
  hire2Box.h = assignGroup.h + 5
  hire2Box.color = 255
  hire2Box.stroke = 255
  hire2Box.layer = personSelect.layer+1
  hire2Box.text = 'hire 2'
  assignIconArray[12].layer = hire2Box.layer+1
  assignIconArray[12].y = assignIconArray[7].y +10

  //still have overlap issues
  // let test = new sumGroup.Sprite()
  // test.x = sumArray[2].x
  // test.y = sumArray[2].y
  // test.text = 'Another team member has just been added to a project.'

  for(let i=0; i<10; i++){
    sumArray[i].x = sumArray[i].x+20
  }

  sumArray[2].text = 'Another team member has just been added to a project.'
  
  sumArray[3].text = 'The new member is very skilled and can help the team meet'
  sumArray[4].text = 'their goals and deadlines in a faster and more efficient way.'
  sumArray[5].text = 'However, to do so, the amount of work they must do is'
  sumArray[6].text = 'significantly greater than that of the other team members.'
  sumArray[7].text = 'Yet, due to their capabilities, they will be able to'
  sumArray[8].text = 'handle the amount of tasks given. '
  sumArray[9].text = 'Should the team leader assign the new member such tasks?'

  



}



function draw() {
  background(220);

  assignIconGroup.overlap(assignGroup)
  

  // newHireBox.y = assignArray[7].y +7
  // newHireBox.w = assignGroup.w -10


  newHireBox.color = 255
  hire1Box.color = 255
  hire2Box.color = 255

  if (mouseX > (assignGroup.x - (assignGroup.w/2)) && mouseX < (assignGroup.x + (assignGroup.w/2))){
    if (mouseY  > (newHireBox.y - (newHireBox.h/2)) && mouseY < (newHireBox.y + (newHireBox.h/2))){
      newHireBox.color = 230
    } else if (mouseY  > (hire1Box.y - (hire1Box.h/2)) && mouseY < (hire1Box.y + (hire1Box.h/2))) {
      hire1Box.color = 230
    } else if (mouseY  > (hire2Box.y - (hire2Box.h/2)) && mouseY < (hire2Box.y + (hire2Box.h/2))){
      hire2Box.color = 230
    } 
  } 

  let text

  if (!toggleAssignBox){
    personSelect.visible = false
    assignIconArray[10].visible = false
    assignIconArray[11].visible = false
    assignIconArray[12].visible = false
  }
  if(toggleAssignBox){
    personSelect.visible = true
    assignIconArray[10].visible = true
    assignIconArray[11].visible = true
    assignIconArray[12].visible = true
  } 

  if (toggleHire1){
    assignIconArray[3].color = assignIconArray[10].color
    assignArray[4].text = 'hire 1'
  } 
  if (toggleNewHire){
    assignIconArray[3].color = assignIconArray[11].color
    assignArray[4].text = 'new hire'
  }
  if (toggleHire2){
    assignIconArray[3].color = assignIconArray[12].color
    assignArray[4].text = 'hire 2'
  }

  

}


function mousePressed(){

  if (mouseX > (assignGroup.x - (assignGroup.w/2)) && mouseX < (assignGroup.x + (assignGroup.w/2))) {
    
    if (mouseY  > (newHireBox.y - (newHireBox.h/2)) && mouseY < (newHireBox.y + (newHireBox.h/2))){
      toggleNewHire = !toggleNewHire
      toggleAssignBox = !toggleAssignBox
      toggleHire1 = false
      toggleHire2 = false
    } 
    if (mouseY  > (hire1Box.y - (hire1Box.h/2)) && mouseY < (hire1Box.y + (hire1Box.h/2))){
      toggleHire1 = !toggleHire1
      toggleAssignBox = !toggleAssignBox
      toggleNewHire = false
      toggleHire2 = false

    } 
    if (mouseY  > (hire2Box.y - (hire2Box.h/2)) && mouseY < (hire2Box.y + (hire2Box.h/2))) {
      toggleHire2 = !toggleHire2
      // toggleHire2 = true
      toggleAssignBox = !toggleAssignBox

      toggleNewHire = false
      toggleHire1 = false
    }
  }

  if (mouseX > (assignArray[4].x - (assignArray[4].w)) && mouseX < (assignArray[4].x + (assignArray[4].w/2)) && mouseY > (assignArray[4].y - (assignArray[4].h/2)) && mouseY < (assignArray[4].y + (assignArray[4].h/2))){
    toggleAssignBox = !toggleAssignBox
  }
  

}
