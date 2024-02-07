window.onload = function(){
 /* let canvas = document.getElementById("canvas");
  let context = canvas.getContext("2d");
 let am = 20;
 let pm = 50;
  function greet(){
    context.clearRect(0,0,600,400);
    context.font = '30px Tahomma';
    context.fillStyle = 'black';
    context.fillText("Welcome" , am, pm);
    am += 10;
  //  pm += 20
    if (am >= 400){am -= 400}
   // if (pm >= 100){pm -= 100}
  };
  greet;
  setInterval(greet, 500);*/
  let a = document.getElementById("FT");
  let st = document.getElementById("ST");
  let cd= document.getElementById("CD");
  let nth = document.getElementById("nth");
  let n = document.getElementById("n");
  let sum = document.getElementById("sum");
 let clear = document.getElementById("clear");
  let lt  = document.getElementById("lt");
  
  let solveA  = document.getElementById("solveA");
  let solveA1 = document.getElementById("solveA1");
  let solveA2  = document.getElementById("solveA2");
  let solveA3  = document.getElementById("solveA3");
  let  solveSt = document.getElementById("solveSt");
  let solveNth = document.getElementById("solveNth");
  let solveN  = document.getElementById("solveN");
  let solveN1  = document.getElementById("solveN1");
  let solveN2  = document.getElementById("solveN2");
  let solveSum = document.getElementById("solveSum");
  let solveSum1 = document.getElementById("solveSum1");
  let solveLt = document.getElementById("solveLt");
  let solveLt1 = document.getElementById("solveLt1");
  let solveCd = document.getElementById("solveCd");
  let solveCd1 = document.getElementById("solveCd1");
  let solveCd2 = document.getElementById("solveCd2");
  
  //AP codes
  //clear
  clear.onclick = function(){
    a.value = " ";
    cd.value = " ";
    nth.value =  " ";
    st.value =  " ";
    n.value =  " ";
    sum.value =  " ";
    lt.value =  " ";
};
  //first term
  solveA.onclick = function(){
    a.value =  nth.value - ((n.value - 1) * cd.value);
      }; 
  solveA1.onclick = function(){
    a.value = st.value - cd.value ;
  };
  solveA2.onclick = function(){
   a.value = ((sum.value * 2) / n.value) - lt.value;
      };
  solveA3.onclick = function(){
  a.value = (((sum.value * 2) / n.value) - ((n.value - 1) * cd.value)) / 2;
  };
  //common difference
  solveCd.onclick = function(){
  cd.value = st.value - a.value;
  };
  solveCd1.onclick = function(){
  cd.value =  (nth.value - a.value) / (n.value - 1 );
  };
  solveCd2.onclick = function(){
cd.value = ((2 * sum.value) / ((n.value - 1) * n.value)) - (( 2 * a.value) / (n.value - 1)) 
  };
  // second term
solveSt.onclick = function(){
  st.value = a.value -  (-cd.value);
  };
  //nth term
  solveNth.onclick = function (){
      nth.value = a.value - (-(n.value - 1) * cd.value);
    };
    //number of term
  solveN.onclick = function (){
    n.value =  ((nth.value - a.value) / cd.value) + 1 ;
  };
  solveN1.onclick = function (){
    n.value = (sum.value * 2) / (a.value - (-lt.value));
  };
  solveN2.onclick = function (){
    let x = cd.value;
    let y = (2 * a.value) - cd.value;
    let z = -2 * sum.value;
    if (n.value <= 1) {  
      n.value = (-y  -  (((y ** 2) - (4 * x * z)) ** (1/2))) / (2 * x);}; 
//  if (n.value >= 1)  
   n.value = (-y  + (((y ** 2) - (4 * x * z)) ** (1/2))) / (2 * x);
  };
  //last term
  solveLt.onclick = function (){
    lt.value = a.value - (-(n.value - 1) * cd.value);
    };
  solveLt1.onclick = function (){
    lt.value = ((sum.value * 2) / n.value) - a.value;
    };
       //sum of term
  solveSum.onclick = function (){
    sum.value = (n.value / 2) * (a.value -(lt.value));
   };
  solveSum1.onclick = function (){
    sum.value = (n.value / 2) * (2 * a.value - (-(n.value - 1) * cd.value));
   };

  //GP codes
  let gpa = document.getElementById("gpa");
  let gpr = document.getElementById("gpr");
  let gp2 = document.getElementById("gp2");
  let gpn = document.getElementById("gpn");
  let gpnth = document.getElementById("gpnth");
  let gpsum = document.getElementById("gpsum");
  let gpsumi = document.getElementById("gpsumi");
  let clear1 = document.getElementById("clear1");
  
  let solvegpa = document.getElementById("solvegpa");
  let solvegpa1 = document.getElementById("solvegpa1");
  let solvegpa2 = document.getElementById("solvegpa2");
  let solvegpa3 = document.getElementById("solvegpa3");
  let solvegpa4 = document.getElementById("solvegpa4");
  let solvegp2 = document.getElementById("solvegp2");
  let solvegpr = document.getElementById("solvegpr");
  let solvegpr1 = document.getElementById("solvegpr1");
  let solvegpr2 = document.getElementById("solvegpr2");
  let solvegpr3 = document.getElementById("solvegpr3");
  let solvegpr4 = document.getElementById("solvegpr4");
  let solvegpn = document.getElementById("solvegpn");
  let solvegpn1 = document.getElementById("solvegpn1");
  let solvegpn2 = document.getElementById("solvegpn2");
  let solvegpnth = document.getElementById("solvegpnth");
  let solvegpsum = document.getElementById("solvegpsum");
  let solvegpsum1 = document.getElementById("solvegpsum1");
  let solvegpsumi = document.getElementById("solvegpsumi");
  
  clear1.onclick = function(){
    gpa.value = " ";
    gp2.value = " ";
    gpr.value = " ";
    gpn.value = " ";
    gpnth.value = " ";
    gpsum.value = " ";
    gpsumi.value = " ";
  };
  
  //first term 
  // Given second term
  solvegpa.onclick = function(){
    gpa.value = gp2.value / gpr.value;
  };
  // Given the nth term
  solvegpa1.onclick = function (){
    gpa.value =  gpnth.value  / (gpr.value ** (gpn.value - 1));
  };
  //Given the sum ( r > 1 )
  solvegpa2.onclick = function (){
    gpa.value = (gpsum.value * (gpr.value - 1)) /((gpr.value ** (gpn.value)) - 1);
  };
  // Given the sum ( r < 1)
  solvegpa3.onclick = function (){
    gpa.value =  (gpsum.value * ( 1  - gpr.value )) /( 1 - (gpr.value ** (gpn.value)));
  };
  // Given the infinite term
  solvegpa4.onclick = function (){
    gpa.value = gpsumi.value * ( 1 - gpr.value);
  };
  // common ratio
   // Given second term
  solvegpr.onclick = function(){
    gpr.value = gp2.value / gpa.value;
  };
  // the nth term is given
  solvegpr1.onclick = function(){
    let d = gpnth.value / gpa.value;
    let e = Math.log(d) / (gpn.value - 1);
    gpr.value = Math.exp(e);
  };
  // given that r > 1
 /*solvegpr2.=onclick = function(){
    let w = gpsum.value / gpa.value;
    let snm = 0;
    while (gpn.value >= 1){
      if (gpn.value == gpn.value){break};
      gpn.value --;
      snm += gpr.value ** gpn.value;
    };
    snm == w;
  };*/
  // given the sum of the infinite term
  solvegpr4.onclick = function(){
    gpr.value = (gpsumi.value - gpa.value) / gpsumi.value;
  };
  // number of term
  //  given nth term
  solvegpn.onclick = function (){
    let b = (gpr.value * gpnth.value) / gpa.value;
    gpn.value = Math.log(b) / Math.log(gpr.value);
  };
 // when r < 1
  solvegpn1.onclick = function(){
   let p = (gpa.value - (gpsum.value *(1 - gpr.value))) / gpa.value;
   gpn.value = Math.log(p) / Math.log(gpr.value);
  };
  //When r > 1
  solvegpn2.onclick = function(){
   let t = ((gpsum.value *(gpr.value - 1))- (-gpa.value)) / gpa.value;
   gpn.value = Math.log(t) / Math.log(gpr.value);
  };
  //nth term 
  solvegpnth.onclick = function(){
    gpnth.value = gpa.value * (gpr.value ** (gpn.value - 1));
  };
  // second term
  solvegp2.onclick = function (){
    gp2.value = gpa.value * gpr.value;
  };
  // sum of term 
  // r > 1
  solvegpsum.onclick = function(){
    gpsum.value = (gpa.value * ( (gpr.value ** gpn.value) - 1)) / (gpr.value - 1);
  };
  // r < 1
  solvegpsum1.onclick = function(){
    gpsum.value = (gpa.value * ( 1 - (gpr.value ** gpn.value)))/ ( 1 - gpr.value);
  };
  //sum of infinite term
  solvegpsumi.onclick = function(){
    gpsumi.value  = gpa.value / (1 - gpr.value);
  };
};