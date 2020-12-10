import moment from 'moment';

export const calculateBonus = async (data) => {
  const arr = [];

  for (let i = 0; i < data.length; i++) {
    let time = Object.values(data[i].timeArrived);
    let bonus = 0;
    for (let x = 0; x < time.length; x++) {
      let a = moment('9:00', 'HH:mm');
      let b = moment(time[x], 'HH:mm');
      let ms = a.diff(b); // gets milliseconds befor 9:00
      let totalMinutes = ms / 60000; //converts milliseconds to minutes
      //    console.log(minutes)
      if (ms < 1) {
        continue;
      }
      // console.log(Math.floor(totalMinutes / 5), 'floored')
      // Divides the total minutes  by 5 and returns non floating numbers eliminating minutes under 5minutes
      bonus = bonus + Math.floor(totalMinutes / 5);
    }

    arr.push({ ...data[i], bonus });
  }
  // console.log(arr)
  return arr;
};
