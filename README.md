# Car Configurator
> Creator your own car configuration and also learn about the history of the brand.
## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Acknowledgements](#acknowledgements)


## General Information

This project is a site, which enables you to make your own car configurations and for me it was created in order to:
- learn PHP
- learn how to use Twig templates
- learn more about SQL architecture
- learn



## Technologies Used
- JavaFx - version 15.0.1
- FXML


## Features
- 15 weapons like shotgun, poison daggers and many more
- various enemies (following the player, creating copies of them themselvses when destroyed and more)
- time-limited powerups and animations
- randomly generated map
- 4 floors
- every floor has 25 rooms
- every room is full of various blocks (bush, spikes, walls, exploding barells, etc) 
- special room "shop", where you can buy new weapons
- static objects destruction with bombs and explosions
- hiding in bush
- map and interface


## Screenshots
![Example screenshot](./img/screen1.png)


## Setup
1.File -> Project Structure -> Libraries -> Add (+) -> javafx-sdk-15.0.1/lib -> OK

2.File -> Project Structure -> Modules -> lib -> OK

3.Run -> Edit configuration -> VM options and paste:

Windows: --module-path "..\TheGame\javafx-sdk-15.0.1\lib" --add-modules javafx.controls,javafx.fxml



## Acknowledgements
- Project was created in cooperation with Dawid Kwapisz (https://github.com/dkwapisz).
- This project was inspired by "The Binding of Isaac"
- Movenemnt handling was based on https://github.com/ashish2199/Aidos
