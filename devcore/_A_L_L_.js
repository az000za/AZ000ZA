module.exports = _A_L_L_ = class AlgoLinkLoop {
    // input = {
  
    // }
    OI = { // link output to input
      // 1: [
  
      // ],
      // 2: [
  
      // ],
      // 3: [
      //       // {funC: "add", ins: { a: 1, b: 2 }}
      //   ]
    };


    constructor(){
      const datatype = "number";  const fieldname = ""; const value = ""; const operation = ""; const result = "";
    }
    // hashOdometerCompression(){
    //   const constraint = {
    //     init: 0,
    //     limit:2**13,
    //     skip:1,
    //   };
    //   const hashOdometer = {

    //     patterns: [
    //       53813096,
    //       1317131,
    //       63,15,31,15
    //     ],
    //     track:`
    //         538130969 1
    //         538130970 3
    //         538130971 1
    //         538130972 7
    //         538130973 1
    //         538130974 3
    //         538130975 1
    //         538130976 63
    //         538130977 1
    //         538130978 3
    //         538130979 1
    //         538130980 7
    //         538130981 1
    //         538130982 3
    //         538130983 1
    //         538130984 15
    //         538130985 1
    //         538130986 3
    //         538130987 1
    //         538130988 7
    //         538130989 1
    //         538130990 3
    //         538130991 1
    //         538130992 31
    //         538130993 1
    //         538130994 3
    //         538130995 1
    //         538130996 7
    //         538130997 1
    //         538130998 3
    //         538130999 1
    //         538131000 15
    //         538131001 1
    //         538131002 3
    //         538131003 1
    //         538131004 7
    //         538131005 1
    //         538131006 3
    //         538131007 1
    //         538131008 127
    //         538131009 1
    //         538131010 3
    //         538131011 1
    //         538131012 7
    //         538131013 1
    //         538131014 3
    //         538131015 1
    //         538131016 15
    //     `;
    //   }
    //   let m = 1; for (let i = 2**31; i < 2**32;i++) console.log(i+1, (m * i) ^ (m * (i+1)))

    // }
    diffNeighBorAnalysis(){

    }
    linkOIS(){
      const constraint = {
            init: 0,
            limit:2**13,
            skip:1,
      };
      // funCLooper:
      const operators = require("./operators.js");
      for (let funCName in operators) {
        // paramLooper:
          const funC = operators[funCName];
          const IO = {
            funCName: funC.name,
            inputs:[],
          }
          for (let i = constraint.init; i < constraint.limit; i = i + constraint.skip) {
            IO.inputs[0] = i;
            for (let j = constraint.init; j < constraint.limit; j = j + constraint.skip) {
              IO.inputs[1] = j;
              const result = funC(...IO.inputs);
              // console.log(result, ...IO.inputs);
              if (!this.OI.hasOwnProperty(result)) {
                this.OI[result] = [IO];
              } else {
                this.OI[result].push(IO);
              }
              // console.log(IO);
            }
          }
          const output = funC(...IO.inputs);
          this.OI[output] = [IO];
          // console.log(this.OI);
      };
      console.log(this.OI);
    }
  }