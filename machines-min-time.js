function minTime(machines, goal) {
    let total = 0, time = 1, unitsThatDay;
    while(total < goal) {
        unitsThatDay = machines.filter((val) => time % val == 0).length;
        if(unitsThatDay > 0) {
            total += unitsThatDay
        }
        time++
    }
    time--

    return time

}

// Given a schedule for number of days/time it takes for a particular machine to produce 1 unit, and that all
// machines operate in parallel, find minTime until Goal units have been produced