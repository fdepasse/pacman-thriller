// ! SETTING THE GRID UP

const grid = document.querySelector('#grid')
const gridWidth = 18
const cellsObject = {
  stones: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 36, 54, 72, 90, 108, 126, 162, 180, 198, 216, 234, 252, 270, 288, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 305, 287, 269, 251, 233, 215, 197, 179, 143, 125, 107, 89, 71, 53, 35, 26, 44, 62, 63, 45, 27, 47, 48, 49, 50, 51, 69, 68, 67, 66, 65, 60, 59, 58, 57, 56, 38, 39, 40, 41, 42, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 114, 132, 134, 135, 153, 152, 137, 119, 139, 140, 141, 142, 127, 128, 129, 130, 168, 186, 187, 188, 189, 190, 191, 173, 175, 193, 194, 176, 177, 195, 196, 178, 163, 181, 164, 182, 165, 183, 166, 184, 206, 207, 225, 224, 222, 220, 219, 218, 236, 237, 238, 240, 258, 259, 260, 261, 262, 263, 245, 227, 229, 247, 248, 230, 231, 249, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285],
  dots: [291, 292, 290, 289, 293, 294, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 268, 267, 266, 265, 264, 257, 256, 254, 255, 253, 235, 217, 199, 200, 201, 202, 203, 221, 239, 204, 205, 223, 226, 208, 209, 210, 228, 246, 211, 212, 213, 214, 232, 250, 185, 185, 167, 145, 146, 147, 148, 149, 131, 113, 112, 111, 109, 110, 91, 73, 55, 19, 20, 21, 22, 23, 24, 25, 43, 61, 74, 75, 76, 77, 78, 79, 80, 81, 82, 64, 46, 28, 29, 30, 31, 32, 33, 34, 70, 83, 84, 85, 86, 87, 88, 106, 124, 123, 122, 121, 120, 138, 156, 174, 192, 157, 158, 159, 160],
  moons: [37, 52, 271, 286],
  tunnelright: 161,
  tunnelleft: 144
}

// ? Useful to grab a cell by its id
function selectCellId(cellId) {
  return document.getElementById(cellId)
}

const allCells = []

// ? Generates the empty grid
for (let i = 0; i < gridWidth ** 2; i++) {
  const newCell = document.createElement('div')
  grid.appendChild(newCell)
  newCell.innerHTML = i
  newCell.id = i
  newCell.style.width = `${100 / gridWidth}%`
  newCell.style.height = `${100 / gridWidth}%`
  allCells.push(newCell)
}

console.log(allCells)

// ? Set classes to each cell
// * Stores, dots and moons in arrays of the cellsObject
function giveClassToCells(array, className) {
  array.forEach((element) => {
    selectCellId(element).classList.add(className)
  })
}
giveClassToCells(cellsObject.stones, 'stone')

// * Tunnels as a property of cellsObject
function giveClasstoTunnel(cell, className) {
  selectCellId(cell).classList.add(className)
}
giveClasstoTunnel(cellsObject.tunnelright, 'tunnel-right')
giveClasstoTunnel(cellsObject.tunnelleft, 'tunnel-left')

// Tool to draw ther grid in the browser then copy and pasting the array frpm the console
// const cells = document.querySelectorAll('#grid div')
// cells.forEach((div) => {
//   div.addEventListener('click', () => {
//     div.classList.add('dot')
//     cellsObject.dots.push(div.innerHTML)
//     console.log(cellsObject.dots)
//   })
// })



//  ! CREATING THE CHARACTERS

// * Character Class
class Character {
  constructor(charName, startPosition) {
    this.charName = charName
    this.startPosition = startPosition
    this.position = ''
  }
}

class Hero extends Character {
  constructor(charName, startPosition) {
    super(charName, startPosition)
    this.status = 'mj'
  }
}

// * MJ
const michael = new Hero('michael', 243)

// * Zombies
const zombies = []
const zombMexican = new Character('mexican-zombie', 115)
const zombOffice = new Character('office-zombie', 118)
const zombNews = new Character('news-zombie', 169)
const zombPirate = new Character('pirate-zombie', 172)
zombies.push(zombMexican, zombOffice, zombNews, zombPirate)

// ! GAME VARIABLES AND FUNCTIONS

// ? Full Moon Mode
let fullMoon = false
const logo = document.querySelector('#logo')

// ? Score and Result
let points = 0

