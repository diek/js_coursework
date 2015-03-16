function GetBeer(bottlesOfBeer){
    if (bottlesOfBeer > 0) {
        if (bottlesOfBeer == 1) {
            console.log(bottlesOfBeer + " bottle of beer left on the wall.");
        }
        else {
            console.log(bottlesOfBeer + " bottles of beer left on the wall.");
        }
    }
    else {
        console.log("No bottles of beer left on the wall.");
    }
}

GetBeer(99);
GetBeer(2);
GetBeer(1);
GetBeer(0);
