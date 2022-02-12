//create a board sized matrix
const m = 2, n = 2;
//const n = 2;

//let x = 0;
const arr = [];
var gfg = new Array(2);
var h = 0;

for (var i = 0; i <gfg.length; i++) {
    gfg[i] = new Array(2);
}

for (var i = 0; i < m; i++) {
    //console.log("-Outer loop")
    for (var j = 0; j < n; j++) {
        //console.log("--Inner loop")
        //console.log(arr[i][j])
        gfg[i][j] = h++;
    }
}
//board[i][j] = 
var a = [], b;
while (a.push(b = []) < 9) while (b.push(null) < 9);
//console.log(a)

// Loop to display
for (var i = 0; i <m; i++) {
    for (var j = 0; j < n; j++) {
        console.log(gfg[i][j] + " ")
    }
    //console.log('\n')
}