function iD(arr) {

    let circles = [], pairs = 0;
    
    if(arr.length < 2) {
        
        return 0
    }

    for(var i = 0; i < arr.length; i++) {
        circles.push([i - arr[i], i + arr[i]])
    }

    circles = circles.sort((a,b) => {
        if(a[0] < b[0]) {
            return -1
        }

        if(a[0] > b[0]) {
            return 1
        }

        if(a[1] < b[1]) {
            return -1
        }

        if(a[1] > b[1]) {
            return 1
        }

        return 0
    })

    for(var i = 0; i < arr.length - 1; i++) {
        for(var j = i + 1; j < arr.length; j++) {
            if(circles[i][1] >= circles[j][0]) {
                pairs++
            }
            else {
                break
            }

            if(pairs > 10000000) {
                return -1
            }


        }
    }

    
    return pairs;
}

let ans = iD([1,5,2,1,4,0]);

console.log(ans);