# Task Management Project with Google Charts and Salesforce Lightning Design System (SLDS) 
My name's Federico, I'm 18 and I'm an IT and Telecommunications student.                                                                 
I'm a stagist at a Company in Modena (MO) - Italy for 2 weeks. During this stage, I will create a webpage which helps the User manage his tasks and commitments. This webpage makes use of the Salesforce Lightning Design System and Google Chart.                 
This README.md provides an accurate description of the content of this repository.                                          

### Project.pdf
First off, the project.                                                                                                                 
In this file you will find the details of the project I have to complete.                                                               
In a few words, the page consists of a Gantt Chart created with Google Charts that shows the User's tasks. In addition, Tables and Menus help the User know more information about the task they are interested in.                                                               

### youtube
This folder contains all the files that are required to perform Google Authentication in you website

### demo_heroku
This folder contains the website with all the files that are required to let it work properly, including some of the ones in this repo.

### Passport
This folder contains what I could do regarding authentication forms and software

### Gantt_Chart.html
This file contains the evolutions of the Gantt Chart I created with Google Charts.                                                      
Firstly, I created a Chart with random information just to test whether it worked or not.                                               
Then, I sequetially added some parts and features to the page:                                                                          
- an Interactive Table which shows itemized details about the task the User clicks on the Chart;                                         
- a Title area consisting of Logo, Company Name, User Name and End Date;                                                                 
- an Off-Canvas Menu similar to the one in the instructions given to me.                                                                                                                                                                                                         
In Version 2.0 I added a Horizontal Menu which I eventually deleted because I didn't like it.                                           
The Horizontal Menu was thus replaced by the Off-Canvas Vertical Menu.                                                                  

### Vertical_Menu.html
This file contains a Vertical Menu designed with HTML tags and CSS styles.                                                               
It is similar to the one in the project PDF.                                                                                             

### Off-Canvas_Menu
This directory contains everything that is required to create the Off-Canvas Menu.                                                      
It consists of:                                                                                                                         
- Style CSS files;                                                                                                                      
- JS and JQuery files;                                                                                                                   
- the actual HTML file.                                                                                                                 

This Menu has nothing to do with the project purpose; it just consists of the code that makes up a general menu. By changing some options and specifics it will be possible to adapt the Menu to the project requirements.                                                 

Credits: https://www.yourinspirationweb.com/2014/10/15/come-realizzare-un-menu-a-comparsa-laterale-con-un-clic/         

### All_Together
This directory contains the webpage with all my works together.                                                                         
It consists of:
- Style CSS files;
- JS and JQuery files;
- the actual HTML file;
- some Images.

### index.html
Once I had created an esthetically nice and coherent webpage I felt ready to face SLDS.                                                 
SLDS stands for Salesforce Lightning Design System and it is a service that provides a number of CSS and JS files that users can employ to create webpages with Salesforce-like style.                                                                                          
This file contains the exact same elements of the sample page in the instructions, including the Gantt Chart and the Vertical Menu I personally created.                                                                                                                                                                                                      
NB: This file will not work properly if normally opened in your browser. It is necessary to write a code in Node.js that makes use of Express.js. Let's say I write my code in the file server.js. This is it:
```javascript
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

console.log('Served: http://localhost:' + port);
app.listen(port);
```
The folder /public is the one that contains the file index.html. To run the code and correctly view the webpage, type:
```
$ node server.js
```
Now you will be able to view the page at http://localhost:8080/                                                                         
Directories and Files name may change depending on the procedure you followed when you installed Express.js in your working directory. Here's a quick introduction on how to install Express.js: http://expressjs.com/it/starter/installing.html

### Passport
This directory contains the files I used to create the authentication software for my website.

### quick_report.txt
Last but not least... the report!                                                                                                       
As this is a stage project, which means I'm a stagist in a company for a short period of time, I have to complete a project the Company gives me within the given time. In my case, I've been given 2 weeks to complete this project. For this reason, it is very important to keep a trace of my work so that my tutor knows what I'm doing and, most importantly, HOW I'm doing it.                                   

This Report is in Italian.
