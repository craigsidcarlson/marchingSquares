 # Craig's Cave Explorer
A procedural generated cave network with a movable particle that maps the cave with ray tracing.

https://craigsidcarlson.github.io/marchingSquares/

# How to explore
Use the arrow keys to move around amd explore the cave. Refresh the page for a new cave.

# Cave Generation
This project generates caves using the marching squares algorithm and <a href="https://github.com/joshforisha/open-simplex-noise-js">Open Simplex Noise</a> (The open source version of simplex noise) which is what allows the caves to be continuos. The cave walls are constructed of 2D boundary vectors placed the marching squares algorithm. The openness of the caves is determined by the resolution, which is configurable through code. 

# Ray Tracing
You can explore the caves with a small particle that emits rays in the fov. The fov is configurable in the code. The particle uses ray tracing to cast a point from the particle's location onto the closest wall, it casts two rays per degree within the fov. Once the section of the wall (boundary vector) has been seen it stays lite. 

The particle cannot pass through wall. This is done by analyzing the center ray being cast and determines if the distance to that boundary vector is less than the particle's movement amount.

# Future Features
There is a lot more potential here:
  - The cave generation is fairly quick and could be done in real time. This combined with the fact that the open simplex noise can be calculated in 3D means that you could have the cave walls constantly changing.
  - You can add a notion of the inside of the cave and "ground"
  - Add ai to navigate it automatically (flocking maybe?)
  - All of these cave generation configuration could easily have sliders available to the user.

# Resources
https://www.youtube.com/watch?v=0ZONMNUKTfU <br>
https://www.youtube.com/watch?v=TOEi6T2mtHo <br>
https://www.youtube.com/watch?v=vYgIKn7iDH8 <br>
https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection  <br>
https://github.com/joshforisha/open-simplex-noise-js <br>