// * Display the score during the game
const displayScore = document.querySelector('#points')
displayScore.innerHTML = points

// * Display the result at the end of the game
const displayResult = document.querySelector('#display-result')
const displayResultTitle = document.querySelector('#result-title')
const displayResultImage = document.querySelector('#result-image')
const displayFinalScore = document.querySelector('#result-score')

// * Winning and Losing the game
const dotsAndMoonsArray = cellsObject.dots.concat(cellsObject.moons)

// Check is there are still some dots and moons to take
function areDotOrMoonsLeft() {
  return dotsAndMoonsArray.some((cell) => {
    return selectCellId(cell).className === 'dot' || selectCellId(cell).className === 'moon'
  })
}

// Display the result when the game is won
function gameWon() {
  if (areDotOrMoonsLeft() === false) {
    grid.style.display = 'none'
    displayResult.style.display = 'flex'
    displayResultTitle.innerHTML = 'Congratulations, you moonwalked this!'
    displayResultImage.setAttribute('src', 'images/mj-happy.png')
    displayResultImage.setAttribute('alt', 'Michael Jackson Happy')
    displayFinalScore.innerHTML = `You scored ${points} points`
  }
}

// Display the result when the game is lost
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


// ? Lives
let lives = 3
const displayLives = Array.from(document.querySelectorAll('.one-life'))


// ? Pop Corn Bonus
let popCornPosition

function popCornRandomLocation() {
  const popCornPossibleLocations = [115, 116, 117, 118, 133, 136, 151, 154, 169, 170, 171, 172, 241, 242, 243, 244]
  const randomLocation = popCornPossibleLocations[Math.floor((Math.random() * popCornPossibleLocations.length))]
  return popCornPosition = randomLocation
}

let popCornTime = 0

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

// ! AUDIO
const audioPlayer = document.querySelector('audio')


// ! GAMEPLAY

// ? MICHAEL MOVEMENTS

function michaelToStartPosition() {
  michael.position = michael.startPosition
  selectCellId(michael.position).classList.add(michael.status)
}

// * Useful to remove Michael from the grid when needed
function removeMichael() {
  selectCellId(michael.position).classList.remove(michael.status)
}

// * Set the directoions variables for intervals
let michaelInterval

// * Michael appears on the grid

