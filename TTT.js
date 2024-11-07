function Player(name){
    this.name = name
    this.made_move =[]
    this.addMove =function(move){this.made_move.push(move)}
}

function Gameboard(){
    this.board = [['','',''],['','',''],['','','']]
    
    this.readBoard = ()=>{
        for(rows of this.board){console.log(rows)}
        console.log()
        }
    
    this.choice = function(move,index,who){
        if (who==1){
        this.board[index[0]][index[1]]='x'
        place = document.querySelector(`#\\3${move} `)
        img = document.createElement('img')
        img.setAttribute('src','cross.png')
        place.appendChild(img)
        }else if(who==2){
        this.board[index[0]][index[1]]='o'
        place = document.querySelector(`#\\3${move} `)
        img = document.createElement('img')
        img.setAttribute('src','circle.jpg')
        place.appendChild(img)
        }
        this.readBoard()
    }
}   

function flowGame(){
    this.createGame = ()=>{
        game= new Gameboard()
    }
    this.createPlayer =function (name) {
       return name= new Player(name)
    }
    this.round = function(player,move,who){
        let position={1:[0,0],2:[0,1],3:[0,2],4:[1,0],5:[1,1],6:[1,2],7:[2,0],8:[2,1],9:[2,2]}
        player.addMove(move)
        game.choice(move,position[move],who)
    }
    this.checkMoves = function(player){
        let moves = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]
        for(move of moves){
            if( player.made_move.includes(move[0])&&player.made_move.includes(move[1])&&player.made_move.includes(move[2])){
                if(player.name=='computer'){
                    score[1]+=1
                }else{
                    score[0]+=1
                }
                current_score=document.querySelector('h2')
                current_score.textContent=`${name}: ${score[0]}  |   computer: ${score[1]} `
                return `${player.name} won!`
            }
        }
        for(i=0;i<3;i++){
            for(j=0;j<3;j++){
                if (game.board[i][j]!='x' && game.board[i][j]!='o'){
                    return player.made_move
                }
            }
        }
        current_score=document.querySelector('h2')
        current_score.textContent="It's a tie!"
        return 'tie game!'
    }

}


const computer_move= function(){
    while(true){
        place2 = Math.floor(Math.random() * (9- 1 + 1)+ 1)
        if (!player2.made_move.includes(place2)&&!player1.made_move.includes(place2)){
                break
            }
        }
        play.round(player2,place2,2)
        result2 = play.checkMoves(player2)
        console.log(result2)
}

const end_game =function(who_starts){
    game_on=false
    const container=document.querySelector('.score')
    btn=document.createElement('button')
    btn.textContent='replay'
    btn.setAttribute('style','height:70px;width:120px;font-size:2rem')
    container.appendChild(btn)
    btn.addEventListener('click',()=>{
        const gameb_place = document.querySelectorAll('.inside')
        gameb_place.forEach(div=>{
            div.textContent=''
        })
        current_score=document.querySelector('h2')
        if(current_score.textContent=="It's a tie!"){
            current_score.textContent=`${name}: ${score[0]}  |   computer: ${score[1]} `
        }
        play=new flowGame()
        play.createGame()
        player1=play.createPlayer(name)
        player2=play.createPlayer('computer')
        result1=''
        result2=''
        game_on=true
        round=who_starts
        if (round%2==0&&game_on==true){
            computer_move()
            round+=1
        }
        container.removeChild(btn)
        

    })
}


play=new flowGame()
play.createGame()
name=prompt("What's your name?:")
player1=play.createPlayer(name)
player2=play.createPlayer('computer')
round=1
who_starts=2
result1=''
result2=''
game_on=true
score=[0,0]

    const gameb_place = document.querySelectorAll('.inside')
    gameb_place.forEach(div=>{
    div.addEventListener('click',()=>{
        place = div.getAttribute("id")
        if(!player1.made_move.includes(parseInt(place))&&!player2.made_move.includes(parseInt(place))&&round%2==1&&game_on==true){
            play.round(player1,parseInt(place),1)
            result1 = play.checkMoves(player1)
            console.log(result1)
            round+=1
            if(result1.includes('won')||result1.includes('tie')){
                end_game(who_starts)
                who_starts+=1
            }    
        }
        if (round%2==0&&game_on==true){
            computer_move()
            round+=1
            if(result2.includes('won')||result2.includes('tie')){
                end_game(who_starts)
                who_starts+=1 
            }    
        }
        
    })

})