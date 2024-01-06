let userInput = document.getElementById('date');
let resultTag = document.getElementById('result');
let btnCalculateTag = document.getElementsByClassName('btnCalculate')[0];
userInput.max = new Date().toISOString().split('T')[0];

calculateAge = () => {
  let birthDate = new Date(userInput.value);
  let birthDay = birthDate.getDate();
  let birthMonth = birthDate.getMonth()+1;
  let birthYear = birthDate.getFullYear();

  let currentDate = new Date();
  let currentMonth = currentDate.getMonth()+1;
  let currentDay = currentDate.getDay();
  let currentYear = currentDate.getFullYear();
  
  let Day,Month,Year;
  Year = currentYear - birthYear;
  if(currentMonth > birthMonth){
    Month = currentMonth - birthMonth;
  }else{
    Year--;
    Month = 12+currentMonth-birthMonth;
  }
  if(currentDay >= birthDay){
    Day = currentDay - birthDay;
  }else{
    Month--;
    Day = getDaysInMonth(birthYear,birthMonth)+currentDay-birthDay;
  }if(Month < 0){
    Month = 11;
    Year--;
  }
  resultTag.textContent=`You are ${Year} years , ${Month} months and ${Day} days olds.`;
}
getDaysInMonth=(year,month)=>{
  return new Date(year,month,0).getDate();
}
btnCalculateTag.addEventListener('click',()=>{
  calculateAge();
});