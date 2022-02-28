// //Exercise 2
// var array = [9,8,7,6,5,4],
//     sum = 0,
//     product = 1,
//     i;
// for (i = 0; i < array.length; i += 1) 
//    {
//     sum += array[i];
//     product *= array[i];
//     }
// console.log('Sum : '+sum + ' Product :  ' +product);

// //Exercise 3
// var array1 = [1, 2, 3];
//  var array2 = [2, 3,4,4,7,6,6,30, 1];

//  merge_array= array1.concat(array2);
//  console.log(merge_array);


// let unique_array = [];
// merge_array.forEach((c) => {
//     if (!unique_array.includes(c)) {
//         unique_array.push(c);
//     }
// });
// console.log(unique_array);

//Exercis 4: Write a pattern that matches e-mail addresses

let email_patternMatch = /^[a-zA-Z0-9!#\$%&'\*+\-\/=\?\^_`{\|}~]+(\.[a-zA-Z0-9!#\$%&'\*+\-\/=\?\^_`{\|}~]+)*@([a-zA-Z0-9]+([a-zA-Z0-9])\.)+[a-zA-Z0-9]+$/;;

 console.log(email_patternMatch.test('dimplepancl@gmail.com'))
 if (email_patternMatch.test('dimplepancl@gmail.com'))
 {
   console.log(true);
 }else{ 
 console.log(
 "You have entered an invalid email address!")}
   
function getFormvalue(){
   var x=document.getElementById("form1")
   var firstname=x.getElementsByTagName("input")[0].value;
   var lastname =x.getElementsByTagName("input")[1].value;
   console.log(firstname);
   console.log(lastname); 
  }
  //Exercise 6
  function removecolor(){
    const list = document.getElementById("colorSelect");
  if (list.hasChildNodes()) {
    list.removeChild(list.children[0]);
  }

  }
  //Exercise 8
  function month_name(x){
   var d=x.getMonth()+1;
  console.log(d);
  switch (d) {
    case 1:
      console.log("January");
      break;
    case 2:
        console.log("Feburary");
       break;
    case 3:
       console.log("March");
       break   ;        
    case 4:
      console.log("April");
      break; 
    case 5: 
      console.log("May");
      break;
    case 6:
      console.log("June");
      break;
    case 7:
      console.log("July");
      break;
    case 8:
      console.log("Auguest");
      break;
    case 9:
      console.log("September");
      break;
    case 10:
      console.log("October");
      break;
    case 11:
      console.log("November");
      break;
    case 12:
      console.log("December");
      break;    
    default:
      console.log("Enter month between 1 to 12");
      break;
  }

}
month_name(new Date("1/14/2009"));
month_name(new Date("10/11/2009"));
month_name(new Date("11/13/2014"));

//Exersize 9
function isWeekend(x) {
    if (x.getDay() == 6 || x.getDay() == 0) {
        console.log("Weekend")
    } else {
        console.log("Weekday");
    }
}
isWeekend(new Date('Nov 15, 2014'));
isWeekend(new Date('Nov 16, 2014'));
isWeekend(new Date('Nov 17, 2014'));

//Exercise 10
var library = [ 
  {
  author: 'Bill Gates',
  title: 'The Road Ahead',
  readingStatus: true
  },
  {
  author: 'Steve Jobs',
  title: 'Walter Isaacson',
  readingStatus: true
  },
  {
  author: 'Suzanne Collins',
  title: 'Mockingjay: The Final Book of The Hunger Games', 
  readingStatus: false
}];

for(let book of library){
  console.log(book.author, book.title, book.readingStatus);
}

//Exercise 11
setInterval(function() { var today = new Date();
    console.log(today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + "\n"); }, 1000);

 //Exercise 12
 var library = [{
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }
];

function compare(a, b) {
    if (a.libraryID < b.libraryID) {
        return -1;
    }
    if (a.title > b.title) {
        return 1;
    }
    if (a.author > b.author) {
        return 1;
    }
    return 0;
}

library.sort(compare);
console.log(library);   
  
