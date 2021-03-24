# <p><span>Pac-Man Thriller Edition</span><img align="right" src="https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png"></p>

<br/><br/>

<p align="center"><img src="images/thriller-logo-small.png"></p>

<br/><br/>

## Table of Contents
* [Overview](#overview)
* [Getting Started](#getting-started)
* [Project Brief](#brief)
* [Technologies Used](#technologies)
* [Approach](#approach)
* [Enhancements](#enhancements)
* [Wins, Challenges & Learnings](#wins-and-challenges)

<br/>

## <a name="overview"></a>Overview
This was my first project from the Software Engineering Immersive Course I took at General Assembly London, built after 4 weeks of class. This was also my first ever project as a developer. 

It was a **solo project** and the timeframe was **one week**.

I have created a grid based version of the classic game [Pac-Man](https://en.wikipedia.org/wiki/Pac-Man) using **HTML**, **CSS**, **Vanilla JavaScript** and **DOM Manipulation**. 

The theme of the game is inspired after Michael Jackson’s Thriller [video clip](https://www.youtube.com/watch?v=4V90AmXnguw). **Pac-Man** has been replaced by **Michael** and the traditional **ghosts** by **zombies**. **Power Pellets** are **Full Moons** and the **Bonus Fruit** has been replaced by **Pop Corn**.

>Access the **game** [here](https://fdepasse.github.io/pacman-thriller/) and the **repository** [here](https://github.com/fdepasse/pacman-thriller)


<br/>

## <a name="getting-started"></a>Getting Started
You can either install the source code on your own machine or play the game online.

### Run the Game on your Machine
* Click the "Code" button on the [repository](https://github.com/fdepasse/pacman-thriller) and choose either to **Clone** it or to **Download ZIP** the files
* Once the files are on your machine, open the index.html in the browser of your choice
<p align="center"><img src="images/github.png"></p>


### Play the Game Online
* Visit this [link](https://fdepasse.github.io/pacman-thriller/)
* Click the **Start Game** button to launch the game
* Once all characters have appeared start moving Michael using the **top**, **right**, **down** and **left** arrow keys of your keyboard
* Eat all dots and full moons to **win the game** while avoiding being caught by the zombies
* When Michael lands on a **Full Moon** he will turn into a Werewolf for 10 seconds and will have the ability to eat zombies and score extra points
* After reaching the 400 and 800 points markers a **Pop Corn** bonus worth 100 points will appear at a random location on the grid
* You will **lose the game** if you lose your 3 lives
* You can **reset** the game at any point by clicking the **Reset Game** button
* Points system: **Dots** 10 points, **Moons** 50 points, **Pop Corn** 100 points, **Zombie** (during Full Moon Mode) 200 points

<p align="center"><img src="images/navbar.png"></p>

> In pure classic Pac-Man style, once you have initiated the first movement, Michael will automatically carry on moving in the same direction until you press another arrow key or he encounters a grave stone or a zombie

<br/>

## <a name="brief"></a>Project Brief
* Render a game in the browser
* Design logic for winning & visually display which player won
* Include separate HTML / CSS / JavaScript files
* Stick with KISS (Keep It Simple Stupid) and DRY (Don’t Repeat Yourself) principles
* Use Javascript for DOM manipulation
* Deploy your game online, where the rest of the world can access it
* Use semantic markup for HTML and CSS (adhere to best practices)

<br/>

## <a name="technologies"></a>Technologies Used

### Frontend
* HTML
* CSS
* Vanilla JavaScript
* Google Fonts

### Development tools
* VS Code
* Git
* GitHub (including deployment)
* Google Chrome Dev Tools
* QuickTime Player (sound editing)
* Preview (pictures editing)
* Zoom
* Slack

<br/>

## <a name="approach"></a>Approach
### Step 1: Building the board
<p align="center"><img src="images/grid.png"></p>

#### Problem #1: Programatically generating a 18 x 18 square grid via DOM Manipulation
I used a **for loop** to create all the cells. I gave each of them an innerHTML (useful for debugging), an id (extensively used during the course of the game for the characters’ positions) and dimensions. I also pushed all cells to an array for future use.

```
for (let i = 0; i < gridWidth ** 2; i++) {
  const newCell = document.createElement(‘div’)
  grid.appendChild(newCell)
  newCell.innerHTML = i
  newCell.id = i
  newCell.style.width = `${100 / gridWidth}%`
  newCell.style.height = `${100 / gridWidth}%`
  allCells.push(newCell)
}
```
<br/>

#### Problem #2: Giving each cell the right class to represent "stones", "dots", "moons" and "tunnels"
I chose to store my cells by type within an object of arrays, each key being a cell type taking an array of cells as value as per below.

``` 
const cellsObject = {
stones: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 36, 54, 72, 90, 108, 126, 162, 180, 198, 216, 234, 252, 270, 288, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 305, 287, 269, 251, 233, 215, 197, 179, 143, 125, 107, 89, 71, 53, 35, 26, 44, 62, 63, 45, 27, 47, 48, 49, 50, 51, 69, 68, 67, 66, 65, 60, 59, 58, 57, 56, 38, 39, 40, 41, 42, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 114, 132, 134, 135, 153, 152, 137, 119, 139, 140, 141, 142, 127, 128, 129, 130, 168, 186, 187, 188, 189, 190, 191, 173, 175, 193, 194, 176, 177, 195, 196, 178, 163, 181, 164, 182, 165, 183, 166, 184, 206, 207, 225, 224, 222, 220, 219, 218, 236, 237, 238, 240, 258, 259, 260, 261, 262, 263, 245, 227, 229, 247, 248, 230, 231, 249, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285],
  dots: [291, 292, 290, 289, 293, 294, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 268, 267, 266, 265, 264, 257, 256, 254, 255, 253, 235, 217, 199, 200, 201, 202, 203, 221, 239, 204, 205, 223, 226, 208, 209, 210, 228, 246, 211, 212, 213, 214, 232, 250, 185, 185, 167, 145, 146, 147, 148, 149, 131, 113, 112, 111, 109, 110, 91, 73, 55, 19, 20, 21, 22, 23, 24, 25, 43, 61, 74, 75, 76, 77, 78, 79, 80, 81, 82, 64, 46, 28, 29, 30, 31, 32, 33, 34, 70, 83, 84, 85, 86, 87, 88, 106, 124, 123, 122, 121, 120, 138, 156, 174, 192, 157, 158, 159, 160],
  moons: [37, 52, 271, 286],
  tunnelright: 161,
  tunnelleft: 144
}
```
I then created a function to loop through each array in `cellsObject` and give each cell the relevant class on the board.

```
function giveClassToCells(array, className) {
  array.forEach((element) => {
    selectCellId(element).classList.add(className)
  })
}
giveClassToCells(cellsObject.stones, 'stone')
```

<br/>

<hr/>

### Step 2: Creating the characters
<p align="center"><img src="images/characters.png"></p>

#### <a name="position"></a>Problem #1: Storing information about the characters so it can be easily accessed to manipulate the DOM
I created a class of `Character` taking the following properties common to all characters: `charName` (a CSS class of the character), `startPosition` (a cell id number to know where to make the characters appear on the grid at first) and `position` (the cell id position where the character currently is at any point during the game).

```
class Character {
  constructor(charName, startPosition) {
    this.charName = charName
    this.startPosition = startPosition
    this.position = ''
  }
}
```

<br/>

#### <a name="char-spec"></a> Problem #2: Capturing each character specificities
For Michael, I needed an extra key-value pair to be able to change Michael's status between "Normal" and "Werewolf" depending if the Full Moon mode was activated or not. I have created an extension of the Character class to a class of Hero so I could add the status of Michael (mj = normal mode / mj-werewolf = full moon mode).

```
class Hero extends Character {
  constructor(charName, startPosition) {
    super(charName, startPosition)
    this.status = 'mj'
  }
}
```
For the zombies, I have stored the 4 objects in an array so I could manage their behaviour all at once by [looping through them](#zombies). 

```
const zombies = []
const zombMexican = new Character('mexican-zombie', 115)
const zombOffice = new Character('office-zombie', 118)
const zombNews = new Character('news-zombie', 169)
const zombPirate = new Character('pirate-zombie', 172)
zombies.push(zombMexican, zombOffice, zombNews, zombPirate)
```

<br/>

<hr/>

### Step 3: The Gameplay
#### <a name="variables"></a>Problem #1: Keeping track of the lives, the points scored, the full moon and pop corn modes
As these variables change during the game, they trigger specific events. Therefore, it was important to be able to check their status at all time. For this reason, I have stored them in global variables:

* `lives` set to 3 by default and decreases when Michael gets caught by zombies
* `points` set to 0 to start with and updates as the player eats dots, moons, pop corn and zombies when in Full Moon mode
* `fullMoon` set to false by default and switches to true when Michael lands on a moon
* `popCornTime` set to 0 by default and switches to 1 when 400 and 800 points are scored

<p align="center"><img src="images/variables.png"></p>


#### <a name="michael"></a>Problem #2: Moving Michael with the arrow keys of the keyboard, managing his behaviour and his impact on the game depending on the situation he encounters
Michael’s movements have been wrapped under a function called `michaelMoves()`. It listens to "keyup" events on the keyboard and returns the relevant set of behaviours depending on whether the key pressed is "up", "right", "down" or "left" (managed with an if statement). 

When a key is pressed:

* An interval running the code every 300ms allows Michael to move on his own
* If statements constantly check `michael.position` (property of `michael` [object](#position)) and his next move
* Depending on the type of cell he is landing on, the relevant logic is applied
* Points scoring is captured in this statement

```
function michaelMoves() {

  document.addEventListener('keyup', (event) => {
    const keyPressed = event.key

    if (keyPressed === 'ArrowRight') {
      clearInterval(michaelInterval)
      michaelInterval = setInterval(() => {
        removeMichael()
        if (michael.position === cellsObject.tunnelright) {
          michael.position = cellsObject.tunnelleft
          selectCellId(cellsObject.tunnelleft).classList.add(michael.status)
        } else if (selectCellId(michael.position + 1).classList.contains('stone')) {
          selectCellId(michael.position).classList.add(michael.status)
        } else if (selectCellId(michael.position + 1).classList.contains('dot')) {
          michael.position++
          selectCellId(michael.position).classList.add(michael.status)
          selectCellId(michael.position).classList.remove('dot')
          points += 10
          displayScore.innerHTML = points
...
      }, 300)
    }
```

<br/>

#### <a name="zombies"></a>Problem #3: Moving the Zombies randomly on the grid, managing their behaviour and their impact on the game depending on the situation they encounter
* I have used a `forEach` loop on the zombies array set in [Step 2](#char-spec) in order to run the same code on all 4 zombies
* The loop is wrapped in a interval allowing the characters to change direction every 300ms

```
    const gameInterval = setInterval(() => {
...
      zombies.forEach((zombie) => {
```

* I have stored all possible direction the zombies can take in a `zombieDirectionArray` array and I am then calculating and storing the characters next move in a variable `randomDirection`

`const randomDirection = zombieDirectionArray[Math.floor(Math.random() * zombieDirectionArray.length)]`

* If statements check first if the full moon mode is on or not and then the relevant logic applies depending on what cell each zombie land on
* The collision detection with Michael happens in this code block and the relevant logic happens if the full moon mode is on or not

```
...
 if (fullMoon === false) {
          if (zombie.position === michael.position) {
            clearInterval(gameInterval)
            removeMichael()
            selectCellId(zombie.position).classList.add(zombie.charName, 'zombie')
            lives--
            displayLives[lives].setAttribute('src', 'images/lives-lost.png')
            if (lives > 0) {
              setTimeout(() => {
                removeAllZombies()
              }, 1000)
              setTimeout(() => {
                allCells.forEach((cell) => {
                  cell.classList.remove(michael.status)
                })
                michaelToStartPosition()
                zombiesToStartPosition()
              }, 1000)
              playGame()
            } else {
              gameOver()
            }
...
```

<br/>

#### Problem #4: Implementing the Full Moon mode
##### Dealing with Michael's side of things in the `michaelMoves()` function


* When Michael lands on a "moon" it switches [`fullMoon`](#variables) to `true` if the full moon mode is not already on
* [`michael.status`](#char-spec) changes to `mj-werewolf` and allows Michael to turn into a Werewolf
* The appearance of the whole page changes
* A `setTimeout` make sure the full moon mode ends after 10s and that Michael and the page appearance return to normal mode

```
...
else if (selectCellId(michael.position + 1).classList.contains('moon')) {
          michael.position++
          selectCellId(michael.position).classList.add(michael.status)
          selectCellId(michael.position).classList.remove('moon')
          points += 50
          displayScore.innerHTML = points
          if (fullMoon === false) {
            fullMoon = true
            removeMichael()
            michael.status = 'mj-werewolf'
            selectCellId(michael.position).classList.add(michael.status)
            logo.setAttribute('src', 'images/full-moon.png')
            logo.setAttribute('alt', 'Full Moon')
            logo.style.width = '20%'
            logo.style.padding = '0 0 7.5% 0'
            setTimeout(() => {
              removeMichael()
              fullMoon = false
              michael.status = 'mj'
              selectCellId(michael.position).classList.add(michael.status)
              logo.setAttribute('src', 'images/thriller-logo.png')
              logo.setAttribute('alt', 'Thriller Logo')
              logo.style.width = '50%'
            }, 10000)
          }
...
```
<p align="center"><img src="images/mj-werewolf-small.png"></p>

##### Dealing with the zombies' side of things in the [`forEach`](#zombies) loop
* Michael as a werewolf can eat the zombies and score 200 points in the process 
* Zombies enter scared mode and take a class of “zombie-scared” which makes them shake
* Once eaten, Zombies appear back on their starting position after 5s

```
if (fullMoon === true) {
          //  What happens if Zombies encounter Michael Werewolf
          if (zombie.position === michael.position) {
            selectCellId(zombie.position).classList.remove(zombie.charName, 'zombie-scared')
            zombie.position = zombie.startPosition
            points += 200
            displayScore.innerHTML = points
            setTimeout(() => {
              selectCellId(zombie.position).classList.add(zombie.charName, 'zombie-scared')
            }, 5000)
```

<br/>

#### Problem #5: Implementing the Pop Corn mode
* Once 400 and 800 points have been reached a “Pop - Corn” bonus appear randomly on the board. If eaten by Michael it gives an extra 100 points to the player
<p align="center"><img src="images/pop-corn-small.png"></p>

* When points reaches 400 and 800 points, an if statement increment `popCornTime` to 1 and calls the function `popCornMode()`

```
      if (points === 400 || points === 800) {
        popCornTime++
        popCornMode()
      }
```

* `popCornMode()` gets a random location on the grid (calling `popCornRandomLocation()`) for the pop corn to appear and set the class of Pop Corn on the selected cell
* A `setTimeout` ensures the mode lasts 10s only 

``` javascript
function popCornMode() {
  if (popCornTime === 1) {
    popCornRandomLocation()
    selectCellId(popCornPosition).classList.add('pop-corn')
    return setTimeout(() => {
      selectCellId(popCornPosition).classList.remove('pop-corn')
      popCornTime = 0
    }, 10000)
  }
}
```

<br/>


### Step 4: Bringing it all together
#### Problem #1: Running the game
* A `playGame()` function runs the entire game
* `setTimeout` are in place to ensure music and game start playing after a few seconds it [started](#start)
* The game runs on a 300ms interval which allows to make the zombies move, check if the pop corn mode needs to be activated and if the game should carry on running or stop (game [won](#win) or [lost](#lose))

```
function playGame() {

  setTimeout(() => {
    audioPlayer.src = 'sounds/beat.m4a'
    audioPlayer.loop = 'loop'
    audioPlayer.play()
  }, 1130)

  setTimeout(() => {

    const gameInterval = setInterval(() => {
      gameWon(gameInterval)
...
    }, 300)
  }, 2000)
}
```

<br/>

#### <a name="start"></a>Problem #2: Starting the game
* The game starts when the “Start Game” button is clicked by calling the `playGame()` function within an event listener
* The `playGame()`  function is called 3 seconds after the button is clicked leaving time for the intro music to play and for the grid and characters to appear, all being managed with timeouts
* [`michaelMoves()`](#michael) function is also called at this point

```
document.querySelector('#start').addEventListener('click', () => {
  audioPlayer.src = 'sounds/intro.m4a'
  audioPlayer.play()
  setTimeout(() => {
    giveClassToCells(cellsObject.dots, 'dot')
    giveClassToCells(cellsObject.moons, 'moon')
  }, 2300)
  setTimeout(() => {
    zombiesToStartPosition()
    michaelToStartPosition()
    michaelMoves()
    playGame()
  }, 3000)
})
```
<br/>

#### <a name="win"></a>Problem #3: Winning the game
* `gameWon(gameInterval)` is called within the [`playGame()`](#start) function at the start of each interval
* I passed the `gameInterval` as argument so it can be cleared within the function
* The function itself check if any dots or moons are left on the board and if not the game is won, the winning screen appears

```
function gameWon(intervalName) {
  if (areDotOrMoonsLeft() === false) {
    clearInterval(intervalName)
    audioPlayer.src = 'sounds/game-won.m4a'
    audioPlayer.loop = ''
    audioPlayer.play()
    grid.style.display = 'none'
    displayResult.style.display = 'flex'
    displayResultTitle.innerHTML = 'Congratulations, you moonwalked this!'
    displayResultImage.setAttribute('src', 'images/mj-happy.png')
    displayResultImage.setAttribute('alt', 'Michael Jackson Happy')
    displayFinalScore.innerHTML = `You scored ${points} points`
    logo.setAttribute('src', 'images/thriller-logo.png')
    logo.setAttribute('alt', 'Thriller Logo')
    logo.style.width = '50%'
  }
}
```
<p align="center"><img src="images/winning-screen.png"></p>
<br/>

#### <a name="lose"></a>Problem #4: Losing the game
* The zombies loop checks how many lives are left and calls the `gameOver()` function when none are left (see [code block](#zombies) above)
* The `gameOver()` function make the losing screen appear and stops the game

```
function gameOver() {
  audioPlayer.src = 'sounds/game-over.m4a'
  audioPlayer.loop = ''
  audioPlayer.play()
  grid.style.display = 'none'
  displayResult.style.display = 'flex'
  displayResultTitle.innerHTML = 'Game Over'
  displayResultImage.setAttribute('src', 'images/mj-zombie.png')
  displayResultImage.setAttribute('alt', 'Zombie Michael Jackson')
  displayFinalScore.innerHTML = `You scored ${points} points`
}
```
<p align="center"><img src="images/losing-screen.png"></p>
<br/>

### Step 5: Styling
I have entirely styled the game with pure CSS and using a [normalised CSS file](https://necolas.github.io/normalize.css/). CSS Classes have been key during the development of the game. I have been able to toggle them on and off to render the characters movements on the page.

## <a name="enhancements"></a>Enhancements
### Remaining Bugs
The collision detection within Michael and the Zombies is not perfect. Sometimes Michael can go through the zombies.

<br/>

### Potential Future Enhancements
* Enhanced collision management between Michael, zombies and between the 4 zombies
* Smart zombies that will track Michael using path finding algorithm
* Different behaviour for each zombie
* Zombies not moving all at the same time when the game start
* Scoreboard using local storage
* Mobile responsiveness
* Multiple grids and levels
* Multiple bonus items in addition to pop corn
* Cumulative points when eating zombies

<br/>

## <a name="wins-and-challenges"></a>Wins, Challenges & Learnings
### Wins
* Building a game with complex logic using JavaScript
* Styling the game after the Thriller theme
* Working with Timeouts and Intervals, understanding them when nested

### Challenges
* Keeping the code simple and not repete it, there is definitely room for improvement
* Dealing with nested Timeouts and Intervals

### Learnings
* Great practice of my HTML, CSS, JavaScript and DOM Manipulation fundamentals
* Deployement online via GitHub