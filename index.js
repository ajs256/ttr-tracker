var scores = []
scores['red'] = 0
scores['blue'] = 0
scores['green'] = 0
scores['yellow'] = 0
scores['black'] = 0

function changeScore (color, val) {
    scores[color] += val
    console.log('Adding', val, "to", color)
}

function evalCustom (color, id, subtract) {
    input = document.getElementById(id).value
    if (subtract == true) {
        changeScore(color, -Math.abs(input))
        return 
    }
    changeScore(color, input)
}
