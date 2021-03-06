[![Build Status](https://travis-ci.org/GBouffard/Thermostat.svg?branch=master)](https://travis-ci.org/GBouffard/Thermostat) [![Code Climate](https://codeclimate.com/repos/55a3cb62e30ba04cef0021bf/badges/60cbeb5ee335c0a4dbb6/gpa.svg)](https://codeclimate.com/repos/55a3cb62e30ba04cef0021bf/feed)

:high_brightness: Thermostat :high_brightness:
===
This is me re-doing from scratch the Makers Academy Thermostat tutorial to learn about Javascript and JQuery.


- Thermostat starts at 20 degrees
- You can increase the temp with the up button
- You can decrease the temp with the down button
- The minimum temperature is 10 degrees
- If power saving mode is on, the maximum temperature is 25 degrees
- If power saving mode is off, the maximum temperature is 32 degrees
- Power saving mode is on by default
- You can reset the temperature to 20 by hitting  the reset button
- The thermostat should colour the display based on energy usage - < 18 is green, < 25 is yellow, otherwise red

Heroku
----
[Guillaume's Thermostat](http://guillaume-thermostat.herokuapp.com/)

![](public/thermostat_screenshot.png)


Objectives of exercise
----
To learn about Javascript, Jasmine and JQuery.

Technologies used
----
- Javascript
- Jasmine
- JQuery
- HTML & CSS
- External API

How to run it
----
```
git clone git@github.com:GBouffard/Thermostat.git
cd Thermostat
npm install
node server.js
```
By opening your browser on http://localhost:8080/, you can now you can play with the Thermostat.

How to run tests
----
```
cd Thermostat
open SpecRunner.html
```

and this is what you should see:

![](public/Jasmine_tests.png)