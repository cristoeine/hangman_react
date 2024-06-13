
type HangmanWordProps = {
    guessedLetter: string[]
    wordToGuess: string
    reveal?: boolean
  }

export function HangmanWord({guessedLetter, wordToGuess}: HangmanWordProps){
    return <div style={{display:"flex", gap:".25em", fontSize:"6rem", fontWeight:"bold", textTransform:"uppercase", fontFamily:"monospace"}}>
        {wordToGuess.split("").map((letter, index) => (
            <span style={{borderBottom:".1em solid black"}} key={index}>
                <span style={{visibility: guessedLetter.includes(letter)? "visible": "hidden"}}>
                    {letter}
                </span>    
            </span>
        )) }
    </div>
}