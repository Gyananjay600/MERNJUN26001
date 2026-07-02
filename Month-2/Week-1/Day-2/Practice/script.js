console.log("Script loaded!");

// fetch

// promises

// 3 state of promise is pending, fulfilled, rejected

// let promise = new Promise((resolve, reject) => {
//     // resolve("Promise resolved successfully!");
//     reject("Promise rejected!");
// })

// console.log(promise);


// promise.then((res) => {
//        console.log("resolve promise executed: ", res);
// }).catch((err) => {
//     console.log("reject promise executed: ", err);
// })



async function getData() {

    try{

    const response =await fetch("https://jsonplaceholder.typicode.com/posts");
   
    const data = await response.json();

    console.log(data);

    } catch (error) {

    }
}

// getData();

// CRUD : CREATE , READ, UPDATE, DELETE

async function createData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify({
                name: "Gyananjay",
                age: 25
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();

        console.log("Created Data:");
        console.log(data);

    } catch (error) {
        console.log(error);
    }
}

// createData();





async function readData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        const data = await response.json();

        console.log("Fetched Data:");
        console.log(data);

    } catch (error) {
        console.log(error);
    }
}

// readData();



async function updateData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "PUT",
            body: JSON.stringify({
                id: 1,
                name: "Gyananjay Sahoo",
                age: 27
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();

        console.log("Updated Data:");
        console.log(data);

    } catch (error) {
        console.log(error);
    }
}

// updateData();


// async function deleteData() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
//             method: "DELETE"
//         });

//         if (response.ok) {
//             console.log("Data Deleted Successfully");
//         } else {
//             console.log("Delete Failed");
//         }

//     } catch (error) {
//         console.log(error);
//     }
// }

// deleteData();


async function getDataById() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

        const data = await response.json();

        console.log("Fetched Data by ID:");
        console.log(data);

    } catch (error) {
        console.log(error);
    }
}

// getDataById();


// String Interpolation

console.log("hii" + 2)

let str = `This is the Qlith ${2026}`;
console.log(str);


// Math Object 

console.log(Math.PI)
console.log(Math.log10(100))

console.log(Math.sqrt(16))
console.log(Math.SQRT1_2)

console.log(Math.floor(4.9))
console.log(Math.ceil(4.1))

console.log(Math.round(4.5))

console.log(Math.random())
console.log(Math.random() * 100)

console.log(Math.floor(Math.random() * 100))