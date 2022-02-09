
/*import `./checkerPiece.js`;*/ //doesn't seem to work

const WHITE = 4;
const BLACK = 5;

class CheckerBoard {

    constructor(){
        let red_Pieces = 16;
        let black_Pieces = 16;
        let color_flag = FALSE;
        let arr = new Array(8); // create an empty array of length n
        for (var i = 0; i < 8; i++) {
            if (color_flag == FALSE){
                arr[i] = new Array(WHITE, BLACK, WHITE, BLACK, WHITE, BLACK, WHITE, BLACK); 
                color_flag = TRUE;
            }
            else {
                arr[i] = new Array(BLACK, WHITE, BLACK, WHITE, BLACK, WHITE, BLACK, WHITE); 
                color_flag = FALSE;
            }
        }
    }

}