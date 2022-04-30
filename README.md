labs, practice files and loads of comments explaining what's going on
# Folders and what's inside

## Week3/
2 examples:
1. example.html: how to export fields in .js, how to import them into .html
2. face.html: how to export function in .js (face_d3.js), how to import and use function in .html (face.html)

Note: 
1. package.json, package-lock.json can be different for different folders. Best to remove them before running anything. 
2. And then, in VSCode terminal, run

(1) npm i -D webpack webpack-cli  
  
(2) npm init (press Enter everytime if you just want the default values for all the fields. This is usually the case :)

## Week4/

### src/
a lift state up example using a smiley face using webpack live server. Includes example of hook. (in index.js, useState())

(the order of implementation is marked in the comments using (1), (2), ...)

run:

npm install

npx webpack server

and then in the VSCode terminal, click and enter the link appeared at this line: [webpack-dev-server] Loopback: http://blablablablabla
  
If error appears saying that "address already in use :::9000", for Windows users, please search for your command prompt, right click on it, and run as administrator. Then run this line here:
  
netstat -ano|findstr "PID :9000"
  
Then you will see a list of ports and their PID's. Let's now kill all the ports with those PID's. Replace the "xxxxx" below with your PID's, and run it.
  
taskkill /pid xxxxx /f
  
Now go back to VSCode terminal and do again npx webpack server

### scatter_plot/

Drawing scatterplot. How to load data, associate data with points, draw axes, add mouse events and isolate the points, etc.

to run: directly click "go live" for old_faithful.html

## Week5

This folder contains code for Week 5-6, they are one project.

### src/

to run:

npm install

npx webpack server


## Week7

### lab7_geomap_html/

map in html

### lab7_geomap_webpack/

using geo libraries in JavaScript

### Lab8

### Lab9

### Lab 10
