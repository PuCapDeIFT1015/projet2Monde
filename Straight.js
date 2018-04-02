/********************************************************************************
 * 
 * Classe Straight
 * 2018-03-28
 * Description:
 * 
 ********************************************************************************/

var Straight = function (i, j) {
    this.i = i;
    this.j = j;
    this.ageReproduction = AGE_REPRODUCTION;//25
    this.tauxReproduction = PROB_REPRODUCTION;//0.2
    this.ageMort = function () {
        return Math.floor(Math.random() *
            (Math.floor(AGE_MORT_MAX) - Math.ceil(AGE_MORT_MIN)))//20-100
            + Math.ceil(AGE_MORT_MIN);
    };

}
