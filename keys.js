console.log('this is loaded');

exports.spotify = {
  // id: "946b4f0669c74e33ad7dbd878a2d4dbd",
  // secret: "92eaa0364457408da9ca320ac599eead"
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};