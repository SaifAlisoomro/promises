let  promise = new Promise((resolve, reject) => {
    console.log("Promise Pendind");
    setTimeout(() => {
        let data = ["Saif Soomro","hamad","Sameer","Hafeez"]
        if (data){
            console.log("Promise Resolved");
            return resolve(data)
            
        } else {
            console.log("Promise Rejected");
            return reject(new Error("data fetch failed"))
            
        }
    }, 2000);
})
promise.then((res) => console.log(res)
).catch((err) => console.log("Apka data fetch nh ho saka")
)