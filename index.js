var scores = []
scores['red'] = 0
scores['blue'] = 0
scores['green'] = 0
scores['yellow'] = 0
scores['black'] = 0

function changeScore (color, val) {
    scores[color] += val
    console.log('Adding', val, "to", color)
    updateScores()
}

function evalCustom (color, id, subtract) {
    input = Number(document.getElementById(id).value)
    if (subtract == true) {
        changeScore(color, -Math.abs(input))
        return 
    }
    changeScore(color, input)
    updateScores()
}

function updateScores() {
    document.getElementById('redScore').innerHTML = scores['red']
    document.getElementById('blueScore').innerHTML = scores['blue']

}