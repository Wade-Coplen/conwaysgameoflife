Project -  Conways Game of Life

The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970.[1] It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves. It is Turing complete and can simulate a universal constructor or any other Turing machine. - Wikipedia

Rules

Any live cell with fewer than two live neighbours dies, as if by underpopulation.
Any live cell with two or three live neighbours lives on to the next generation.
Any live cell with more than three live neighbours dies, as if by overpopulation.
Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.


OBJECTIVES

- Student should be able to create a unique, high-quality project that can be added to a professional portfolio
- Student should be able to describe the rules of Conway’s “Game of Life”
- Student should be able to explain what cellular automata are and describe how they are useful in real life
- Student should be able to correctly analyze the ‘Turing Completeness’ of Conway’s “Game of Life”
- Student should be able to implement a visualization of Conway’s “Game of Life” using technologies related to their specific track.
- Student should be able to utilize "double buffering" to implement the game

MVP REQUIREMENTS

Preliminary Work

Research Conway’s "Game of Life". Figure out how it works, why it’s useful, and how the notion of Turing Completeness is related to this topic.

Building Your App

Visualizing the "Game of Life"

The main entry point of your application should house the visualization of this cellular automaton. Include necessary components, such as:

- Grid to display cells.
- Cell objects or components that, at a minimum, should have:

Properties
- current state: (alive, dead), (black, white)

Clickable/Tappable:
- can be clicked to allow user to setup initial cell configuration
should NOT be clickable while simulation is running

Behaviors

-Toggle state functionality: switch between alive & dead either because user manually toggled cell before starting simulation or simulation is running and rules of life caused cell to change state
- An appropriate data structure to hold a grid of cells that is at least 25x25. Go as big as you want.
- Text to display current generation # being displayed
- Utilize a timeout function to build the next generation of cells & update the display at the chosen time interval
- Button(s) that start & stop the animation
- Button to clear the grid

Write an algorithm that:

Implements the following basic steps:

For each cell in the current generation's grid:
-Examine state of all eight neighbors (it's up to you whether you want cells to wrap around the grid and consider cells on the other side or not)
- Apply rules of life to determine if this cell will change states

When main loop completes:
- Swap current and next grids
- Repeat until simulation stopped
- Breaks down above steps into appropriate sub-tasks implemented with helper functions to improve readability
- Uses double buffering to update grid with next generation.
- Does something well-documented with the edge of the grid. (e.g. wrap around to the far side--most fun!--or assumes all edge cells are permanently dead.)


Custom Features
Implement at least 3 of the following features:

- Create a few sample cell configurations that users can load and run
- Add an option that creates a random cell configuration that users can run
- Add additional cell properties, like color or size, and incorporate them into your visualization
- Allow users to specify the speed of the simulation
- Provide functionality to manually step through the simulation one generation at a time, as opposed to animating automatically
- Allow users to change the dimension of the grid being displayed
- Given a specific generation, calculate the configuration of cells at that point in time, and jump to that state, bypassing animation (i.e. skip ahead n generations).
- If you have an idea for a custom feature on this list, run it by your TL or instructor

About
- On the main entry point of the application, include a separate section or link to another page or popup that describes the two main rules (birth & death) of Conway’s Game of Life