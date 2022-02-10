//is there a way for me to include these constants in some kind of global header file
const INVALID_STATE = -1;
const REMOVED_STATE = 0;
const NORMAL_STATE = 1;
const KING_STATE = 2;
const PLAYER_1 = 7;
const PLAYER_2 = 8;

class Checker {
    constructor(){
        let horiz_pos = INVALID_STATE;
        let vert_pos = INVALID_STATE;
        let state = INVALID_STATE;
        let player = INVALID_STATE;
        //let color = ...? must be some js library for color?
    }

    getLatitude(){
        return horiz_pos;
    }

    getLongitude(){
        return vert_pos;
    }

    getState(){
        return state;
    }

    getPlayer(){
        return player;
    }

    setState(new_state){
        this.state = new_state;
    }

    setPos(new_horiz, new_vert){
        this.horiz_pos = new_horiz;
        this.vert_pos = new_vert;
    }

    setPlayer(new_player){
        this.player = new_player;
    }

}