// //test.js 
// let num = 20;
// console.log(num);

// const sum = (param1, param2) => {
//     return param1 + param2;
// }
// console.log(sum(10,20))

// //test.js 
// /* var num = 20;
// console.log(num)

// function sum(param1, param2) {
//     return param1 + param2 
// }
// console.log(sum(10,20))
//  */

// const sum = () => {
//   return 2+3;
// }


// console.log(name1);
// var name1 = 'asdf';

// console.log(name);
// let name = 'asdf';

// print();
// function print() {
//     console.log('Hello')
// }

// print1();
// var print1 = function() {
    //     console.log("Hellow 222")
    // }
    
    // const print = () => 'Hellow 22';
    // const value = print();
    // console.log(value);

    // const print = () => console.log('Hellow 22')
    // print();

    // const sum = (a, b) => {
    //     return a + b; 
    // }
    // const sum = (a, b) => a + b:
    // sum();

    // const print = () => {
    //     console.log('Hellow 22')
    //     console.log('Hello')
    // }
    // print();

    // const print = (name = 'No Name') => {
    //     console.log(name)
    // }
    // print()

    // const print = (name) => {
    //     console.log(name || 'No Name 1');
    //     console.log(name || 'no name 222')
    // }
    // print()

    // const print = (name) => {
    //     const age = (name === 'Ashok') ? 30 : 20; 
    //     console.log(age)
    // }
    // print();

  
  // const print = (age) => {
    //     console.log("Strict", age === 20);
    //     console.log('Loose', age == 20)
    // }
    // // print(20);
    // print("20");

    // console.log('Name', 20 + 30, " Asohk" + 55)
    // Name
    // 50
    //  Ashok55

    // const obj = { name: 'Ashok'};
    // console.log(obj);
    
    // const obj = { name: 'Ashok'};
    // console.log(obj + "asdhok", 12);
    // [object Object]asdhok 
    // 12
    
    //  const obj = { name: 'Ashok'};
    //  console.log(obj.name + "asdhok", 12);


    // const obj = { name: 'Ashok'};
    // console.log(obj, "asdf", obj.name === "Ashok", 20 == 30);

    // ternary, && , || 

    // const func = (param) => {
    //     console.log("Param :::", param);
    // }

    // func(20);
    // func('Asohk');
    // func({ name: 'testing'});
    // func([0,2,3,3,3]);

    // const name = "Asohk";
    // func(name);
    
    // const number = 20;
    // func(number);

    // const obj = { name: 'testing'}
    // func(obj);

    // const arr = [0,2,3,3,3];
    // func(arr);

    // function func(param1, param2, param3) {
    //     console.log("Param1 ::", param1);
    //     console.log("Param 2:::", param2);
    //     console.log("Param 2:::", param3);
    // }
    
    // function func(param1, param2,param3="Blgr") {
    //     console.log("Param1 ::", param1);
    //     console.log("Param 2:::", param2);
    //     console.log("Param 3:::", param3);
    // }
    // func("Ashok", 30);
    // const func = (param1, param2, param3 = 'Plvd') => {
    //     console.log("Param1 ::", param1);
    //     console.log("Param 2:::", param2);
    //     console.log("Param 3:::", param3);
    // }

    // func("Ashok", 30);
    // func("Ashok", 30, "Blore");

    // const func = (obj) => {
    //     const isStudent = (obj.type === 'student' ) ? true : false; 
    //     if (isStudent) console.log("User is student");

    //     const dob = obj.dob || 20;
    //     const city = obj.address && obj.address.city || 'Bangalore'
    //     console.log(' DOb: ', dob, ' City', city);
    // }
    // const details = {
    //   name: 'Ashok',
    //   type: 'student'
    // };
    // func(details);
    // console.log(func(obj));
    // func({
    //     name: 'Ashok',
    //     type: 'student'
    // })

    // func({
    //     name: 'Ashok',
    //     type: 'student',
    //     address: {
    //         city: "Pulivendula"
    //     }
    // })
    // const details = {
    //     name: 'Ashok',
    //     type: 'student',
    //     address: {
    //         city: "Pulivendula"
    //     }
    // };
    // func(details);


    // const func = (obj) => {
    //     if (typeof obj === 'undefined') {
    //         console.log('Object is not defined')
    //         return;
    //     }
    //     // const isStudent = (obj.type === 'student' ) ? true : false; 
    //     // if (isStudent) console.log("User is student");

    //     if (obj.type === 'student') console.log("User is student");
    //     if (obj.age >= 18){
    //       console.log("User is Adult");
    //     }else{
    //       console.log("User is not an Adult");
    //    }
    //     const name = obj.name || 'Mohan';
    //     const dob = obj.dob || 20;
    //     const city = obj.address && obj.address.city || 'Bangalore'
    //     console.log('Name:',name,' DOb: ', dob, ' City:', city);
    // }
    // func({
    //   name:"Jagan",
    //   type:"student",
    //   age : 17,
    //   dob : "10 Sep 2000",
    //   address: {
    //     city :"Kadapa"
    //   }
    // })
    // const details =  {
    //   name:"Jagan",
    //   type:"student",
    //   age : 17,
    //   dob : "10 Sep 2000",
    //   address: {
    //     city :"Kadapa"
    //   }
    // }
    // func(details);

    // const func = (obj) => {
    //     if (typeof obj !== 'object') {
    //         console.log('Object is not defined')
    //         return;
    //     }
    //     // const isStudent = (obj.type === 'student' ) ? true : false; 
    //     // if (isStudent) console.log("User is student");

    //     if (obj.type === 'student') console.log("User is student");

    //     const dob = obj.dob || 20;
    //     // const city = obj.address && obj.address.city || 'Bangalore'

    //     const city = obj?.address?.city || 'Bangalore'


    //     console.log(' DOb: ', dob, ' City', city);
    // }
    // // func(12);
    // // func("asdf");
    // func({})

    // const obj = { dob : 20};
    // console.log('PRinting name', obj.name || 'Ashok')

    // console.log('PRinting name', name || 'Ashok');
    // console.log(name);


    // Object with different values and fucntions 
    // const obj = {
    //     name: 'Ashok',
    //     printName: function() {
    //         console.log('Name is', this.name);
    //     },
    //     getName: function() {
    //         return this.name;
    //     }
    // };
    // console.log(obj.name)
    // console.log(obj.printName);
    // console.log(obj.printName());
    // console.log(obj.getName());

    // call and apply 
    // const obj = {
    //     name: 'Ashok',
    //     age: 21,
    //     printName: function() {
    //         console.log('Name is', this.name);
    //     },
    //     // getName: function() {
    //     //     return this.name;
    //     //     return this.age;
    //     // }
    //     printAge: function() {
    //         console.log('Age is:',this.age);
    //     }
    // };
    // const name = obj.printName.call({name: 'Jagan'});
    // const age = obj.printAge.call({age: 21});
    // console.log(name);
    // console.log(age);

    // const obj = {
    //     name: 'Ashok',
    //     printName: function() {
    //         console.log('Name is', this.name);
    //     },
    //     getName: function() {
    //         return this.name;
    //     },
    //     logAddress: function(address) {
    //         console.log(this.name + ' is staying in ' + address);
    //     }
    // };
    // const name = obj.getName.call({name: 'Jagan'});
    // console.log(name);
    
    // obj.logAddress.call({name: 'Vamsi'}, 'bangalore');

    // Arrays 

    // const arr = [1, 'aasdf', false, { name: 'Ashok'}];
    // arr[1] = 'Ashok';
    // arr.push('Kumar')
    // console.log(arr);
    // arr.pop();
    // console.log(arr);
    // console.log(arr.slice(1, 2));

    // const arr1 = [1,2];
    // const arr2 = [3,4];

    // //const arr3 = arr1.concat(arr2);
    // // const arr3 = [...arr1, ...arr2];
    // console.log(arr3);
    
    // const func = () => {
    //   return 12
    // }
    // const output = func();
    // console.log(output)

    // const func = () => {
    //     const a = 23;
    //     console.log(a);
    // }
    // const output = func();
    // console.log(output)

    // const arr1 = [1,2,3,4];
    // for (let i = 0 ; i < arr1.length; i++) {
    //     const element = arr1[i];
    //     console.log(element);
    // }

    // const arr = [
    //     {
    //         name: 'sdf',
    //         id: 1
    //     },
    //     {
    //         name: 'asdfasdf',
    //         id: 2
    //     },
    //     {
    //         name: 'Jagan',
    //         id: 3
    //     }
    // ];

    // for(let i = 0 ;i < arr.length ; i++ ) {
    //     const element = arr[i];
    //     console.log(element);
    //     console.log(element.name);
    // }

    // const students = [
    //     {
    //         name: 'Jagan',
    //         age: 21
    //     },
    //     {
    //         name: 'Vamsi',
    //         age: 20
    //     },
    //     {
    //         name: 'Charan',
    //         age: 16
    //     }
    // ];

    // for (let i = 0 ; i < students.length ; i++ ) {
    //     const element = students[i];
    //     if (element.age > 18) {
    //         element.isAdult = true; 
    //     } else {
    //         element.isAdult = false;
    //     }
    // }
    // console.log(students);


    // const arr = [
    //     {
    //       director:"Prashant Neel",
    //       age:38,
    //       movie1:"Ugram",
    //       movie2:"KGF",
    //       hits: 2
    //      },
    //      {
    //        musicDirector:"Ravi Barsur",
    //        age:35,
    //        movie1:"Ugram",
    //        movie2:"KGF",
    //        hits: 2
    //      }
    //      ]
    //      for (let i=0;i<arr.length;i++){ 
    //        const elements =arr[i];
    //        if (elements.hits===2){
    //            elements.isSuccessfull= true;
    //         }else{
    //             elements.isSuccessfull=false;
    //         }
    //        //console.log(elements.movie1);
    //      }
    //      console.log(arr);


    
    // const students = [
    //     {
    //         name: 'Jagan',
    //         age: 21
    //     },
    //     {
    //         name: 'Vamsi',
    //         age: 20
    //     },
    //     {
    //         name: 'Charan',
    //         age: 16
    //     }
    // ];
    // const checkAdult = (arr) => {
        
    //     // if (!Array.isArray(arr)) {
    //     //     console.log("Invlaid input");
    //     //     return;
    //     // }
    //     if (Array.isArray(arr) === false) {
    //         console.log("Invlaid input");
    //         return "ERROR";
    //     }
    //     for (let i = 0 ; i < arr.length ; i++ ) {
    //         const element = arr[i];
    //         if (element.age > 18) {
    //             element.isAdult = true; 
    //         } else {
    //             element.isAdult = false;
    //         }
    //     }
    //     return arr; 
    // }

    // const result = checkAdult("ashok");
    // console.log(result);

    // const output = students.map((element) => {
    //     if( element.age > 18 ) {

    //     }
    //     return element;
    // })

    // const students = [
    //     {
    //         name: 'Jagan',
    //         age: 21
    //     },
    //     {
    //         name: 'Vamsi',
    //         age: 20
    //     },
    //     {
    //         name: 'Charan',
    //         age: 16
    //     }
    // ];


    // const fun = (input) => {
    //     console.log(input)
    // }
    // fun(2)
    // students.map();

    // const output = students.map((element) => {
    //     if( element.age > 18 ) {
    //         element.isAdult = true;
    //     } else {
    //         element.isAdult = false;
    //     }
    //     return element;
    // });

    // console.log(output)

    // const arr = [1,2,3,4,5];
    // const outputArray = arr.map((element) => {
    //     element = element + 1;
    //     return element;
    // });
    // console.log(outputArray);

    // const array = [
    //     {
    //       course:"School",
    //       passedOutAge: 16,
    //       schoolName:"Vivekananda",
    //       score:97
    //     },
    //     {
    //       course:"High School",
    //       passedOutAge: 18,
    //       highSchoolName:"SriChaitanya",
    //       score:94
    //     },
    //     {
    //       course:"B.Tech",
    //       passedOutAge: 22,
    //       collegeName:"Annamacharya",
    //       score:70
    //     }
    //   ]
    //   const changes = array.map((score) =>{
    //       for(let i=0;i<array.length;i++){
    //         if(array[i].score > 90){
    //             console.log("Good score");
    //             }
    //             else{
    //                 console.log("Average score");
    //             }
    //  }
    //       return "condition checked";
    //   });
    //   console.log(changes);

    // const arr = [1,2,3,4,5];
    // const outputArray = arr.map((element) => {
    //     element = element + 1;
    //     return 'DONE';
    // });
    // console.log(outputArray);

    // const arr = [];     
    // console.log(arr.__proto__)           // Array : arr.push(); 
    // console.log(arr.__proto__.__proto__) // Object : arr.toString()
    // console.log(arr.__proto__.__proto__.__proto__) // Object

    // const state = 'KA';
    // const arr = ['Ashok', 'Kumar'];
    // const outputArray = arr.map((element) => {
    //     // element = element + '__Bangalore : State: ' + state;
    //     element = `${element}__Bangalore : State: ${state}`;
    //     // element = "element__Bangalore"
    //     return element;
    // });
    // console.log(outputArray);

    // const arr = [1,2,3,4,5];
    // const outputArray = arr.filter((element) => {
    //     if (element > 2) {
    //         return true 
    //     } else {
    //         return false 
    //     };
    // });
    // console.log(outputArray);

    //  const students = [
    //     {
    //         name: 'Jagan',
    //         age: 21
    //     },
    //     {
    //         name: 'Vamsi',
    //         age: 20
    //     },
    //     {
    //         name: 'Charan',
    //         age: 16
    //     }
    // ];

    // const outputArray = students.filter((element) => {
    //     // if (element.age > 18) return true; 
    //     // else return false;

    //     return element.age > 18;
    // });
    // console.log(outputArray);

    // const outputArray = students.filter((element) => {
    //     if (element.name === "Vamsi") return true; 
    //     else return false;
    // });
    // console.log(outputArray);
    
    // const student = students.find((element) => {
    //     return element.name === 'Vamsi'
    // });
    // console.log(student)

    // const student = students.find((element) => element.name === 'Vamsi');
    // console.log(student)

    // const student = students.find((element) => element.age > 18);
    // console.log(student)
    
    // const details = {
    //     name: 'Ashok',
    //     age: 30
    // };

    // const collegeDetails = {
    //     name: 'JNTU',
    //     university: 'JNTUA'
    // }

    // const fullDetails = {
    //     ...details, 
    //     ...collegeDetails,
    //     city: 'Blore', 
    //     state: 'KA' 
    // }
    // console.log(fullDetails);

    const arr = [1,2,3];
    const arr2 = ["Ashok", "Kumar"];
    const arr3 = [{
        university : "JNTU",
        college : "Annamacharya"
    }];
   
    const arr4 = [
        ...arr, 
        ...arr2, 
        ...arr3,
    ];
    console.log(arr4)

    // const logName = ([name, ...remaining]) => {
    //     console.log("Name is", name);
    //     console.log('Remaining: :', remaining)
    // };

    // const arr = ['Ashok', 'bangalore', 'Ka', 'India'];
    // logName(arr);


    // const logName = ([name, city, ...remaining]) => {
    //     console.log("Name is", name);
    //     console.log("City is", city);
    //     console.log('Remaining: :', remaining)
    // };

    // const arr = ['Ashok', 'bangalore', 'Ka', 'India'];
    // logName(arr);
 

    // const logName = ({name, ...rest}) => {
    //     console.log('remainging::', rest)
    // }
    // const obj = {
    //     name: 'Ashok',
    //     state: 'Ka',
    //     city: 'Blore'
    // }
    // logName(obj);
    
