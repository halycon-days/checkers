
/*import `./checkerPiece.js`;*/ //doesn't seem to work

const WHITE = 4;
const BLACK = 5;

class CheckerBoard {

    /*The checkerboard is represented by a two dimensional array.
    Undefined indicates that a space is empty, spaces with a Checker object
    indicate that there is a checker occupying that space.
    
    The checkerboard also keeps track of remaining pieces on the board.*/ 
    constructor(){
        let red_Pieces = 0;
        let black_Pieces = 0;
        let arr = new Array(8); // create an empty array of length n
        for (var i = 0; i < 8; i++) {
            arr[i] = new Array(8); 
        }
    }

    /*Initializes the board state to a new game.
    The middle two rows of the checkerboard are always initialized as empty.*/
    set_board(){
        //let odd_flag = FALSE;
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 8; j++) {
                if (i == 3 || i == 4){
                    continue;
                }
                else if (i < 3){
                    if (i%2==0){
                        //is this legal syntax?
                        let newCheck = new Checker();
                        newCheck.setPos(i,j);
                        newCheck.setState(NORMAL_STATE);
                        //newCheck.setPlayer();

                        //this.arr[i][j]==
                    }

                }
            }

        }

    }

    move_piece(Checker,horiz_pos, vert_pos){
        if(is_valid_move(horiz_pos, vert_pos)==TRUE){

        }
    }

    swap_player(){

    }

    //potentially useful if we want to rotate the board for perspective purposes
    reverse_board(){

    }

    capture_piece(Checker){
        
    }

    //this function checks to see if a certain latitude and longitude is outside the bounds of the board
    static check_edges(horiz_pos, vert_pos){
        if (horiz_pos > 7 || horiz_pos < 0){
            return FALSE;
        }
        
        if (vert_pos > 7 || vert_pos < 0){
            return FALSE; 
        }

        return TRUE;
    }

    static is_valid_move(horiz_pos, vert_pos){
        if (check_edges(horiz_pos, vert_pos)==FALSE){
            return FALSE;
        }
    }

}