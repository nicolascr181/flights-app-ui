# FlightsAppUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.11.

## Table of Contents
* [Overview](#overview)
* [Functionalities / Usage of UI](#functionalities--usage-of-ui)
* [Architecture Overview](#architecture-overview)
* [Images](#images)
* [Development server](#development-server)
* [Code scaffolding](#code-scaffolding)
* [Build](#build)
* [Running unit tests](#running-unit-tests)
* [Running end-to-end tests](#running-end-to-end-tests)
* [Further help](#further-help)


## Overview
A modern flight booking application built with Angular and NgRx for state management. It allows users to search for flights and view available options

## Functionalities / Usage of UI

This section describes the key functionalities and user interactions of the Flight Booking System UI:

1. **User Input: Origin and Destination**
   - The user is required to input the **origin** and **destination** of their flight. These fields are **mandatory**.
   - **Autocomplete** functionality is provided for both origin and destination inputs, allowing users to select from a list of suggestions while typing, making the search process faster and more efficient.

2. **Currency Selection**
   - The user selects the **currency** they wish to use for flight pricing via a dynamic combo box.
   - The list of available currencies is retrieved dynamically from the server. The system will automatically update the available currency options based on the response from the server.

3. **Trip Type Selection**
   - The user must choose between a **one-way** or **round trip** flight by selecting one of two **radio buttons**. This selection is **mandatory** for performing a search.

4. **IATA Code Auto Retrieval**
   - The system automatically retrieves the **IATA code** for the origin and destination airports based on the user's input. This is achieved by an external API that translates the user’s location name into its corresponding IATA code, ensuring accurate flight search results.

5. **Search for Flights**
   - After the user has filled in the required fields, they can press the **Search** button to retrieve available flights based on the input conditions.
   - The search is performed using the specified origin, destination, currency, and trip type. The application sends the request to the backend, which returns a list of available flights for the user to view.

## Arquitecture Overview

The app follows a clean architecture approach, with clear separation of concerns:

- **Frontend** (Angular): Handles the user interface, interactions, and displays data.
- **NgRx**: Manages the application state, including flight search data and user preferences.
- **Backend API**: Exposes flight data and currency functionality. Additional external API's were also used.

The data flow follows the typical **NgRx** pattern:
- Actions are dispatched from components (e.g., when a user initiates a search).
- Reducers process the actions and update the state.
- Components subscribe to the state and update the UI accordingly (Single Web Application).

## Images
![ScreenShot 1](https://github.com/nicolascr181/flights-app-ui/blob/main/screenshots/Screenshot1.png?raw=true)

![ScreenShot 2](https://github.com/nicolascr181/flights-app-ui/blob/main/screenshots/Screenshot2.png?raw=true)

![ScreenShot 3](https://github.com/nicolascr181/flights-app-ui/blob/main/screenshots/Screenshot3.png?raw=true)

![ScreenShot 4](https://github.com/nicolascr181/flights-app-ui/blob/main/screenshots/Screenshot4.png?raw=true)


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
