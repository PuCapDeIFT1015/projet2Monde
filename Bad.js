/********************************************************************************
 * 
 * Classe Bad
 * 2018-03-28
 * Description:
 * 
 ********************************************************************************/


var Bad = function (i, j) {
    this.i = x;
    this.j = y;
    this.voisinage = 5;
    this.ageMort = function () {
        return Math.floor(Math.random() *
            (Math.floor(AGE_MORT_MAX) - Math.ceil(AGE_MORT_MIN)))//30-80
            + Math.ceil(AGE_MORT_MIN);
    };

}
