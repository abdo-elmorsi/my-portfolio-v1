//      ##################################      CREATE THE LETTERS       #############################     //
let letters = "abcdefghijklmnopqrstuvwxyz++",
lettersArray = Array.from(letters),
letersContainer = document.querySelector('.letters');

lettersArray.forEach(letter => {
    let span = document.createElement('span');
    span.textContent = letter;
    span.className = 'letter-box';
    letersContainer.appendChild(span);
});
//      ##################################      CREATE WORDS       #############################     //
const words = {
    programming: ["php", "javascript", "c++", "scala", "fortran", "ruby", "mysql", "python"],
    movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Harry Potter", "Up"],
    people: ["Albert Einstein", "Abdelrahman", "Alexander", "Cleopatra", "Gandhi"],
    countries: ["Syria", "Palestine", "Yemen", "Egypt", "Saudi Arabia", "Qatar"]
};
let allKeys = Object.keys(words);
let randomPropNumber = Math.floor(Math.random() * allKeys.length);
let randomPropName = allKeys[randomPropNumber];

let randomValueNumber = Math.floor(Math.random() * words[randomPropName].length);
let randomValueName = words[randomPropName][randomValueNumber];

console.log(randomValueName);
document.querySelector('.game-info span').innerHTML = randomPropName;

//      ##################################      CREATE THE GUESS SPAN     #############################     //
let lettersAndSpace = Array.from(randomValueName);
lettersAndSpace.forEach(letter => {
    
    let emptySpan = document.createElement('span');
    
    if (letter === ' ') {
        emptySpan.className = 'with-space'
    }
    document.querySelector('.letters-guess').appendChild(emptySpan);
})
//      ##################################      ADD THE CLICKED INPUT.VALUE TO THE GUESS     #############################     //
let guessSpans = document.querySelectorAll('.letters-guess span');

let wrongAttempts = 0;
let goodTries = 0;

let theDraw = document.querySelector('.hangman-draw');

document.addEventListener('click', e => {
    let theStatus = false;

    if (e.target.className === 'letter-box') {

        e.target.classList.add('clicked');
        
        let theClickedLetter = e.target.innerHTML.toLowerCase();
        let lettersAndSpace2 = Array.from(randomValueName.toLowerCase());
        
        lettersAndSpace2.forEach((wordLetter, wordIndex) => {
            
            if (theClickedLetter == wordLetter) {
                theStatus = true;
                
                guessSpans.forEach((span, spanIndex) => {
                    if (wordIndex === spanIndex) {
                        span.innerHTML = wordLetter;
                        goodTries++;
                        if (goodTries === lettersAndSpace2.length) {
                            setTimeout(finishGame, 1000);
                        }
                    }
                })
            }
        });
        //  if letter is wrong
        if (theStatus == false) {
            wrongAttempts++;
            theDraw.classList.add(`wrong-${wrongAttempts}`);

            document.getElementById('fail').play();
            if (wrongAttempts === 8) {
                setTimeout(endGame, 1500);
                
            }
        }else {
            document.getElementById('success').play();
        }
    }
})
//  end game function
function endGame() {
    let div = document.createElement('div');
    div.textContent = `Game Over, the Word Is ${randomValueName}`;
    div.className = 'popup';
    document.body.appendChild(div);
    document.getElementById('faild').play();
    setTimeout( _ => {
        window.location.reload();
    }, 5000);
}
function finishGame() {
    let div = document.createElement('div');
    div.textContent = `Game finish, Your mistakes are ${wrongAttempts}`;
    div.className = 'popup';
    document.body.appendChild(div);
    document.getElementById('finishGame').play();
    setTimeout( _ => {
        window.location.reload();
    }, 5000);
}
window.onload = setTimeout(function () {
    alert(`If you are a programmer
    ___    The answer is in the Console`)
}, 1000)































// // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  الجزء دا بتاع الحروف اللي هنظهرها في الصفحه عشان المستخدم يضغط عليهم ويختار منهم       @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// //     html هنا بنكتب الحروف اللي هنظهرها في الصفحه بدل ما نعملها بال     //
// let letters = "abcdefghijklmnopqrstuvwxyz++",

// //      هنا بنخزنهم كا ارراي عشان نقددر نعمل لووب عليهم وناخد اللي احنا عاوزينه
// lettersArray = Array.from(letters),

// //      هنا بنستدعي الديف اللي هنحط فيه الحروف
// letersContainer = document.querySelector('.letters');

// //      هنا بنعمل لوب علي كل حرف في الحروف عشان نعمل حاجه معينه عليه
// lettersArray.forEach(letter => {

//     //     foreach  علي قد عدد الحروف بنخلق سبان يعني هنخلق سبانات علي قد عدد الحروف اللي عندنا والكلام دا بسبب اللوب اللي هي
//     let span = document.createElement('span');

//     //      هنا كل ما بنخلق سبان بنحط فيه حرف ونخلق سبان تاني نحط الحرف اللي بعده عشان نحط الحروف كلها في سبانات
//     span.textContent = letter;

