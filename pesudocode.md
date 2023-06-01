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

### 3. Alarm/alert

**PROPERTIES**

* Shows alert/Makes noise
* alert/noise only at certain times

# Functionality 
1. Show clock on page
2. Have clock show time
3. Have time change on page
4. Alarm/Alert go off at certain time

# EXAMPLE:
## START
```
DISPLAY time
DISPLAY change to match time
IF (time === 5:00pm) {
    window.alert(It's 5pm, school has ended for the day.)
}
ELSE {
    DISPLAY time
}
```