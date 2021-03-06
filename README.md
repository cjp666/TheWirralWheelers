# The Wirral Wheelers
The Wirral Wheelers Cycling Club website and Google Assistant

The website is to track future and past rides that the Wirral Wheelers have planned or have ridden.  The Google Assistant is so anyone can ask "Ok Google, ask the Wirral Wheelers when their next ride is" and for it to tell them about it

This repository is set-up for the Wirral Wheelers and any changes made are deployed to our firebase hosting, both functions and website

Feel free to fork the repository and build it for your own club.  Pull requests are welcomed to improve the site in general but please bear in mind that the changes will only be accepted if they are relevant for the Wirral Wheelers

[![Build status](https://ci.appveyor.com/api/projects/status/i3vhm8dpnubf08yg/branch/master?svg=true)](https://ci.appveyor.com/project/cjp666/thewirralwheelers/branch/master)
[![codecov](https://codecov.io/gh/cjp666/TheWirralWheelers/branch/master/graph/badge.svg)](https://codecov.io/gh/cjp666/TheWirralWheelers)
[![GitHub license](https://img.shields.io/badge/license-Apache%202-blue.svg)](https://raw.githubusercontent.com/cjp666/TheWirralWheelers/master/LICENSE)

[![GitHub issues](https://img.shields.io/github/issues/cjp666/TheWirralWheelers.svg)](https://github.com/cjp666/TheWirralWheelers/issues)
[![GitHub stars](https://img.shields.io/github/stars/cjp666/TheWirralWheelers.svg)](https://github.com/cjp666/TheWirralWheelers/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/cjp666/TheWirralWheelers.svg)](https://github.com/cjp666/TheWirralWheelers/network)

## Ride Details
Ride details are held in Google Firebase Firestore

## Google Assistant
The Google Assistant was creating using Dialogflow with fulfillment webhooks being hosted in Google Firebase Functions

Examples:
To launch The Wirral Wheelers assistant
> Ok Google, talk to The Wirral Wheelers

Once in The Wirral Wheelers assistant you can ask things along the lines of:
> Tell me about the Wirral Wheelers

> When is the next ride?

> When was the last ride?

And when you are finished, just say
> Bye

## The website

Currently hosted [here](https://thewirralwheelers.firebaseapp.com)

### The Team
Lead
- [Chris Podmore](https://github/cjp666)