//     //     css هنا بنديهم كلاس عادي عشان الكلاس دا احنا مدينه تنسيقات بال 
//     span.className = 'letter-box';

//     //      هنا بنحط السبان بعد ما حطينا فيه الحرف واديناله كلاس 
//     letersContainer.appendChild(span);
// });


// // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// // @@@@@@@@@@@@@@@@  الجزء دا بتاع اختيار كلمه عشوائيه عشان نعمل عليها اللعبه ونكتب من فوق في الصفحه كلمه مفتاحيه عشان المستخدم يخمن عليها       @@@@@@@@@@@@@@@@@
// // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


// //      هنا بنخلق اوبجكت بداخله 4 اوبجكت وداخل كل اوبجكت ارراي دي المفروض انتي عارفاها يعني اي اوبجكت ويعني اي ارراي
// const words = {
//     programming: ["php", "javascript", "c++", "scala", "fortran", "ruby", "mysql", "python"],
//     movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Harry Potter", "Up"],
//     people: ["Albert Einstein", "Abdelrahman", "Alexander", "Cleopatra", "Gandhi"],
//     countries: ["Syria", "Palestine", "Yemen", "Egypt", "Saudi Arabia", "Qatar"]
// };

// //     تمام (programming, movies)اللي هي اساميهم اللي هي اوبجكت مثلا key هنا بنجيب ال
// let allKeys = Object.keys(words);

// //     (1 or 2 or 3 or 4) key هنا بنجيب رقم عشوائي من عدد ال
// let randomPropNumber = Math.floor(Math.random() * allKeys.length);

// //   programming هيجبلنا كل مره اول عنصر اللي هو  allKeys[randomPropNumber] allKeys[1] عشوائي عشان كل مره يجيب واحد مختلف يعني لو حطينا   key  هنا بنختار واحد من ال 
// let randomPropName = allKeys[randomPropNumber];

// //    اللي احنا عاوزينها بنجيب عدد الكلمات اللي جواها ونعمل رقم عشوائي علي عددهم key بعد ما بنجيب ال 
// let randomValueNumber = Math.floor(Math.random() * words[randomPropName].length);

// //     ["php", "javascript"]  يجبلنا كلمه من الكلمات اللي فيه مثلا programming هنا بنختار كلمه عشوائيه من الكلمات  مثلا كان فوق مختار  
// let randomValueName = words[randomPropName][randomValueNumber];

// console.log(randomValueName);

// //   Syria or Palestine  يخمن  countries في الصفحه عشان المستخدم يخمن من عليها الحل مثلا key هنا بنكتب ال 
// document.querySelector('.game-info span').innerHTML = randomPropName;


// // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  الجزء دا بتاع انشاء عدد المربعات علي كد عدد حروف الكلمه اللي هنخمنها         @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


// //      بنعمل ارراي من الكلمه عشان نقدر نعمل لوب عليها ونصنع عدد سبانات علي قد عدد الاحرف
// let lettersAndSpace = Array.from(randomValueName);
// lettersAndSpace.forEach(letter => {
    

//     //      علي قد عدد احرف الكلمه هنخلق سبانات
//     let emptySpan = document.createElement('span');
    

//     //     css عشان يبقا فيه خط كده باين انه فاضي بال  with-space هنا بنقوله لو السبان اللي اتخلق مكانه في الكملمه فاصي يعني مسافه فاضيه ما بين كلمتين اديله كلاس اسمه 
//     if (letter === ' ') {
//         emptySpan.className = 'with-space'
//     }

//     //      هنحط السبانات اللي خلقناها في الجزء الخاص بيها في الصفحه 
//     document.querySelector('.letters-guess').appendChild(emptySpan);
// })


// // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// // @@@@@@@@@  الجزء دا بتاع الزراير اللي فيها الحروف لما ندوس علي كل زرار يحط قيمته اللي هي الحرف في مكان الاجابه لو صح ولو غلط يبتدي يرسم في المرحوم   @@@@@@@@@@
// // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// //      بيستدعي الزرايسر كلها اللي فيها الحروف
// let guessSpans = document.querySelectorAll('.letters-guess span');

// //      بيستدعي الديف بتاع الرسمه بتاعت الراجل 
// let theDraw = document.querySelector('.hangman-draw');

// //      دي متغيرات عادي عملناها عشان نبقا نستخدمها بعدين
// let wrongAttempts = 0;
// let goodTries = 0;

// //     klck هنا بيقوله حطلي علي الصفحه كلها عنصر ال 
// document.addEventListener('click', e => {

//     //  متغير عادي نبقا نستخدمه
//     let theStatus = false;

//     //       letter-box هنا بيقوله لو العنصر اللي اتضغط عليه اسم الكلاس بتاعه 
//     if (e.target.className === 'letter-box') {

//         //  حطلي عليه الكلاس ده (طبعا الكلاس ده هيخلي لونه غامق عشان يبان انه اتضغط عليه قبل كده)
//         e.target.classList.add('clicked');

