// * Generating the grid
const grid = document.querySelector('#grid')

const gridWidth = 18

const cellsObject = {
  'stones': ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '36', '54', '72', '90', '108', '126', '162', '180', '198', '216', '234', '252', '270', '288', '306', '307', '308', '309', '310', '311', '312', '313', '314', '315', '316', '317', '318', '319', '320', '321', '322', '323', '305', '287', '269', '251', '233', '215', '197', '179', '143', '125', '107', '89', '71', '53', '35', '26', '44', '62', '63', '45', '27', '47', '48', '49', '50', '51', '69', '68', '67', '66', '65', '60', '59', '58', '57', '56', '38', '39', '40', '41', '42', '92', '93', '94', '95', '96', '97', '98', '99', '100', '101', '102', '103', '104', '105', '114', '132', '134', '135', '153', '152', '137', '119', '139', '140', '141', '142', '127', '128', '129', '130', '168', '186', '187', '188', '189', '190', '191', '173', '175', '193', '194', '176', '177', '195', '196', '178', '163', '181', '164', '182', '165', '183', '166', '184', '206', '207', '225', '224', '222', '220', '219', '218', '236', '237', '238', '240', '258', '259', '260', '261', '262', '263', '245', '227', '229', '247', '248', '230', '231', '249', '272', '273', '274', '275', '276', '277', '278', '279', '280', '281', '282', '283', '284', '285'],
  'dots': [],
  'moons': ['55','70','271','286'],
  'tunnel-right': '161',
  'tunnel-left': '144'
}

for (let i = 0; i < gridWidth ** 2; i++) {
  const newCell = document.createElement('div')
  grid.appendChild(newCell)
  newCell.innerHTML = i
  newCell.id = i
  newCell.style.width = `${100 / gridWidth}%`
  newCell.style.height = `${100 / gridWidth}%`
}

// ! Tool to set the grid up
const cells = document.querySelectorAll('#grid div')
// cells.forEach((div) => {
//   div.addEventListener('click', () => {
//     div.classList.add('stones')
//     cellsObject.stones.push(div.innerHTML)
//     console.log(cellsObject.stones)
//   })
// })


cellsObject.stones.forEach((element) => {
  const selectedCell = document.getElementById(element)
  selectedCell.classList.add('stones')
})