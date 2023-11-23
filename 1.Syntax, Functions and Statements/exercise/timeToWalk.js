function timeToWalk(stepsToDestination, footprintInMeters, speed) {
  let speedMetersInSec = speed / 3.6;
  let distanceInMeters = stepsToDestination * footprintInMeters;
  let time = distanceInMeters / speedMetersInSec;

  let restTimeInSeconds = Math.trunc(distanceInMeters / 500)*60;
  let totalTime=time+restTimeInSeconds;

  let timeInMinutes = Math.floor(totalTime / 60) ;
  let timeInSeconds=totalTime-(timeInMinutes*60);
  let hours=Math.trunc(timeInMinutes/60)


  let hoursToPrint=hours<10 ? `0${hours}` : `${hours}`

  let minutesToPrint=timeInMinutes%60;
  minutesToPrint=minutesToPrint<10 ? `0${minutesToPrint}` : `${minutesToPrint}`

let secondsToPrint=timeInSeconds< 10? `0${timeInSeconds.toFixed()}`: `${timeInSeconds.toFixed()}`

  console.log(`${hoursToPrint}:${minutesToPrint}:${secondsToPrint}`);
}

timeToWalk(4000, 0.60, 5);
timeToWalk(10000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5)
