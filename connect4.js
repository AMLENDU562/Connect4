let gameOver=false;
let board=[];
let yellowPlayer="yellow";
let redPlayer="red";
let currentPlayer=redPlayer;


let r=5;
let c=7;

column=[5,5,5,5,5,5,5];



window.onload=function()
{
    for(var i=0;i<r;i++)
    {
        row=[]
        for(var j=0;j<c;j++)
        {
            
            row.push(' ');
            let index=i.toString()+"-"+j.toString();
            let tile=document.createElement("div");
            tile.id=index;
            tile.classList.add("tile");

            document.getElementById("board").append(tile);
            
            tile.addEventListener("click",piece);

        }
        board.push(row);
    }

}



function winner()
{
    if(gameOver===true)
        return ;

    for(var i=0;i<r;i++)  // Row
    {
        for(var j=0;j<c;j++)
        {
            if(board[i][j]!==' '&&j<c-3)
            {
                console.log(board[i][j]);
            if(board[i][j]===board[i][j+1]&&board[i][j+1]===board[i][j+2]&&board[i][j+2]===board[i][j+3])
            {
                winnerdecide(board[i][j]);
                return ;
            }
            }

            if(board[i][j]!==' '&&i<r-3)
                {
                if(board[i][j]===board[i+1][j]&&board[i+1][j]===board[i+2][j]&&board[i+2][j]===board[i+3][j])
                {
                    winnerdecide(board[i][j]);
                    return ;
                }
                }

                if(board[i][j]!==' '&&i<r-3&&r-3)
                    {
                    if(board[i][j]===board[i+1][j+1]&&board[i+1][j+1]===board[i+2][j+2]&&board[i+2][j+2]===board[i+3][j+3])
                    {
                        winnerdecide(board[i][j]);
                        return ;
                    }
                    }

                    if(board[i][j]!==' '&&j>=3&&i<r-3)
                        {
                        if(board[i][j]===board[i+1][j-1]&&board[i+1][j-1]===board[i+2][j-2]&&board[i+2][j-2]===board[i+3][j-3])
                        {
                            winnerdecide(board[i][j]);
                            return ;
                        }
                        }


        }
    }

    
}

function winnerdecide(winner)
{
    gameOver=true;

    if(winner==="red")
    {
        document.getElementById("winner").innerText="red wins";
    }

    else{
        document.getElementById("winner").innerText="yellow wins";
    }
}


function piece()
{
    if(gameOver)
        return;
    const index=this.id.split("-");
    console.log(index);
    const c=parseInt(index[1]);
    const r=column[c]-1;

    var tile=document.getElementById(r.toString()+"-"+c.toString());
    console.log(tile);
    if(r<0)
        return ;

    if(currentPlayer===redPlayer)
    {
        tile.classList.add("red-piece");
        currentPlayer=yellowPlayer;
        board[r][c]="red";
    }

    else{
        tile.classList.add("yellow-piece");
        currentPlayer=redPlayer;
        board[r][c]="yellow";

    }
    winner();

    column[c]--;


}