// * Michael moves with arrow keys are pressed

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
        } else if (selectCellId(michael.position + 1).classList.contains('moon')) {
          michael.position++
          selectCellId(michael.position).classList.add(michael.status)
          selectCellId(michael.position).classList.remove('moon')
          points += 50
          displayScore.innerHTML = points
          fullMoon = true
          logo.setAttribute('src', 'images/full-moon.png')
          logo.setAttribute('alt', 'Full Moon')
          logo.style.width = '20%'
          logo.style.padding = '0 0 7.5% 0'
        } else if (selectCellId(michael.position + 1).classList.contains('pop-corn')) {
          michael.position++
          selectCellId(michael.position).classList.add(michael.status)
          selectCellId(michael.position).classList.remove('pop-corn')
          points += 100
          displayScore.innerHTML = points
        } else {
          michael.position++
          selectCellId(michael.position).classList.add(michael.status)
        }
      }, 300)
    }
    if (keyPressed === 'ArrowLeft') {
      clearInterval(michaelInterval)
      michaelInterval = setInterval(() => {
        removeMichael()
        if (michael.position === cellsObject.tunnelleft) {
          michael.position = cellsObject.tunnelright
          selectCellId(cellsObject.tunnelright).classList.add(michael.status)
        } else if (selectCellId(michael.position - 1).classList.contains('stone')) {
          selectCellId(michael.position).classList.add(michael.status)
        } else if (selectCellId(michael.position - 1).classList.contains('dot')) {
          michael.position--
          selectCellId(michael.position).classList.add(michael.status)
          selectCellId(michael.position).classList.remove('dot')
          points += 10
          displayScore.innerHTML = points
        } else if (selectCellId(michael.position + 1).classList.contains('moon')) {
          michael.position--
          selectCellId(michael.position).classList.add(michael.status)
          selectCellId(michael.position).classList.remove('moon')
          points += 50
          displayScore.innerHTML = points
          fullMoon = true
          logo.setAttribute('src', 'images/full-moon.png')
          logo.setAttribute('alt', 'Full Moon')
          logo.style.width = '20%'
          logo.style.padding = '0 0 7.5% 0'
        } else if (selectCellId(michael.position - 1).classList.contains('pop-corn')) {
          michael.position--
          selectCellId(michael.position).classList.add(michael.status)
          selectCellId(michael.position).classList.remove('pop-corn')
          points += 100
          displayScore.innerHTML = points
        } else {
          michael.position--
          selectCellId(michael.position).classList.add(michael.status)
        }
      }, 300)
    }
    if (keyPressed === 'ArrowUp') {
      clearInterval(michaelInterval)
      michaelInterval = setInterval(() => {
        removeMichael()
        if (selectCellId(michael.position - gridWidth).classList.contains('stone')) {
          selectCellId(michael.position).classList.add(michael.status)
        } else if (selectCellId(michael.position - gridWidth).classList.contains('dot')) {
          michael.position -= gridWidth
          selectCellId(michael.position).classList.add(michael.status)
          selectCellId(michael.position).classList.remove('dot')
          points += 10
          displayScore.innerHTML = points
        } else if (selectCellId(michael.position - gridWidth).classList.contains('moon')) {
          michael.position -= gridWidth
          selectCellId(michael.position).classList.add(michael.status)
          selectCellId(michael.position).classList.remove('moon')
          points += 50
          displayScore.innerHTML = points
          fullMoon = true
          logo.setAttribute('src', 'images/full-moon.png')
          logo.setAttribute('alt', 'Full Moon')
          logo.style.width = '20%'
          logo.style.padding = '0 0 7.5% 0'
        } else if (selectCellId(michael.position - gridWidth).classList.contains('pop-corn')) {
          michael.position -= gridWidth
          selectCellId(michael.position).classList.add(michael.status)
          selectCellId(michael.position).classList.remove('pop-corn')
          points += 100
          displayScore.innerHTML = points
        } else {
          michael.position -= gridWidth
          selectCellId(michael.position).classList.add(michael.status)
        }
      }, 300)
    }
    if (keyPressed === 'ArrowDown') {
      clearInterval(michaelInterval)
      michaelInterval = setInterval(() => {
        removeMichael()
        if (selectCellId(michael.position + gridWidth).classList.contains('stone')) {
          selectCellId(michael.position).classList.add(michael.status)
        } else if (selectCellId(michael.position + gridWidth).classList.contains('dot')) {
          michael.position += gridWidth
          selectCellId(michael.position).classList.add(michael.status)
          selectCellId(michael.position).classList.remove('dot')
          points += 10
          displayScore.innerHTML = points
        } else if (selectCellId(michael.position + gridWidth).classList.contains('moon')) {
          michael.position += gridWidth
          selectCellId(michael.position).classList.add(michael.status)
          selectCellId(michael.position).classList.remove('moon')
          points += 50
          displayScore.innerHTML = points
          fullMoon = true
          logo.setAttribute('src', 'images/full-moon.png')
          logo.setAttribute('alt', 'Full Moon')
          logo.style.width = '20%'
          logo.style.padding = '0 0 7.5% 0'
        } else if (selectCellId(michael.position + gridWidth).classList.contains('pop-corn')) {
          michael.position += gridWidth
          selectCellId(michael.position).classList.add(michael.status)
          selectCellId(michael.position).classList.remove('pop-corn')
          points += 100
          displayScore.innerHTML = points
        } else {
          michael.position += gridWidth
          selectCellId(michael.position).classList.add(michael.status)
        }
      }, 300)
    }
  })
}


// ? ZOMBIES ON THE GRID

// * Zombies appear on the grid
function zombiesToStartPosition() {
  return zombies.forEach((zombie) => {
    zombie.position = zombie.startPosition
    selectCellId(zombie.position).classList.add(zombie.charName, 'zombie')
  })
}

// * Function to clear all zommbies from the grid
function removeAllZombies() {
  return zombies.forEach((zombie) => {
    selectCellId(zombie.position).classList.remove(zombie.charName, 'zombie', 'zombie-scared')
  })
}


// ? GAMEPLAY FUNCTION WITH ZOMBIE BEHAVIOUR

