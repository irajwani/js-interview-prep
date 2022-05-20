function bubbleSort(array) {
    for(var i=array.length; i>0; i--) { //first loop starts at the very end of the array and decrements down one below
        for(var j = 0; j<i; j++) { //second loop handles stopping one element earlier on each loop through the array
            if (array[j] > array[j+1]) {
                var placeholder = array[j];
                array[j] = array[j+1]
                array[j+1] = placeholder
            }//now just switch neighboring numbers if necessary
        }
    }
    console.log(array)
    return array

}

bubbleSort([1,4,3,2,8]);