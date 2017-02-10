# WEATHER APP

A React-Native + Redux mobile app. It includes also libraries like Redux-Thunk or Redux-ORM.

![rn](https://img.shields.io/badge/React%20Native--blue.svg)
![ios](https://img.shields.io/badge/IOS--blue.svg)
![android](https://img.shields.io/badge/Android--blue.svg)
![redux](https://img.shields.io/badge/Redux--yellowgreen.svg)
![redux-orm](https://img.shields.io/badge/redux%20thunk--yellowgreen.svg)
![redux-thun](https://img.shields.io/badge/redux%20ORM--yellowgreen.svg)
![jest](https://img.shields.io/badge/Jest%20--green.svg)

## Installation

* [Install React-Native](https://facebook.github.io/react-native/docs/getting-started.html#content)

### To run:
* For iOS, from the command line, run via command: ```react-native run-ios``` or open XCode and load project, Run ```Product -> Run (⌘+R)```
* For android, from the command line, run via the command: ```react-native run-android``` assuming you have an emulator or device running and attached
* To run Jest, ```npm test```
* Enjoy!


## Notes

Code is written with ES6 and validated with [Eslint](http://eslint.org/) using [Airbnb configuration](https://www.npmjs.com/package/eslint-config-airbnb).  To setup your favorite editor using the Eslint configuration, see [Editors](http://eslint.org/docs/user-guide/integrations#editors)

The app has to scenes: **CitiesList** and **CityDetail** and the navigation is handled by [Navigation Experimental](https://facebook.github.io/react-native/docs/navigation.html#navigationexperimental)

In the **CitiesList** scene the user can add a new City to the list of cities. The weather info is getting from [AccuWeather API](http://www.accuweather.com/)

In the **CityDetail** scene the user can get some city location info. The location info is getting from [GoogleMaps API](https://developers.google.com/maps/documentation/javascript/)

### Summary

## Technologies

