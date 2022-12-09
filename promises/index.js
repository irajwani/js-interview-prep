/* 1. */

function getJobs() {
    return new Promise((resolve, reject) => {
        database.getJobs((err, data) => {
            if(err) return reject(err);
            resolve(data);
        })
    })
}

// is equivalent to the following async definition

async function getJobs() {
    try {
        const data = await database.getJobs();
        return data;    
    }
    catch (err) {
        throw err;
    }
}

/* 2. Var is not block scoped */

var promises = [];
for (var i = 0; i < students.length; i++) {
  var student = student[i]; 
  // ^ is the mistake, we should use const or let instead, OR the anonymous function below should be an IIFE, as that is a closure (closures bind variables to a particular scope)
  console.log(
    `Updating student=${student.name} to say that they like bananas.
  `);

  promises.push(function() {
    // If they don't already like bananas
    if (student.favouriteFood !== "Bananas") {
      // They'll like 'em now.
      student.favouriteFood = "Bananas";
    } else {
      console.log('This student is cool, he already likes bananas :)');
    }
    return database.save(student);
  })
}

// Because we used var, the student saved in the promises arr and the one in scope can be different

Promise.all(promises)
  .then((result) => {
    // Didn't won't work properly
  })
  .catch((err) => {
    // Handle error
  })

// A more readable version:

const students = ["Imad", "Khalil"]

async function updateStudents () {
    for (let student of students) {
      console.log(
        `Updating student=${student.name} to say that they like bananas.
      `);
      if (student.favouriteFood !== "Bananas") {
        // They'll like 'em now.
        student.favouriteFood = "Bananas";
      } else {
        console.log('This student is cool, he already likes bananas :)');
      }
      await database.save(student);
    }
}
  
updateStudents()
.then(() => {
    // Go your merry way
})
.catch((err) => {
    // There was a boo boo
})
