import React from 'react';

function Timer(){
    const  countDown= () => {
        let dates = new Date("02 august 2021 17:00:00").getTime();
        let present = new Date().getTime();
        let gap = dates - present;
         let seconds = 1000;
         let minutes = seconds*60;
         let hours = minutes*60;
         let days = hours*24;
          let textDay = Math.floor(gap/days);
          let textHours = Math.floor(gap%days/hours);
          let textMinutes = Math.floor(gap%hours/minutes);
          let textSeconds = Math.floor(gap%minutes/seconds);
          return ` ${textDay}:${textHours}:${textMinutes}:${textSeconds}`
      }
      return(
          <div>
              {countDown()}
          </div>
      )
}

export default Timer