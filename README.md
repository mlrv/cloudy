# cloudy
Weather web app built with Node.js and EJS, 5-day forecast for a given location. Information about weather conditions, maximum and minimum temperature.

A live demo is available [here](https://protected-garden-40068.herokuapp.com/).

## How to build and run the app
Clone the repository on your local machine (make sure you already have *npm* and *node* installed) and *cd* into the folder. Then, install the required dependencies with:
```
npm install
```
In the root directory, create a folder named *config* and place a file called `environment.js` inside it. If you don't already have one, register for an [OpenWeatherMap](https://openweathermap.org/)  API key and copy this in your `environment.js`:
```javascript
module.exports = {
    openWeatherApiKey: 'YOUR_API_KEY'
};
```

To start the application:
```
npm start
```
You should now see a confirmation message saying that the App is running on port 8000, navigate to *http://localhost:8000/* to see it in action.

## Testing
An initial test suite has been written using *Mocha* and *Chai*, to test the app, run
```
npm test
```

## Architecture
The core of the app is written in [Express](https://expressjs.com/), a very popular web application framework. The HTML page at `/` is dynamically rendered with [EJS](http://ejs.co/) and each element is populated with the weather information retrieved from the [OpenWeatherMap](https://openweathermap.org/) API. 

Due to time constraints, some shortcuts had to be taken in order to build a fully functional prototype. This introduced a degree of technical debt in the application, which will have to be fixed before adding any new feature. More information can be found in the final section of this readme.

As you have probably seen, the frontend of the app is really basic. Please note that most of the effort has been spent on making the backend good enough for a solid prototype, future work will include improving the look of the frontpage.

## Future work
While not exhaustive, this list includes some of the key work items that will have to be carried in the future.

- Rearchitect frontend with a more robust and scalable framework (*Angular* or *React* are good options)
- Improve look and feel of UI elements (i.e. icons for weather information)
- Include end-to-end tests
- Optimise layout for mobile