/**
 * Created by leo880410 on 2016/3/26.
 */

window.onload=function(){
        var nav=document.getElementsByClassName("tab4");
        var con=document.getElementsByClassName("con");
        for(var i=0;i<nav.length;i++){
            nav[i].index = i;
            nav[i].onmouseover=function(){
                for(var n = 0; n < con.length; n++) {
                    con[n].style.display = "none";
                }
                con[this.index].style.display = "flex";
            }
        }
    }
