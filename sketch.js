
let jiraPage, jiraOriginX, jiraOriginY, jiraEndX, jiraEndY;
let pageLine, pageLine1, pageLine2, pageLine3

let numRows, pageList, textHeight, pageListWidth;
let listEnd, listEndY;

let keyGroup, keyArray, key, keyGY;

let newHireBox;

function setup() {
  createCanvas(1400, 2400);

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

  //redundancy, necessary for new group? 
  pageList = new Group()
  pageList.collider='s'
  pageList.color=255
  pageList.stroke=230
  pageList.strokeWeight=0.5
  pageList.layer = 2

  textHeight = 30
  numRows = 13

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
    let listLine = new pageList.Sprite()
    listLine.y = ((jiraOriginY + 200) + (textHeight*(pageList.length)))
    listLine.w = pageListWidth
    listLine.h = 0
    listLine.stroke=230
  }





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


  let colmKey = new pageListColms.Sprite()
  colmKey.x = pageList.x - 250
      // colmKey.x= 550
      // colmKey.x = (pageList.x - (pageList.w/2)) + 100
          //pageList.x = jiraOriginX+575; pageList.x - ( pageListWidth = jiraPage.w-400 /2)
  let colmSum = new pageListColms.Sprite()
  colmSum.x = 750
  let colmStat = new pageListColms.Sprite()
  colmStat.x = 850
  let colmAssign = new pageListColms.Sprite()
  colmAssign.x = 1000
  let colmPrio = new pageListColms.Sprite()
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
  
  let list = new Group()
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
    let keyText = new keyGroup.Sprite()
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
    let sumText = new sumGroup.Sprite()
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
    let statText = new statGroup.Sprite()
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
    let assignText = new assignGroup.Sprite()
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
    let prioText = new prioGroup.Sprite()
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
  while (assignIconArray.length<(numRows-3)){
    let assignIconText = new assignIconGroup.Sprite()
    assignIconArray.push(assignIconText)
    assignIconText.y = assignIconGroup.y + ((assignIconArray.length+1) * textHeight)
  }


  let personSelect = new Group()
  personSelect.color=255
  personSelect.stroke=0
  personSelect.collider = 's'
  personSelect.layer = 4

  let dropDownBox = new personSelect.Sprite()
  dropDownBox.x = assignArray[4].x
  dropDownBox.y = assignArray[6].y + (assignGroup.h/2)
  dropDownBox.w = assignGroup.w
  dropDownBox.h = (assignGroup.h * 5) + (assignGroup.h/2)
  dropDownBox.color = 255

  let searchBox = new personSelect.Sprite()
  searchBox.x = assignArray[4].x
  searchBox.y = assignArray[4].y
  searchBox.w = assignGroup.w
  searchBox.h = assignGroup.h
  searchBox.layer = personSelect.layer+1
  searchBox.color = 210
  searchBox.textColor = 0
  searchBox.text = 'Search for a person...      '

  let instructionBox = new personSelect.Sprite()
  instructionBox.x = assignArray[4].x
  instructionBox.y = assignArray[5].y
  instructionBox.w = assignGroup.w -8
  instructionBox.h = assignGroup.h -8
  instructionBox.layer = personSelect.layer+1
  instructionBox.color = 255
  instructionBox.stroke = instructionBox.color 
  instructionBox.textSize = 10
  instructionBox.text = 'Select one or more person'

  newHireBox = new personSelect.Sprite()
  newHireBox.x = assignArray[4].x
  newHireBox.y = assignArray[7].y + 7
  newHireBox.w = assignGroup.w - 2
  newHireBox.h = assignGroup.h +5
  newHireBox.color = 255
  newHireBox.stroke = 255
  newHireBox.layer = personSelect.layer+1
  newHireBox.text = 'new hire'
  assignIconArray[6].layer = newHireBox.layer+1
  assignIconArray[6].y = assignIconArray[6].y +7

  hire1Box = new personSelect.Sprite()
  hire1Box.x = assignArray[4].x
  hire1Box.y = assignArray[6].y + 3
  hire1Box.w = assignGroup.w - 2
  hire1Box.h = assignGroup.h +5
  hire1Box.color = 255
  hire1Box.stroke = 255
  hire1Box.layer = personSelect.layer+1
  hire1Box.text = 'hire 1'
  assignIconArray[5].layer = newHireBox.layer+1
  assignIconArray[5].y = assignIconArray[5].y +3


  hire2Box = new personSelect.Sprite()
  hire2Box.x = assignArray[4].x
  hire2Box.y = assignArray[8].y + 10
  hire2Box.w = assignGroup.w - 2
  hire2Box.h = assignGroup.h +5
  hire2Box.color = 255
  hire2Box.stroke = 255
  hire2Box.layer = personSelect.layer+1
  hire2Box.text = 'hire 1'
  assignIconArray[7].layer = newHireBox.layer+1
  assignIconArray[7].y = assignIconArray[7].y +10

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

  if(mouseX > assignGroup.x && mouseX < (assignGroup.x + assignGroup.w)){
    if (mouseY  > newHireBox.y && mouseY < (newHireBox.y + newHireBox.h)){
      newHireBox.w = assignGroup.w -10
      newHireBox.color = 230
      hire1Box.w = assignGroup.w - 2
      hire1Box.color = 255
      hire2Box.w = assignGroup.w - 2
      hire1Box.color = 255

    } else if (mouseY  > hire1Box.y && mouseY < (hire1Box.y + hire1Box.h)) {
      hire1Box.w = assignGroup.w - 10
      hire1Box.color = 230
      newHireBox.w = assignGroup.w - 2
      newHireBox.color = 255
      hire2Box.w = assignGroup.w - 2
      hire2Box.color = 255
    } else if (mouseY  > hire2Box.y && mouseY < (hire2Box.y + hire2Box.h)) {
      hire2Box.w = assignGroup.w - 10
      hire2Box.color = 230
      newHireBox.w = assignGroup.w - 2
      newHireBox.color = 255
      hire1Box.w = assignGroup.w - 2
      hire1Box.color = 255
    } else {
      newHireBox.w = assignGroup.w - 2
      newHireBox.color = 255
      hire1Box.w = assignGroup.w - 2
      hire1Box.color = 255
      hire2Box.w = assignGroup.w - 2
      hire2Box.color = 255
    }
}


}


