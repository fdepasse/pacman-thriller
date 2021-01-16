// ! THE GRID
const grid = document.querySelector('#grid')
const gridWidth = 18
const cellsObject = {
  stones: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 36, 54, 72, 90, 108, 126, 162, 180, 198, 216, 234, 252, 270, 288, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 305, 287, 269, 251, 233, 215, 197, 179, 143, 125, 107, 89, 71, 53, 35, 26, 44, 62, 63, 45, 27, 47, 48, 49, 50, 51, 69, 68, 67, 66, 65, 60, 59, 58, 57, 56, 38, 39, 40, 41, 42, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 114, 132, 134, 135, 153, 152, 137, 119, 139, 140, 141, 142, 127, 128, 129, 130, 168, 186, 187, 188, 189, 190, 191, 173, 175, 193, 194, 176, 177, 195, 196, 178, 163, 181, 164, 182, 165, 183, 166, 184, 206, 207, 225, 224, 222, 220, 219, 218, 236, 237, 238, 240, 258, 259, 260, 261, 262, 263, 245, 227, 229, 247, 248, 230, 231, 249, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285],
  dots: [291, 292, 290, 289, 293, 294, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 268, 267, 266, 265, 264, 257, 256, 254, 255, 253, 235, 217, 199, 200, 201, 202, 203, 221, 239, 204, 205, 223, 226, 208, 209, 210, 228, 246, 211, 212, 213, 214, 232, 250, 185, 185, 167, 145, 146, 147, 148, 149, 131, 113, 112, 111, 109, 110, 91, 73, 55, 19, 20, 21, 22, 23, 24, 25, 43, 61, 74, 75, 76, 77, 78, 79, 80, 81, 82, 64, 46, 28, 29, 30, 31, 32, 33, 34, 70, 83, 84, 85, 86, 87, 88, 106, 124, 123, 122, 121, 120, 138, 156, 174, 192, 157, 158, 159, 160],
  moons: [37, 52, 271, 286],
  tunnelright: 161,
  tunnelleft: 144
}

// ? Useful to grab a cell by its Id
function selectCellId(cellId) {
  return document.getElementById(cellId)
}

// ? Generates the empty grid
for (let i = 0; i < gridWidth ** 2; i++) {
  const newCell = document.createElement('div')
  grid.appendChild(newCell)
  newCell.innerHTML = i
  newCell.id = i
  newCell.style.width = `${100 / gridWidth}%`
  newCell.style.height = `${100 / gridWidth}%`
}

// ? Set classes to each cell
// * Stores, dots and moons in arrays of the cellsObject
function giveClassToCells(array, className) {
  array.forEach((element) => {
    selectCellId(element).classList.add(className)
  })
}
giveClassToCells(cellsObject.stones, 'stone')
giveClassToCells(cellsObject.dots, 'dot')
giveClassToCells(cellsObject.moons, 'moon')

// * Tunnels as a property of cellsObject
function giveClasstoTunnel(cell, className) {
  selectCellId(cell).classList.add(className)
}
giveClasstoTunnel(161, 'tunnel-right')
giveClasstoTunnel(144, 'tunnel-left')

// Tool to set the grid up
// const cells = document.querySelectorAll('#grid div')
// cells.forEach((div) => {
//   div.addEventListener('click', () => {
//     div.classList.add('dot')
//     cellsObject.dots.push(div.innerHTML)
//     console.log(cellsObject.dots)
//   })
// })


//  ! VARIABLES

// ? Characters
class Character {
  constructor(charName, position) {
    this.charName = charName
    this.position = position
  }
}

// * MJ
const michael = new Character('Michael', 243)

// * Zombies
const zombies = []
const zombMexican = new Character('Mexican Zombie', 115)
const zombOffice = new Character('Office Zombie', 118)
const zombNews = new Character('News Zombie', 169)
const zombPirate = new Character('Pirate Zombie', 172)
zombies.push(zombMexican, zombOffice, zombNews, zombPirate)

// ? Full Moon Mode
let fullMoon = false


// ! GAMEPLAY

// ? Michael's behaviour

// * Michael Moves with the Arrow Keys
selectCellId(michael.position).classList.add('mj')

document.addEventListener('keyup', (event) => {
  const keyPressed = event.key

  if (keyPressed === 'ArrowRight') {
    selectCellId(michael.position).classList.remove('mj')
    if (selectCellId(michael.position + 1).className === 'stone') {
      selectCellId(michael.position).className = 'mj'
    } else {
      michael.position++
      selectCellId(michael.position).classList.add('mj')
    }
    // if (keyPressed === 'ArrowLeft') {
    //   selectCellId(michael.position).classList.remove('mj')
    //   michael.position--
    //   selectCellId(michael.position).classList.add('mj')
    // }
    // if (keyPressed === 'ArrowUp') {
    //   selectCellId(michael.position).classList.remove('mj')
    //   michael.position -= gridWidth
    //   selectCellId(michael.position).classList.add('mj')
    // }
    // if (keyPressed === 'ArrowDown') {
    //   selectCellId(michael.position).classList.remove('mj')
    //   michael.position += gridWidth
    //   selectCellId(michael.position).classList.add('mj')
    // }
  }
})