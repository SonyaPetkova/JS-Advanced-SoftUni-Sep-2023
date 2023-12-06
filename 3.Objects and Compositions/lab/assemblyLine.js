function result() {
  const assemblyLine = {
    hasClima: function (car) {
      car.temp = 21;
      car.tempSettings = 21;
      car.adjustTemp = () => {
        if (car.temp < car.tempSettings) {
          car.temp += 1;
        } else {
          car.temp -= 1;
        }
      };
    },
    hasAudio: function (car) {
      car.currentTrack = {
        name:null,
        artist: null,
      };
      car.nowPlaying=()=>{
        console.log(`Now playing '${car.currentTrack.name}' by ${car.currentTrack.artist}`);
      }
    },
  
    hasParktronic: function (car) {
      car.checkDistance=(distance)=>{
        if (distance < 0.1) {
          console.log("Beep! Beep! Beep!");
        }else  if( distance<0.25){
          console.log("Beep! Beep!");
        }else if(distance<0.5){
          console.log("Beep!");
        }else{
          console.log("");
        }
      }
    }
  }; 
  return assemblyLine
}




// const myCar = {
//   make: "Toyota",

//   model: "Avensis",
// };

// assemblyLine.hasParktronic(myCar);

// myCar.checkDistance(0.4);

// myCar.checkDistance(20);
// assemblyLine.hasAudio(myCar);

// myCar.currentTrack = {

// name: 'Never Gonna Give You Up',

// artist: 'Rick Astley'

// }

// myCar.nowPlaying();
// assemblyLine.hasClima(myCar);

// console.log(myCar.temp);

// myCar.tempSettings = 18;

// myCar.adjustTemp();

// console.log(myCar.temp);
// console.log(myCar);

