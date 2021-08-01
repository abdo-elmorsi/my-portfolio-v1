let duration = 1500;

let blocksContainer = document.querySelector(".memory-game-blocks");

let blocks = Array.from(blocksContainer.children);

// let orderRange = Array.from(Array(blocks.length).keys())
let orderRange = [...Array(blocks.length).keys()];

let triesElement = document.querySelector('.tries span');

document.querySelector(".control-buttons span").onclick = function () {
    var theName = prompt("Enter Your Name", "Abdo Ahmed");


    localStorage.setItem('playerOne', theName);                                              // local storage
    
    if (theName == null || theName == "") {
        
        document.querySelector(".name span").innerHTML = "Unknown";
    }else {
        
        document.querySelector(".name span").innerHTML = theName;
    }

    document.querySelector(".control-buttons").remove();

    document.getElementById('start').play();
    
    setTimeout(function () {
        
        document.getElementById('start').pause();

        blocks.forEach((block, index) => {block.classList.remove('has-match');})
    }, 4500)
    // blocksContainer.classList.add('no-clicking')
    // setTimeout( function () {blocksContainer.classList.remove('no-clicking')}, 5000);
    
}
//  ####################################################################################### نداء
shuffle(orderRange);

blocks.forEach((block, index) => {

    block.classList.add('has-match');

    block.style.order = orderRange[index];

    block.addEventListener('click', _ => {
        
        flipBlock(block)
    })
})
//  ###################################### start flip function
function flipBlock(selectedBlock) {
    
    selectedBlock.classList.add('is-flipped');

    let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));

    if (allFlippedBlocks.length == 2) {

        //  stop clicking function
        stopclicking();

        //  check matched block function
        checkMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1])
    }


}
//  function stop clicking
stopclicking = _ => {
    blocksContainer.classList.add('no-clicking');

    setTimeout( function () {blocksContainer.classList.remove('no-clicking')}, duration);
}

//  check matched blocks        ##################################################
function checkMatchedBlocks(firstBlock, secondBlock) {

    if (firstBlock.dataset.technology === secondBlock.dataset.technology) {
        
        firstBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');
        
        firstBlock.classList.add('has-match');
        secondBlock.classList.add('has-match');
        
        goodTries = document.querySelector(".info-container .triesGood span");
        goodTries.innerHTML = parseInt(goodTries.innerHTML) + 1;

        document.getElementById('success').play();
        if (goodTries.innerHTML == 10) {
            

            setTimeout(function () {
                localStorage.setItem('false', triesElement.innerHTML);                                            // local storage
                document.getElementById('finish').play();
                setTimeout(function () {
                    window.location.reload();
                }, 5000);
            }, 2000)

        }

    }else {
        triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;

        document.getElementById('fail').play();

        if (triesElement.innerHTML >= 10) {

            triesElement.classList.add('red')
        }
        if (triesElement.innerHTML >= 15) {

            let loser = document.createElement('div');
            loser.setAttribute('class', 'loser');
            
            document.body.appendChild(loser);

            document.getElementById('faild').play();
            setTimeout(function () {
                window.location.reload();
            }, 5000);
        }

        setTimeout( _ => {
            firstBlock.classList.remove('is-flipped');
            secondBlock.classList.remove('is-flipped');
        }, duration);
    }
}
//  ###################################### start shuffle function
function shuffle(array) {
    
    var current = array.length, temp, random;
    while (current > 0) {
        
        random = Math.floor(Math.random() * current);
        current--;

        temp = array[current];      //  اخر عنصر فيها نضع قيمته بالصندوق
        
        array[current] = array[random];     //  نساوي اخر عنصر = بالرقم العشوائي اللي طلع من الارااي
        
        array[random] = temp;
    }
}
// #######################################################################################################################
// check the local storage
let localName = localStorage.getItem('playerOne');
let localtries = localStorage.getItem('false');
if (localtries !== null) {

    let div = document.createElement('div');
    let localNsmeIn = document.createElement('h3');
    let localTriesIn = document.createElement('span');
    
    localNsmeIn.innerHTML = localName;
    localTriesIn.innerHTML = localtries + ' false';


    div.appendChild(localNsmeIn);
    div.appendChild(localTriesIn);
    div.setAttribute('class', 'showTries')
    document.body.appendChild(div);
}