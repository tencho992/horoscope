//Was missing a smirf this whole time 
// document.querySelector('#compute').addEventListener('click', checkDate)

// function for checkDate() from html *? or array first

// function checkDate() {
//   dateInput = document.getElementById("date-input");
//   selectedDate = new Date(dateInput.value);
//   selectedMonth = selectedDate.getMonth() + 1; // add 1 to the month since it's zero-indexed
//   selectedDay = selectedDate.getDate();

  // const dOB = {
    // dateInput = document.getElementById("date-input");
    // selectedDate = new Date(dateInput.value);
    // selectedMonth = selectedDate.getMonth() + 1; // add 1 to the month since it's zero-indexed
    // selectedDay = selectedDate.getDate();
  // }

  // check if the selected month is March

  // if (selectedMonth === 3) {

    // check if the selected date is between 1st and 15th of March

    // if (selectedDay < 1 || selectedDay > 15) {
    //   alert("Please select a date between 1st and 15th of March.");
    //   dateInput.value = "";
    // }
  // }
  
  // add more conditionals for other months and dates as needed
// }

// console.log(Array.isArray('checkDate'))
// console.log('')

//function for button
document.querySelector('#compute').addEventListener('click', compute)
// 
function compute(){
    const month= Number(document.querySelector('#month').value)
    const day= (document.querySelector('#day').value)   
// 
if (month===01 && day >=20 || month===02 && day<=18){
    document.querySelector('#placeToSee').innerText="Aquarius: 'I KNOW'"
}else if (month === 02 && day >=19 || month === 03 && day<=20){
    document.querySelector('#placeToSee').innerText="Pisces: 'I BELIEVE'"
}else if (month === 03 && day >=21 || month === 04 && day<=19){
    document.querySelector('#placeToSee').innerText="Aries: 'I AM'"
}else if (month === 04 && day >=20 || month === 05 && day<=20){
    document.querySelector('#placeToSee').innerText="Taurus: 'I HAVE'"
}else if (month === 05 && day >=21 || month === 06 && day<=20){
    document.querySelector('#placeToSee').innerText="Gemini: 'I THINK'"
}else if (month === 06 && day >=21 || month === 07 && day<=22){
    document.querySelector('#placeToSee').innerText="Cancer: 'I FEEL'"
}else if (month === 07 && day >=23 || month === 08 && day<=22){
    document.querySelector('#placeToSee').innerText="Leo: 'I AM'"
}else if (month === 08 && day >=23 || month === 09 && day<=22){
    document.querySelector('#placeToSee').innerText="Virgo: 'I ANALYZE'"
}else if (month === 09 && day >=23 || month === 10 && day<=22){
    document.querySelector('#placeToSee').innerText="Libra: 'I BALANCE'"
}else if (month === 10 && day >=23 || month === 11 && day<=21){
    document.querySelector('#placeToSee').innerText="Scorpio: 'I DESIRE'"
}else if (month === 11 && day >=22 || month === 12 && day<=21){
    document.querySelector('#placeToSee').innerText="Sagittarius: 'I SEE'"
}else if (month === 12 && day >=22 || month === 01 && day<=19){
    document.querySelector('#placeToSee').innerText="Capricorn: 'I USE'"
}else{
    document.querySelector('#placeToSee').innerText="Please Enter Valid Months and Dates Please & THANK YOU!"
}
// 
}
// 
// 
// 
// conditionals for dates
// if ( birthMonth===1 && birthDay>=20 || birthMonth===2 && birthDate<=18){
//     document.querySelector('#placeToSee').innerText='Aquarius'
// // }
// if ( birthMonth===1 && birthDay>=20 || birthMonth===2 && birthDate<=18){
//     document.querySelector('#placeToSee').innerText='Aquarius'
// } else if ( birthMonth===1 && birthDay>=20 || birthMonth===2 && birthDate<=18){
//     document.querySelector('#placeToSee').innerText='Aquarius'
// }
// // 
// // 
// // 
// placeToSee