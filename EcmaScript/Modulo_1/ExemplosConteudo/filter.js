    
    
    //========== FILTER =======================
    // EXEMPLO 01)  filtre crianças entre 2-11 anos
    const childrenAge= [2, 0, 5, 8, 12, 17, 13, 7, 10];
    
    var childrenfiltered = childrenAge.filter(item => item > 2 && item < 10);
    console.table(childrenfiltered);//[ 5, 8, 7 ]

    
    // EXEMPLO 02) filtre emails da rocketseat
    const mailList= [
        "robson@rocketseat.com",
        "fulano@gmail.com",
        "cleiton@rocketseat.com",
        "diego@rocketseat.com",
        "eu@adonis.com",
        "aloha@hawaii.com",
        "outro@emailqualquer.com"
    ];
    //solucao 1
    var mailFiltered =[];
    for(i = 0; i < mailList.length; i++){
        if(mailList[i].includes("@rocketseat.com")){//true
            mailFiltered.push(mailList[i]);
        }
    }
    console.table(mailFiltered);

    //soluçao 2
    var mailFiltered2 = mailList.filter(email => email.includes("@rocketseat.com"));
    console.table(mailFiltered2);