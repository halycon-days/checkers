
/*import `./checkerPiece.js`;*/ //doesn't seem to work

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
    The middle two rows of the checkerboard are always initialized as empty.
    
    Method looks kind of ugly rn. If any ideas to refactor, go for it*/
    set_board(){

        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 8; j++) {
                if (i == 3 || i == 4){
                    continue;
                }
                else {
                    let newCheck = new Checker();
                    if (i%2==0){
                        if (j%2==0){
                            newCheck.setPos(i,j);
                            newCheck.setState(NORMAL_STATE);
                            //newCheck.setPlayer();
                            this.arr[i][j]== newCheck;
                        }   
                    }
                    else {
                        if (j%2!=0){
                            newCheck.setPos(i,j);
                            newCheck.setState(NORMAL_STATE);
                            //newCheck.setPlayer();
                            this.arr[i][j]== newCheck;
                        }   
                    }

                }
            }

        }
        this.red_Pieces = 12;
        this.black_Pieces = 12;

    }

    /*Used to move a piece to a certain square. Calls helper methods to perform
    legal move checking. Needs to set the index that it came from to undefined.
    I want to say that the actual movement is governed by the GUI...
        @param big_checker - Checker object that is being moved
        @param horiz_pos - space we are trying to move to (latitude)
        @param vert_pos - space we are trying to move to (longitude)
    */
    move_piece(big_checker,horiz_pos, vert_pos){
        if(is_valid_move(horiz_pos, vert_pos)==TRUE){

        }
        this.arr[big_checker.getLatitude][big_checker.getLongitude]=undefined;
        big_checker.setPos(horiz_pos, vert_pos);
    }

    swap_player(){

    }

    //potentially useful if we want to rotate the board for perspective purposes. 
    reverse_board(){

    }

    capture_piece(Checker){
        
    }

    /*Checks corner case to ensure move is not of the board.
        @param horiz_pos - space we are trying to move to (latitude)
        @param vert_pos - space we are trying to move to (longitude)
    */
    static check_edges(horiz_pos, vert_pos){
        if (horiz_pos > 7 || horiz_pos < 0){
            return FALSE;
        }
        
        if (vert_pos > 7 || vert_pos < 0){
            return FALSE; 
        }

        return TRUE;
    }

    /*This function checks to see if a move is valid. Uses check_edges and additionally
    detects if the space where the checker is attempting to move is occupied by a checker. 
        @param big_checker - Checker object that is being moved
        @param horiz_pos - space we are trying to move to (latitude)
        @param vert_pos - space we are trying to move to (longitude)
    */
    static is_valid_move(big_checker, horiz_pos, vert_pos){
        if (check_edges(horiz_pos, vert_pos)==FALSE){
            return FALSE;
        }
        if(this.arr[horiz_pos][vert_pos]!=undefined){
            return FALSE;
        }
        return TRUE;

    }

    static is_valid_capture(big_checker, horiz_pos, vert_pos){
        if (check_edges(horiz_pos, vert_pos)==FALSE){
            return FALSE;
        }
        if(this.arr[horiz_pos][vert_pos]!=undefined){
            return FALSE;
        }
        //add error checking to make sure there's a checker being hopped over
        return TRUE;

    }

}