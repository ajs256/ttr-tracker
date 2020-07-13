// var redScore = 0
// var blueScore = 0
// var greenScore = 0
// var yellowScore = 0
// var blackScore = 0

var scores = []
scores['red'] = 0
scores['blue'] = 0
scores['green'] = 0
scores['yellow'] = 0
scores['black'] = 0

function changeScore (color, val) {
    // var tmp = color.concat('Score')
    // tmp = tmp + val  -- same as tmp += val
    scores[color] += val
}

