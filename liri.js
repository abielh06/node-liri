require("dotenv").config();
var fs = require("fs");
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var axios = require('axios');
var moment = require('moment');
moment().format();

console.log(keys.spotify);
var spotify = new Spotify(keys.spotify);


var command = process.argv[2];
var input = process.argv[3];


function start() {
    switch (command) {
        case "concert-this":
            var concertUrl = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp";
            axios.get(concertUrl).then(function (response) {
                var data = response.data;
                for (var index = 0; index < data.length; index++) {
                    var event = `Artist:   ${data[0].artist.name}
               \nVenue: ${data[index].venue.name}
               \nLocation:  ${data[index].venue.city}  ${data[index].venue.region}
               \nDate: ${moment(data[index].datetime, "YYYY-MM-DD HH:mm").format("MM/DD/YYYY hh:mm a")}\n-------------------------------------`

                    console.log(event)
                    fs.appendFile("log.txt", event, function (err) {
                        if (err) {
                            return console.log(err);
                        }
                    });
                }

            }).catch(function (error) {
                    console.log(error);
                });
            // console.log("concert command test");
            break;

        case "spotify-this-song":
            spotify
                .search({ type: 'track', query: input })
                .then(function (response) {
                    var data = response.tracks.items;
                    // console.log(response.tracks.items)
                    for (var index = 0; index < data.length; index++) {
                        var songs = `Artist:   ${data[index].album.artists[0].name}
                   \nSong:   ${data[index].album.name}
                   \nSpotify Link:  ${data[index].external_urls.spotify}
                   \nAlbum: ${data[index].name}\n----------------------------------
                   `
                        console.log(songs);
                        fs.appendFile("log.txt", songs, function (err) {
                            if (err) {
                                return console.log(err);
                            }
                        });
                    }
                }).catch(function (err) {
                    console.log(err);
                });
            break;
        case "movie-this":
            axios.get("http://www.omdbapi.com/?t=" + input + "&tomatoes=true&plot=short&apikey=trilogy").then(
                function (response) {
                    var movieData = response.data;
                    console.log("---------------Data---------------");
                    console.log("Title of the movie is: " + response.data.Title);
                    console.log("The year the movie came out: " + response.data.Year);
                    console.log("The movie's rating is: " + response.data.imdbRating);
                    console.log("The movie's Rotten Tomatoe rating is: " + response.data.Ratings[1].Value);
                    console.log("The movie's was produced in: " + response.data.Country);
                    console.log("The movie's language is: " + response.data.Language);
                    console.log("The plot of the movie is: " + response.data.Plot);
                    console.log("The movie's actors are: " + response.data.Actors);
                    console.log("---------------Data---------------");

                    fs.appendFile("log.txt", movieData, function (err) {
                        if (err) {
                            return console.log(err);
                        }
                    });
                });
            break;

        case "do-what-it-says":
            fs.readFile("random.txt", "utf8", function (error, data) {
                if (error) {
                    console.log("Error; " + error);
                } else {

                    console.log(data);
                    var choice = data.split(",");
                    console.log(choice[1]);

                    command = choice[0];
                    input = choice[1];

                    start()

                }
            })

            // console.log("fileSystem command test");
            break;

        default:
            console.log("Invalid command");
    }
};
start();