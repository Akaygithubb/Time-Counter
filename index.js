const dayselement=document.querySelector(".days");
const hourelement=document.querySelector(".hours");
const minuteelement=document.querySelector(".minutes");
const secondelement=document.querySelector(".seconds");
const h1=document.querySelector("h1");
const countertimer=document.querySelector(".countertimer");
//! declaring required variables


//! times conversion in miliseconds
const seconds=1000;
const minutes=60*seconds;
const hours=60*minutes;
const day=24*hours;

const timerfunction=()=>{


    //! getting current data
    let now=new Date();
     let dd=String(now.getDate()).padStart(2,"0");
     //* 0 here means if we get single digit then it will add 0 before
     let mm=String(now.getMonth()+1).padStart(2,"0");
     //* +1 because of date function feature
     let yyyy=now.getFullYear();

     

    
    //!  taking date from user
     const entereddate=prompt("enter date").padStart(2,"0");
     const enteredmonth=prompt("enter month").padStart(2,"0");
    
     now=`${mm}/${dd}/${yyyy}`;
     
     let targeteddate=`${enteredmonth}/${entereddate}/${yyyy}`;
     

     //! if targetted date is less than current data then add 1 to year
     if(now>targeteddate){
        targeteddate=`${enteredmonth}/${entereddate}/${yyyy+1}`;

     }
     
 
const clearintervalid=setInterval(() => {

     

   //! getting current date and user date time in milliseconds
    const time=new Date(targeteddate).getTime();
    //* mm//dd//yy format
    //*gettime is used to return time in milliseconds
    const today=new Date().getTime();


    //! calculating difference
    const difference=time-today;

    //!calculating left days minutes hours and seconds
    const leftdays=Math.floor(difference/day);
    const lefthours=Math.floor((difference%day)/hours);
    const leftminutes=Math.floor((difference%hours)/minutes);
    const leftseconds=Math.floor((difference%minutes)/seconds);
    

    //!printing these left things on browser
    dayselement.innerText=leftdays;
    hourelement.innerText=lefthours;
    minuteelement.innerText=leftminutes;
    secondelement.innerText=leftseconds;
     

    //! if time reaches then clearing interval plus doing changes in text
    if(difference<0){
        countertimer.style.display="none";
        h1.innerText="Time's Up Hurray!";
        clearInterval(clearintervalid);
    }

}, 0);

}

timerfunction();