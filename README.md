# InfoVis_JavascriptPractice
labs, scratch, practice files
# Folders and what's inside

## InfoVis_Practices
2 examples:
1. example.html: how to export fields in .js, how to import them into .html
2. face.html: how to export function in .js (face_d3.js), how to import and use function in .html (face.html)

Note: 
1. package.json, package-lock.json can be different for different folders. Best to remove them before running anything. 
2. And then, in VSCode terminal, run

(1) npm i -D webpack webpack-cli  
  
(2) npm init (press Enter everytime if you just want the default values for all the fields. This is usually the case :)

## Week 4
using webpack live server

run:

npx webpack server

and then in the terminal, click and enter the link appeared: <i> [webpack-dev-server] Loopback: [go to this link in your VSCode terminal]
  
If error appears saying that "address already in use :::9000", for Windows users, please search for your command prompt, right click on it, and run as administrator. Then run this line here:
  
netstat -ano|findstr "PID :9000"
  
Then you will see a list of ports and their PID's. Let's now kill all the ports with those PID's. Replace the "xxxxx" below with your PID's, and run it.
  
taskkill /pid xxxxx /f
  
Now go back to VSCode terminal and do again npx webpack server
