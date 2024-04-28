
const age ={
    agePeriod:0,
    ageType:""
}

export const ageCalculator = (a,b) =>{
    const differenceInTime = a.getTime() - b.getTime();
    const differenceInDays = differenceInTime / (1000*60*60*24);
    if (differenceInDays<30){
        age.agePeriod= Math.floor(differenceInDays);
        age.ageType= "days";
    }
    else if (differenceInDays>=30 && differenceInDays<365){
        age.agePeriod= Math.floor(differenceInDays/30);
        age.ageType= "months";
    }
    else if (differenceInDays>=365){
        age.agePeriod= Math.floor(differenceInDays/365);
        age.ageType= "years";
    }
    return age;
}

