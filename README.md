# node-liri-app


Creator: Abiel Hailemariam

Created on: 12/5/2019

# ABOUT THE APP
LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives back data. The user has the option of using four commands (listed below) in conjuntion with specific parameters(such as a band, a song, and a movie) associated with the commands. The Commands are:

concert-this-------------->Will search for bands that are touring from the Bands in Town API.

spotify-this-song--------->Will search for songs from the spotify API.

movie-this---------------->Will search for a movie the OMBD API

do-what-it-says----------->Liri will take text from a random file to use it to call from the above 3 commands.

 

# Step by Step instructions
Open your terminal such as Bash.

Navigate to the folder that contains the liri.js file.

Depending on the command you run, the output will vary.

* Example 1: Run the concert-this command

    node liri.js concert-this <name of artist or band>

    Output: The system will display a list of all events and locations where the artist or band will perform. It can result in multiple records. The system will also log all the results in the log.txt file. 


* Example 2: Run the spotify-this-song command

    node liri.js spotify-this-song <name of song>
    Output: The system will display a list of information associated with the song. It can result in multiple records. The system will also log all the results in the log.txt file. 


* Example 3: Run the movie-this command

    node liri.js movie-this <name of movie>
    Output: The system will display information associated with the movie. The system will also log all the results in the log.txt file. 


* Example 4: Run the do-what-it-says command

    node liri.js do-what-it-says
    Output: The system will read the text in the random.txt file, and perform the comman listed in the random.txt file.


# HOW TO USE LIRI
Video Guide
Watch the video here:
https://drive.google.com/file/d/1oZ2Y9h3IANXHHnnlLfGNjpfz3DuBPuSV/view


# TECHNOLOGIES USED
-Javascript
-Nodejs

Node packages:
-Node-Spotify-API
-Request
-Moment
-DotEnv

APIs used:
-Bands in Town
-OMDB
-Spotify
