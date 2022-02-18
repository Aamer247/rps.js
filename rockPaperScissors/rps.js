const computerPlay=()=>{
    const random=Math.floor(Math.random()*3)
    switch(random){
        case 0:
            return 'rock'
            break;
            case 1:
            return 'papper'
            break;
            case 2:
            return 'scissor'
            break;
            
    }
}

const playerSelection=(userInput)=>{
    userInput=userInput.toLowerCase()

    if(userInput==='rock' || userInput==='paper'||userInput==='scissor'){
        return userInput
    } else{
        return 'Please enter Rock, Paper or Scissor'
    }
}




const winner=(playerSelection,computerPlay)=>{
    if(playerSelection===computerPlay){
        return 'tie game'
    }
    if(playerSelection==='rock'){
        if(computerPlay==='scissor'){
            return 'You win! Rock beats scissor'
        }else{
            return 'You lose'
        }
  
    }
        if(playerSelection==='paper'){
            if(computerPlay==='rock'){
                return 'You win! Paper beats Rock'
            }else {
                return 'You lose'
            }
        }
        if(playerSelection==='scissor'){
            if(computerPlay==='paper'){
                return 'You win! scissor beats paper'
            }else {
                return 'you lose'
            }
    
        } 
}



const playGame=()=>{
    const userChoice=playerSelection('paper')
    const cpu=computerPlay()
    console.log('You threw'+ userChoice)
    console.log('Computer threw'+ computerPlay)


    console.log(winner(cpu,userChoice))
};




const game=()=>{
    playGame()
}

