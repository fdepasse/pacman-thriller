

# ![GA logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Pac - Man Thriller Edition
#SEI/projects/project1

![final_game](images/final_game.png)


## Overview
This was the first project from the Software Engineering Immersive Course at General Assembly London, built after 4 weeks of class. This was also my first ever project as a developer. 

All students have been given the task to individually create a grid based game using HTML, CSS and JavaScript within one week. We had the choice of several games and I picked Pac - Man. 

To make my game a bit different, I have inspired it after Michael Jackson’s Thriller soundtrack and video clip. **Pac - Man** has been replaced by **Michael** and the traditional **ghosts** by **zombies**. **Power Pellets** are **Full Moons** and the **Bonus Fruit** appearing after a certain amount of dots is gathered has been replaced by **Pop Corn**.

You can access the game with this [link](https://fdepasse.github.io/project-1/) and [here](https://github.com/fdepasse/project-1) is a link to my GitHub repository for this project.


## Brief
* **Render a game in the browser**
* **Design logic for winning** & **visually display which player won**
* **Include separate HTML / CSS / JavaScript files**
* Stick with **KISS (Keep It Simple Stupid)** and **DRY (Don’t Repeat Yourself)** principles
* Use **Javascript** for **DOM manipulation**
* **Deploy your game online**, where the rest of the world can access it
* Use **semantic markup** for HTML and CSS (adhere to best practices)


## Technologies Used
* HTML
* CSS
* JavaScript
* QuickTime Player
* Preview
* Git and GitHub
* Google Fonts


## Approach
### Building the board
The challenge here was to build a complex grid which will have paths for the characters to move, stones (or walls in traditional Pac - Man) , dot (food), 4 x moons (power pellet), a tunnel right entrance and a tunnel left entrance. 

I wanted to achieve this using in the most programatic way possible using JavaScript and DOM Manipulation. 

#### Drawing the board
I chose to store my cells by type within an object of arrays, each key being a cell type taking an array of cells as value as per below.
``` javascript
const cellsObject = {
  stones: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 36, 54, 72, 90, 108, 126, 162, 180, 198, 216, 234, 252, 270, 288, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 305, 287, 269, 251, 233, 215, 197, 179, 143, 125, 107, 89, 71, 53, 35, 26, 44, 62, 63, 45, 27, 47, 48, 49, 50, 51, 69, 68, 67, 66, 65, 60, 59, 58, 57, 56, 38, 39, 40, 41, 42, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 114, 132, 134, 135, 153, 152, 137, 119, 139, 140, 141, 142, 127, 128, 129, 130, 168, 186, 187, 188, 189, 190, 191, 173, 175, 193, 194, 176, 177, 195, 196, 178, 163, 181, 164, 182, 165, 183, 166, 184, 206, 207, 225, 224, 222, 220, 219, 218, 236, 237, 238, 240, 258, 259, 260, 261, 262, 263, 245, 227, 229, 247, 248, 230, 231, 249, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285],
  dots: [291, 292, 290, 289, 293, 294, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 268, 267, 266, 265, 264, 257, 256, 254, 255, 253, 235, 217, 199, 200, 201, 202, 203, 221, 239, 204, 205, 223, 226, 208, 209, 210, 228, 246, 211, 212, 213, 214, 232, 250, 185, 185, 167, 145, 146, 147, 148, 149, 131, 113, 112, 111, 109, 110, 91, 73, 55, 19, 20, 21, 22, 23, 24, 25, 43, 61, 74, 75, 76, 77, 78, 79, 80, 81, 82, 64, 46, 28, 29, 30, 31, 32, 33, 34, 70, 83, 84, 85, 86, 87, 88, 106, 124, 123, 122, 121, 120, 138, 156, 174, 192, 157, 158, 159, 160],
  moons: [37, 52, 271, 286],
  tunnelright: 161,
  tunnelleft: 144
}
```


Created a loop which runs as long as there are cells to create and will for each iteration create a div element, append it to the grid and set its HTML attribute (id, innerHTML), CSS styling and finally push all cells In an array for future reference.
```
for (let I = 0; I < gridWidth ** 2; I++) {
  const newCell = document.createElement(‘div’)
  grid.appendChild(newCell)
  newCell.innerHTML = I
  newCell.id = I
  newCell.style.width = `${100 / gridWidth}%`
  newCell.style.height = `${100 / gridWidth}%`
  allCells.push(newCell)
}
```





### Remaining Bugs


## Potential Future Enhancements
* Server-side saved scoreboard
* Mobile-compatibility
* Different behaviour for each ‘ghost’, more complexity
* Further levels
* Game start display a message
* Pop up showing points when eating a ghost
* Multiple fruits with higher points
* Pausing the game / Resuming the game
* Stopping the game
* Manage collision between zombies
* Zombies not starting at the same time
* Cumulative points when eating zombies and when they return the holding pen, reset the number of zombies to 4
* Increase speed of MJ during full moon mode



## Challenges & Lessons learned
* Set up the grid: Used a event listener to get the array I dev tools and copied it
* Code duplication
* Understanding timings with TimeOuts and Intervals


## Credits