//         //    يعني صغير مع صغير مثلا عشان يقارن سموول بسموول small هنا هيخلي قيمه الزرار اللي اتضغط عليه 
//         let theClickedLetter = e.target.innerHTML.toLowerCase();

//         //  lettersAndSpace2 هنا هيخلي قيمه الكلمه اللي هنخمن عليها سموول برضوا عشان نعرف نساويها مع اللي فوق ونخزنها في فريبل اللي هو 
//         let lettersAndSpace2 = Array.from(randomValueName.toLowerCase());
        
//         //    بتاعه اللي خو بيبدا من 0 (wordIndex)index هنعمل لوب علي الكلمه اللي بنخمن عليها ونجيب اول حرف ونجيب ال 
//         lettersAndSpace2.forEach((wordLetter, wordIndex) => {
            
//             //   @@@@@@@@@@@@@@@@@@@@@@@@    هنا بيقول لو الحرف اللي دوسنا عليه موجود في الكلمه اعمل كذا      @@@@@@@@@@@@@@@@@@@@@@@@@@@@
//             if (theClickedLetter == wordLetter) {
//                 // true بس هنا بنقله لو اتنفذ الشرط ده يعني اختار حرف صح خليهالي تبقا false هي اصلن مع كل ضغطه في الصفحه بتكون 
//                 theStatus = true;
                
//                 //      بتاعت كل واحده فيهم index هنعمل لوب علي عدد السبانات نجيبهم ونجيب ال 
//                 guessSpans.forEach((span, spanIndex) => {

//                     //  بتاع مكان الحروف المتوقعه index  بتاع الكلمه يساوي  index هنقوله لو ال
//                     if (wordIndex === spanIndex) {

//                         //      اللي احنا شوفناه يساويه ولا لا  index حط الحرف في السبان بس في مكان ال
//                         span.innerHTML = wordLetter;

//                         //      عشان يحسب هو عمل صح كام مره ويزود كل مره
//                         goodTries++;

//                         //      هنا بنقوله لو عدد المحاولات الصح قد عدد حروف الكلمه المخمنه بمعني خلص اللعبه شغل الفنكسن دي اللي هي بتنهي اللعبه انا عاملها تحت
//                         if (goodTries === lettersAndSpace2.length) {
//                             //  استنا ثانيه واعملها
//                             setTimeout(finishGame, 1000);
//                         }
//                     }
//                 })
//             }
//             // @@@@@@@@@@@@@@@@@@@@@@@@@      اما في حاله الحرف اللي ضغط عليه مش موجود في الكلمه يعني غلط        @@@@@@@@@@@@@@@@@@@@@@@@@
//         });
//         //  فالشرط ده هيتحقق علي طول فيماعدا ان الحرف موجود في الكلمه FALSE هي طبيعي 
//         if (theStatus == false) {

//             //      هنا بنزود قيمه الكلمه دي اللي هي عدد الاخطا عشان هنستخدمها تحت
//             wrongAttempts++;

//             // css والكلاسات دي بترسم بتظهر الراجل وحدا وحدا عشان انتي مجهزاها بال wrong-2 تاني مره wrong-1 ونزود علي الكلاس ده رقم واحد بمعني ياخد اول مره كلاس  theDraw هنا بندي كل مره كلاس لل 
//             theDraw.classList.add(`wrong-${wrongAttempts}`);

//             //  بنشغل نغمه الفشل عشان حل غلط
//             document.getElementById('fail').play();

//             //      هنا بنقله لو عدد الغلطات وصل 8
//             if (wrongAttempts === 8) {

//                 //  شغل الفنكشن دي اللي هي بتنهي اللعبه  بعد ثانيه ونص
//                 setTimeout(endGame, 1500);
                
//             }
//         }else {
//             //      بنقله غير كده يعني لو الاختيار صح شغل اغنيه النجاح
//             document.getElementById('success').play();
//         }
//     }
// })

// // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// // @@@@@@@@@  دول الفانكشن اللي انا عاملهم وحدا لو خلص اللعبه حلها صح ووحدا لو حل غلط وخسر   @@@@@@@@@@
// // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


// //  end game function
// function endGame() {
//     let div = document.createElement('div');
//     div.textContent = `Game Over, the Word Is ${randomValueName}`;
//     div.className = 'popup';
//     document.body.appendChild(div);
//     document.getElementById('faild').play();
//     setTimeout( _ => {
//         window.location.reload();
//     }, 5000);
// }
// function finishGame() {
//     let div = document.createElement('div');
//     div.textContent = `Game finish, Your mistakes are ${wrongAttempts}`;
//     div.className = 'popup';
//     document.body.appendChild(div);
//     document.getElementById('finishGame').play();
//     setTimeout( _ => {
//         window.location.reload();
//     }, 5000);
// }

// //  دا الرت بيظهر في الاول عادي بيظهر الرساله دي
// window.onload = setTimeout(function () {
//     alert(`If you are a programmer
//     ___    The answer is in the Console`)
// }, 1000)