function playGame() {

  setTimeout(() => {
    audioPlayer.src = 'sounds/beat.m4a'
    audioPlayer.loop = 'loop'
    audioPlayer.play()
  }, 1130)

  // * Storing all possible directions for the Zombies
  const zombieDirectionArray = [1, -1, gridWidth, -gridWidth]

  // * Timeout to start the game after a couple of seconds
  setTimeout(() => {

    const gameInterval = setInterval(() => {

      // * Make the pop corn appear if there number of points is reached
      popCornMode()

      // * Check is there are still any dots or moon on the board
      // * If not game is won
      gameWon()


      zombies.forEach((zombie) => {

        // * Create a const to store the next move
        const randomDirection = zombieDirectionArray[Math.floor(Math.random() * zombieDirectionArray.length)]

        // * Remove the zombie class at the start of each loop
        selectCellId(zombie.position).classList.remove(zombie.charName, 'zombie', 'zombie-scared')

        if (fullMoon === false) {
          // * What happens if Zombies encounter Michael
          if (zombie.position === michael.position) {
            clearInterval(gameInterval)
            removeMichael()
            selectCellId(zombie.position).classList.add(zombie.charName, 'zombie')
            if (lives > 0) {
              lives--
              displayLives[lives].setAttribute('src', 'images/lives-lost.png')
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
            // * How the Zombie navigate the grid (move randomly avoiding stones, going through tunnel etc)
          } else if (zombie.position === cellsObject.tunnelright) {
            if (randomDirection === 1) {
              zombie.position = cellsObject.tunnelleft
              selectCellId(cellsObject.tunnelleft).classList.add(zombie.charName, 'zombie')
            } else {
              zombie.position--
              selectCellId(zombie.position).classList.add(zombie.charName, 'zombie')
            }
          } else if (zombie.position === cellsObject.tunnelleft) {
            if (randomDirection === -1) {
              zombie.position = cellsObject.tunnelright
              selectCellId(cellsObject.tunnelright).classList.add(zombie.charName, 'zombie')
            } else {
              zombie.position++
              selectCellId(zombie.position).classList.add(zombie.charName, 'zombie')
            }
          } else if (selectCellId(zombie.position + randomDirection).classList.contains('stone')) {
            selectCellId(zombie.position).classList.add(zombie.charName, 'zombie')
          } else {
            zombie.position += randomDirection
            selectCellId(zombie.position).classList.add(zombie.charName, 'zombie')
          }
        } if (fullMoon === true) {
          // * Transformation michael and page
          removeMichael()
          michael.status = 'mj-werewolf'
          selectCellId(michael.position).classList.add(michael.status)

          // * What happens if Zombies encounter Michael Werewolf
          if (zombie.position === michael.position) {
            selectCellId(zombie.position).classList.remove(zombie.charName, 'zombie-scared')
            zombie.position = zombie.startPosition
            points += 200
            displayScore.innerHTML = points
            setTimeout(() => {
              selectCellId(zombie.position).classList.add(zombie.charName, 'zombie-scared')
            }, 5000)

            // * How the Zombie navigate the grid (move randomly avoiding stones, going through tunnel etc)
          } else if (zombie.position === cellsObject.tunnelright) {
            if (randomDirection === 1) {
              zombie.position = cellsObject.tunnelleft
              selectCellId(cellsObject.tunnelleft).classList.add(zombie.charName, 'zombie-scared')
            } else {
              zombie.position--
              selectCellId(zombie.position).classList.add(zombie.charName, 'zombie-scared')
            }
          } else if (zombie.position === cellsObject.tunnelleft) {
            if (randomDirection === -1) {
              zombie.position = cellsObject.tunnelright
              selectCellId(cellsObject.tunnelright).classList.add(zombie.charName, 'zombie-scared')
            } else {
              zombie.position++
              selectCellId(zombie.position).classList.add(zombie.charName, 'zombie-scared')
            }
          } else if (selectCellId(zombie.position + randomDirection).classList.contains('stone')) {
            selectCellId(zombie.position).classList.add(zombie.charName, 'zombie-scared')
          } else {
            zombie.position += randomDirection
            selectCellId(zombie.position).classList.add(zombie.charName, 'zombie-scared')
          }
          setTimeout(() => {
            removeMichael()
            fullMoon = false
            michael.status = 'mj'
            selectCellId(michael.position).classList.add(michael.status)
            logo.setAttribute('src', 'images/thriller-logo.png')
            logo.setAttribute('alt', 'Thriller Logo')
            logo.style.width = '50%'
          }, 20000)
        }
      })

      if (points === 250 || points === 750) {
        popCornTime++
      }

    }, 300)

  }, 2000)
}

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
    playGame()
  }, 3000)
})
document.querySelector('#start').addEventListener('click', () => michaelMoves())
document.querySelector('#reset').addEventListener('click', () => location.reload())