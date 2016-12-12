function iterativeLog(array) {
  array.forEach((element, index) => {
  console.log(`${index}: ${element}`)
  });
}

function iterate(callback) {
  var artists = ["Beyonce", "Rihanna", "Lady Gaga"]
  artists.forEach(callback)
  return artists
}

function doToArray(array, callback) {
  array.forEach(callback)
}
