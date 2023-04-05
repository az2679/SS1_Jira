
let jiraPage, jiraOriginX, jiraOriginY, jiraEndX, jiraEndY;
let pageLine, pageLine1, pageLine2, pageLine3

let numRows, pageList, textHeight, pageListWidth;
let listEnd, listEndY;

function setup() {
  createCanvas(1400, 2400);

  jiraPage = new Sprite(700, 400, 1000, 700)
  jiraPage.collider='s'
  jiraPage.color='white'
  jiraPage.stroke='black'

  //700-(1000/2)=200. so origin is 200 >> instead of -/+ in refactoring. convery with w/h
  jiraOriginX= jiraPage.x-(jiraPage.w/2)
  jiraOriginY= jiraPage.y-(jiraPage.h/2)
  jiraEndX= jiraOriginX+jiraPage.w
  jiraEndY= jiraOriginY+jiraPage.h

  pageLine = new Group()
  pageLine.collider='s'
  pageLine.stroke=230
  pageLine.strokeWeight=2

  pageLine1 = new pageLine.Sprite([[jiraOriginX+2, jiraOriginY+50], [jiraEndX-2, jiraOriginY+50]])
  pageLine2 = new pageLine.Sprite([[jiraOriginX+250, jiraOriginY+50], [jiraOriginX+250, jiraEndY-2]])
  pageLine3 = new pageLine.Sprite([[jiraOriginX+275, jiraOriginY+150], [jiraEndX-25, jiraOriginY+150]])

  //redundancy, necessary for new group? 
  pageList = new Group()
  pageList.collider='s'
  pageList.color=255
  pageList.stroke=230
  pageList.strokeWeight=0.5

  textHeight = 30
  numRows = 13

  // listStartX = jiraOriginX+575
  // listWidth = jiraPage.w-400
  pageList.x = jiraOriginX+575
  // pageList.w = jiraPage.w-400
    //makes them circles
  pageListWidth = jiraPage.w-400

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



  // numColms = 5

  pageListColms = new Group()
  pageListColms.collider='s'
  pageListColms.color=230
  pageListColms.stroke=0
  pageListColms.strokeWeight=0.5

  // pageListColms.y = 460
  //first list line y -text height. move below h to use h (why adding extra text height?)
  pageListColms.w = 0
  pageListColms.h = textHeight*(numRows-1)
  pageListColms.y = (jiraOriginY + 200) + (pageListColms.h/2) +textHeight

  //pageList.x = jiraOriginX+575. pageList.x - ( pageListWidth = jiraPage.w-400 /2)
  let colmKey = new pageListColms.Sprite()
  // colmKey.x= 550
  // colmKey.x = (pageList.x - (pageList.w/2)) + 100
  colmKey.x = pageList.x - 250
  let colmSum = new pageListColms.Sprite()
  colmSum.x = 750
  let colmStat = new pageListColms.Sprite()
  colmStat.x = 850
  let colmAssign = new pageListColms.Sprite()
  colmAssign.x = 1000
  // let colmPrio = new pageListColms.Sprite()
  // colmPrio.x = 1050

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


 





}



function draw() {
  background(220);

  



}


