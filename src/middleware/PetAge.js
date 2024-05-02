const ageCalculator = (a,b) =>{
    const age ={
        agePeriod:0,
        ageType:""
    }
    
    const birthDate = new Date(b).getTime();
    const todayDate = new Date(a).getTime();
    const differenceInTime = todayDate - birthDate;
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

export const ageTime = (req, res, next) => {
    if (req.body.dateOfBirth) {
        const bD = req.body.dateOfBirth;
        const tD = new Date()
        const age = ageCalculator(tD, bD)
        req.body.age= age.agePeriod;
        req.body.ageType= age.ageType;
    }
    next()
}