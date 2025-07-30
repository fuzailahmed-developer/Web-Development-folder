        let Weather = "aa";

        switch (true) {
            case (Weather > 30): console.log("Soo Cold"); break;
            case (Weather > 20 && Weather <= 30) : console.log("Go To Beach"); break;
            case (Weather > 10 && Weather <= 20) : console.log("Play Cricket"); break
            case (Weather <= 10) : console.log("Watch TV at Home");

            default : 
            console.log("Not Match");
        }

        var grade = 33;
        switch (true) {
            case grade > 90 : console.log("A+"); break;
            case grade > 80 :  console.log("A"); break;
            case grade > 70 : console.log("B");  break;
            case grade > 60 : console.log("C");  break;
            case grade > 50 : console.log("D");  break;
            case grade <= 50 : console.log("Fail"); break;
        
            default:
                console.log("!Error");
                break;
        }