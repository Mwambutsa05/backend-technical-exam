//Question 1:Functions, loops and Conditionals

// sub A. Function called countMembershipLevels(members) that takes an array of member objects
// and returns an object showing the count of each membership level including any new level that may be added
// { gold:0, silver:2, bronze:4, platinum:1 } example output

function countMembershipLevels(members) {
    const counts = {};
    members.forEach(member => {
      const level = member.membership;
      counts[level] = (counts[level] || 0) + 1;
    });
    return counts;
  }
  
  const members = [
    { name: "Dada", membership: "gold" },
    { name: "Dodo", membership: "silver" },
    { name: "Dede", membership: "gold" },
    { name: "Didi", membership: "bronze" },
    { name: "Dudu", membership: "platinum" }
  ];
  console.log(countMembershipLevels(members));

//   sub B. a function getGoldMembers(members) that returns an array of names of all members with
// the membership level "gold". If there are no gold members, return "No gold members found".
// Use the filter method.

function getGoldMembers(members) {
  const goldMembers = members.filter(member => member.membership === "gold").map(member => member.name);
  return goldMembers.length > 0 ? goldMembers : "No gold members found";
}
console.log(getGoldMembers(members));

// sub C. the getGoldMembers function to return "No gold members found" if there are no gold
// members, even when the members array is empty or contains invalid data.

function getGoldenMembers(members){
  if (members.membership.gold == 0 || members.membership.gold == "") return("No gold members found");
}
console.log(getGoldenMembers(members));

// sub D. function generateWelcomeMessages(members) that returns an array of messages like
// "Welcome, [name]! You are a [membership level] member."
// Use the map method.

function generateWelcomeMessages(members){
  return members.map(member =>`welcome ${members.name}! You are a ${member.membership} member` );
}
console.log(generateWelcomeMessages(members));

// sub E. => It saves Time
//        => it avoid repetitive Work
//        => and it is easy to use


// Question 2: Recursion and Algorithm thinking

// sub A. a recursive function sumDigits(n) that takes a number and returns the
// sum of its digits. Example: sumDigits(123) → 6

function sumDigits(n){
  if (n==0 || n==1) return (n=1)
    return (fact * n(n-1));
}
console.log (sumDigits(n));


function sumDigits(n) {
  if (n < 10) return n;
  return (n % 10) + sumDigits(Math.floor(n / 10));
}

console.log(sumDigits(123)); 

// sub B. Write a recursive function power(base, exponent) that calculates base^exponent. Example:
// power(2, 3) → 8.

function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

console.log(power(2, 3));

// a recursive function reverseWords(sentence) that reverses the order of words in a
// string. Example: "Hello world" → "world Hello".

function reverseWords(sentence) {
  if (!sentence.includes(" ")) return sentence;
  const words = sentence.split(" ");
  return words.pop() + " " + reverseWords(words.join(" "));
}

console.log(reverseWords("Hello world"));
 

// sub D. => iteration helps a programmer to avoid many codes
//        => iteration saves time 
//        => iteration is beginner friendly


// sub E.Convert the sumDigits(n) function to an iterative version. Compare the performance of both the
// recursive and iterative approaches when handling large numbers.

  
function sumDigitsIterative(n) {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}

console.log(sumDigitsIterative(123));


// sub f. a recursive function to reverse a string by breaking it down into smaller
// substrings. Example: 'JavaScript' → 'tpircSavaJ'
  
 function reverseString(str) {
  if (str === "") return "";
  return reverseString(str.substr(1)) + str.charAt(0);
}

console.log(reverseString('JavaScript'));


//  Question 3. Banking transaction system 

// sub A. a function calculateBalance(transactions, accountHolder) that
// returns the current balance for a user. If the user has no transactions, return "No transactions found".

function calculateBalance(transactions, accountHolder) {
  const userTransactions = transactions.filter(t => t.accountHolder === accountHolder);
  if (userTransactions.length === 0) return "No transactions found";
  return userTransactions.reduce((balance, t) => balance + t.amount, 0);
}


// sub B.a function largeTransactions(transactions, minAmount) that returns transactions
// above minAmount.


function largeTransactions(transactions, minAmount) {
  return transactions.filter(t => Math.abs(t.amount) > minAmount);
}

// sub C.a function sortTransactions(transactions) that sorts transactions from highest to
// lowest amount.

function sortTransactions(transactions){
  return transactions.sort((a,b) => b.score - a.score);
}

