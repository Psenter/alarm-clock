# About
- Display current time on screen
- Get alarm/alert to go off at a certain time
- Make it look like a clock/look nice

# INIT: Variables
### 1. Clock

**PROPERTIES**

* Show time

### 2. Time shown

**PROPERTIES**

* Changes as the time changes
* Local to the persons set time zone

### 3. Alarm/alert

**PROPERTIES**

* Shows alert/Makes noise
* alert/noise only at certain time

# Procedural
## BEGIN
1. RENDER HTML and clock
2. clock shows local time
3. clock updates every 1000ms with no refresh
## END

## Alert function:
```
 setTimeout(function () { alert("msg")}, time); 
```
* 1000 ms is equal to 1 second

# START
1. Load HTML and CSS
2. RENDER clock onto page
3. Show local time
4. Alert function (after 10 seconds)
# END