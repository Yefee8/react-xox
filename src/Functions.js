import {xox} from "./App";

export function clickEvent(content, index, playerTurn){
    if(content === ''){
        xox[index].content = playerTurn;
        if(
        xox[0].content === 'O' && xox[4].content === 'O' && xox[8].content === 'O' ||
        xox[2].content === 'O' && xox[4].content === 'O' && xox[6].content === 'O' ||
        xox[3].content === 'O' && xox[4].content === 'O' && xox[5].content === 'O' ||
        xox[0].content === 'O' && xox[1].content === 'O' && xox[2].content === 'O' ||
        xox[6].content === 'O' && xox[7].content === 'O' && xox[8].content === 'O' ||
        xox[0].content === 'O' && xox[3].content === 'O' && xox[6].content === 'O' ||
        xox[1].content === 'O' && xox[4].content === 'O' && xox[7].content === 'O' ||
        xox[2].content === 'O' && xox[5].content === 'O' && xox[8].content === 'O'
        ){
            alert('O win the game!');
            return 'True';
        }
        else if(
            xox[0].content === 'X' && xox[4].content === 'X' && xox[8].content === 'X' ||
            xox[2].content === 'X' && xox[4].content === 'X' && xox[6].content === 'X' ||
            xox[3].content === 'X' && xox[4].content === 'X' && xox[5].content === 'X' ||
            xox[0].content === 'X' && xox[1].content === 'X' && xox[2].content === 'X' ||
            xox[6].content === 'X' && xox[7].content === 'X' && xox[8].content === 'X' ||
            xox[0].content === 'X' && xox[3].content === 'X' && xox[6].content === 'X' ||
            xox[1].content === 'X' && xox[4].content === 'X' && xox[7].content === 'X' ||
            xox[2].content === 'X' && xox[5].content === 'X' && xox[8].content === 'X'
        ){
            alert('X win the game!');
            return 'True';
        }
        return 'True';
    }
    console.log(xox)
    alert("there is already x or o here!");
}
