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

Using [Redux](https://github.com/reactjs/react-redux), [redux-thunk](https://github.com/gaearon/redux-thunk) for async calls and [redux-orm](https://github.com/tommikaikkonen/redux-orm) to manage relational data,  the state of the application is **testable** with [Jest](https://facebook.github.io/jest/), which includes [Snapshot tests]

### Summary

1. Using **React Native**, the application runs on **both iOS and Android** with a **single code** base.
1. A User can get location and weather info of a given city thanks to **AccuWeather** and **GoogleMaps**
1. **Redux-thunk** is used to make async calls.
1. The Forms display **spinner** when fetching.
1. **All state changes** are actions to the Redux store.
1. **Every action** performed by the UI interfaces with the **Redux actions** and subsequently to the Redux Store.  This **reduces the complexity** of the JSX Components **tremendously**and makes them easily testable.
1. Relational data are manager by **redux-orm**
1. **Jest Unit Tests cover** the application.

## Main Technologies

### [React-Native](https://facebook.github.io/react-native/)
*React Native enables you to build world-class application experiences on native platforms using a consistent developer experience based on JavaScript and React.*

What more can I say?  It's a fantastic leap forward in providing the ability to write native applications with Javascript that target both iOS and Android.

This application provides one code base that works on both platforms.  It demonstrates Form interactions,  Navigation, and use of many other components.

###[Jest](https://facebook.github.io/jest/)
*85 Unit tests that cover plain objects and JSX components*

The de-facto standard for React/Native testing.  This app demonstrates how to mock **ReactNative, node_modules, classes** and to properly **test JSX components** by programmatically changing the props, and throughly **test the applications data state and the actions** in conjunction with Redux.


###[Redux](http://redux.js.org/)
*Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.*

Before Redux, application state was managed by all the various components in the app.  Now, the state is managed in a **predictable and consistent manner** and it can be **tested with Jest** and best of all, it is **independent** of the UI.  This is a major advancement in application design!

