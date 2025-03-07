/*
Asynchronous JavaScript with Event Loop
Task 1: Simulating Asynchronous Behavior

Create a function simulateAsyncTask() that logs “Task started”, then after 2 seconds logs “Task finished”.

Use setTimeout to simulate this behaviour.
*/
function simulateAsyncTask() {
    console.log("Task started");
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let success = true;

            if(success){
                resolve("Task Task finished")
            } else{
                reject("Task is not completed")
            }


        }, 2000)
        
    })
}


simulateAsyncTask()
    .then((data)=>{
        console.log(data);
        
    })
    .catch((rejected_data)=>{
        console.log(rejected_data);
        
    })

/*
Task 2: Simulate Multiple Async Tasks with Different Delays

Create a function simulateMultipleTasks() that starts three asynchronous tasks with different delays (1 second, 2 seconds, and 3 seconds).

Each task should log "Task [n] finished" where [n] is the task number. Ensure the tasks run asynchronously.
*/

function simulateTask(taskNumber, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Task ${taskNumber} finished`);
            resolve(`Task ${taskNumber} completed`);
        }, delay);
    });
}

function simulateMultipleTasks() {
    console.log("Starting multiple tasks...");

    // Start all tasks asynchronously
    Promise.all([
        simulateTask(1, 1000), // Task 1 -> 1 second
        simulateTask(2, 2000), // Task 2 -> 2 seconds
        simulateTask(3, 3000)  // Task 3 -> 3 seconds
    ]).then(() => {
        console.log("All tasks completed!");
    });
}

// Call the function
simulateMultipleTasks();


/*
Task 3: Async Task with Callback Function

Create a function fetchDataWithCallback(callback) that simulates fetching data asynchronously using setTimeout (after 2 seconds).

Once the data is “fetched”, it should invoke the provided callback function with "Fetched data" as an argument.
*/

function fetchDataWithCallback(callback) {
    console.log("Fetching data...");

    setTimeout(() => {
        const data = "Fetched data";
        callback(data); // Invoke the callback with the fetched data
    }, 2000);
}

// Example usage:
fetchDataWithCallback((result) => {
    console.log(result); // Output: "Fetched data" after 2 seconds
});
