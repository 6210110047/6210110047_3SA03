import React, { useState , useRef , useEffect } from 'react';
import _, { attempt } from 'lodash';

import CharacterCard from './CharacterCard';


const prepareStateFromWord = given_word => {
    let word = given_word.toUpperCase()
    // let chars = _.shuffle(Array.from(word))
    return {
        word,
        // chars,
        attempt: 1,
        guess: '',
        completed: false
    }
}

export default function WordCard(props) {
    const [state, setState] = useState(prepareStateFromWord(props.value))

    const setWord = useRef(props.word)
    useEffect(() => {
        setWord.current = props.word
    })

    const activationHandler = (c) => {
        console.log(`${c} has been activated.`)
        let guess = state.guess + c
        setState({ ...state, guess })
        if (guess.length == setWord.current.length) {
            if (guess == setWord.current) {
                console.log('yeah!')
                setState({ ...state, completed: true })
                props.activationHandler(true)
            }
            else {
                console.log('reset, next attempt')
                setState({ ...state, guess: '', attempt: state.attempt + 1 })
            }
            // console.log(guess)
        }
    }

    return (
        <div>
            {
                Array.from(state.word).map((c, i) => <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt} />)
            }
        </div>
    );
}