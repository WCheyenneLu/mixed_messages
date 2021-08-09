let randomNumber = Math.floor(Math.random()*3);
let joke = '';
//console.log (randomNumber);
switch (randomNumber) { 
    case 0 : 
    joke = 'Why did Stalin cross the road? .... because he was Russi\'n';
    break;
    case 1 : 
    joke = 'Today an old lady asked me to check her balance.... so I pushed her over';
    break;
    case 2 : 
    joke = 'What did the shark say when he ate the clownfish...this tastes a little funny';
    break;
    default: 
    joke = "Error";
};
console.log(joke);
