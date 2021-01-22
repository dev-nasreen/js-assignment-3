
// https://github.com/dev-nasreen/js-assignment-3


///========================xxxxxxx=============================//
//১. kilometerToMeter
///========================xxxxxxx===========================//
function kilometerToMeter(kilometer) {
    let meter = kilometer * 1000;
    return meter;
}

/*let result = kilometerToMeter(5);
console.log(result);*/


///==========================xxxxxxx===========================//
//২. budgetCalculator
///==========================xxxxxxx========================//

function budgetCalculator(watch, mobile, laptop) {
    let watchPrice = 50;
    let mobilePrice = 100;
    let laptopPrice = 500;

    totalWatchPrice = watch * watchPrice;
    totalMobilePrice = mobile * mobilePrice;
    totalLaptopPrice = laptop * laptopPrice;

    totalCost = totalWatchPrice + totalMobilePrice + totalLaptopPrice;
    return totalCost;
}

/*let totalBudget = budgetCalculator(5, 4, 2);
console.log(totalBudget); */

///=====================xxxxxxx============================//
//৩. hotelCost
///====================xxxxxxx==============================// 

function hotelCost(days) {
    var rent = 0;
    if (days <= 10) {
        rent = days * 100;
    } else if (days <= 20) {
        var first10days = 10 * 100;
        var remaining = days - 10;
        var second10days = remaining * 80;
        rent = first10days + second10days;

    } else {
        var first10days = 10 * 100;
        var second10days = 10 * 80;
        var remaining = days - 20;
        var nextDays = remaining * 50;
        rent = first10days + second10days + nextDays;
    }
    return rent;
}

/*let totalCost = hotelCost(25);
console.log(totalCost); */

///========================xxxxxxx=================================//
//৪. megaFriend
///=========================xxxxxxx=================================//

function megaFriend(friendsName) {
    let largestName = ' ';
    for (let i = 0; i < friendsName.length; i++) {
        let countFrndName = friendsName[i];
        if (largestName.length < countFrndName.length) {
            largestName = countFrndName;
        }
    }
    return largestName;
}
let friendsName = ['Mili', 'Simin', 'sumayya', 'YeaminBinteForkan', 'Laboni', 'JannatulMawa'];

//  let longestFrndName = megaFriend(friendsName);
//  console.log(longestFrndName);

