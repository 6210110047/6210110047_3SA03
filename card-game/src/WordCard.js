import React from 'react';
import CharacterCard from './CharacterCard';
import _ from 'lodash';
var state
const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: '',
        completed: false
    }
}
const activationHandler = (c) => {
    console.log(`${c} has been activated.`)
    let guess = state.guess + c
    // state.guess = guess
    if (guess.length == state.word.length) {
        if (guess == state.word) {
            console.log('yeah!')
            state.guess = ''
            state.completed = true
        }
    } else {
        console.log('reset')
        state.guess = ''
        state.attempt = state.attempt + 1
    }
}


export default function WordCard(props) {
    state = prepareStateFromWord(props.value)
    return (
        <div>
            {Array.from(state.chars).map((c, i) => <CharacterCard value={c} key={i} activationHandler={activationHandler} />)}
        </div>
    );
}