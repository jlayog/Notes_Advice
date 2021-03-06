# Regular Expressions
###  Using the Test Method
Regular expressions are used in programming languages to match parts of strings. You create patterns to help you do that matching.

If you want to find the word "the" in the string "The dog chased the cat", you could use the following regular expression: /the/. 
Notice that quote marks are not required within the regular expression.

JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() method. The .test() method takes the 
regex, applies it to a string (which is placed inside the parentheses), and returns true or false if your pattern finds something 
or not.

```
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
// Returns true
```

Apply the regex myRegex on the string myString using the .test() method.
Ex:

```
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);
```


### Match Literal Strings
Here's another example searching for a literal match of the string "Kevin":

```
let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
testRegex.test(testStr);
// Returns true
```

Any other forms of "Kevin" will not match. For example, the regex /Kevin/ will not match "kevin" or "KEVIN".

```
let wrongRegex = /kevin/;
wrongRegex.test(testStr);
// Returns false
```


#### Match a Literal String with Different Possibilities
Using regexes like /coding/, you can look for the pattern "coding" in another string.

This is powerful to search single strings, but it's limited to only one pattern. You can search for multiple patterns using the 
alternation or OR operator: |.

This operator matches patterns either before or after it. For example, if you wanted to match "yes" or "no", the regex you want 
is /yes|no/.

You can also search for more than just two patterns. You can do this by adding more patterns with more OR operators separating 
them, like /yes|no|maybe/.


#### Ignore Case While Matching
Case (or sometimes letter case) is the difference between uppercase letters and lowercase letters. Examples of uppercase are "A", 
"B", and "C". Examples of lowercase are "a", "b", and "c".

You can match both cases using what is called a flag. There are other flags but here you'll focus on the flag that ignores case - 
the i flag. You can use it by appending it to the regex. An example of using this flag is /ignorecase/i. This regex can match the 
strings "ignorecase", "igNoreCase", and "IgnoreCase".
Ex:

```
let myString = "teresaCheung";
let fccRegex = /teresaCheung/i; 
let result = fccRegex.test(myString);
```


#### Extract Matches
You can extract the actual matches you found with the .match() method.

To use the .match() method, apply the method on a string and pass in the regex inside the parentheses. Here's an example:

```
"Hello, World!".match(/Hello/);
// Returns ["Hello"]
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
// Returns ["expressions"]
```

Apply the .match() method to extract the word coding.
Ex:

```
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result = extractStr.match(codingRegex); 
```


#### Find more than the First Match

```
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);
// Returns ["Repeat"]
```

To search or extract a pattern more than once, you can use the g flag.

```
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
// Returns ["Repeat", "Repeat", "Repeat"]
```

Using the regex starRegex, find and extract both "Twinkle" words from the string twinkleStar.

Note
You can have multiple flags on your regex like /search/gi
Ex:

```
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; 
let result = twinkleStar.match(starRegex); 
```


#### Match Anything with Wildcard Period
Sometimes you won't (or don't need to) know the exact characters in your patterns. Thinking of all words that match, say, a 
misspelling would take a long time. Luckily, you can save time using the wildcard character: .

The wildcard character . will match any one character. The wildcard is also called dot and period. You can use the wildcard 
character just like any other character in the regex. For example, if you wanted to match "hug", "huh", "hut", and "hum", you can 
use the regex /hu./ to match all four words.

```
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
humStr.match(huRegex); // Returns ["hum"]
hugStr.match(huRegex); // Returns ["hug"]
```

Ex:
Complete the regex unRegex so that it matches the strings "run", "sun", "fun", "pun", "nun", and "bun". Your regex should use the 
wildcard character.

```
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result = unRegex.test(exampleStr);
```


### Match Single Character with Multiple Possibilities
You can search for a literal pattern with some flexibility with character classes. Character classes allow you to define a group 
of characters you wish to match by placing them inside square ([ and ]) brackets.

For example, you want to match "bag", "big", and "bug" but not "bog". You can create the regex /b[aiu]g/ to do this. The [aiu] is 
the character class that will only match the characters "a", "i", or "u".

```
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex); // Returns ["big"]
bagStr.match(bgRegex); // Returns ["bag"]
bugStr.match(bgRegex); // Returns ["bug"]
bogStr.match(bgRegex); // Returns null
```

Ex:
Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample.
##### Note
Be sure to match both upper- and lowercase vowels.

```
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; 
let result = quoteSample.match(vowelRegex); 
```


### Match Letters of the Alphabet
Inside a character set, you can define a range of characters to match using a hyphen character: -.

For example, to match lowercase letters a through e you would use [a-e].

```
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex); // Returns ["cat"]
batStr.match(bgRegex); // Returns ["bat"]
matStr.match(bgRegex); // Returns null
```

Ex2:

```
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; 
let result = quoteSample.match(alphabetRegex);
```


### Match Numbers and letters of the alphabet
Using the hyphen (-) to match a range of characters is not limited to letters. It also works to match a range of numbers.

For example, /[0-5]/ matches any number between 0 and 5, including the 0 and 5.

Also, it is possible to combine a range of letters and numbers in a single character set.

```
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
// matches all letters and numbers in jennyStr
jennyStr.match(myRegex);
```

Ex:
Create a single regex that matches a range of letters between h and s, and a range of numbers between 2 and 6. Remember to 
include the appropriate flags in the regex.

```
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; 
let result = quoteSample.match(myRegex); 
```


### Negate match
To create a negated character set, you place a caret character (^) after the opening bracket and before the characters you do 
not 
want to match.

For example, /[^aeiou]/gi matches all characters that are not a vowel. Note that characters like ., !, [, @, / and white space 
are matched - the negated vowel character set only excludes the vowel characters.
Ex:

```
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi; 
let result = quoteSample.match(myRegex); 
```


### Match Characters that occur one or more times
You can use the + character to check if that is the case. Remember, the character or pattern has to be present consecutively. 
That is, the character has to repeat one after the other.

For example, /a+/g would find one match in "abc" and return ["a"]. Because of the +, it would also find a single match in "aabc" 
and return ["aa"].

If it were instead checking the string "abab", it would find two matches and return ["a", "a"] because the a characters are not 
in a row - there is a b between them. Finally, since there is no "a" in the string "bcd", it wouldn't find a match.
Ex:

```
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; 
let result = difficultSpelling.match(myRegex);
```


### Match characters that occur zero or more times
There's an option that matches characters that occur zero or more times.

The character to do this is the asterisk or star: *.

```
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); // Returns ["goooooooo"]
gPhrase.match(goRegex); // Returns ["g"]
oPhrase.match(goRegex); // Returns null
```

Ex:
Create a regex chewieRegex that uses the * character to match all the upper and lower"a" characters in chewieQuote. Your regex 
does not need flags, and it should not match any of the other quotes.

```
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; //We can’t use flags to accept capital letter (ie ‘A’), so running /Aa*/ should catch 
both the first capital ‘A’ and the duplicated ‘a’-s that follow.
let result = chewieQuote.match(chewieRegex);
```


### Lazy Matching
In regular expressions, a greedy match finds the longest possible part of a string that fits the regex pattern 
and returns it as a match. The alternative is called a lazy match, which finds the smallest possible part of the 
string that satisfies the regex pattern.

You can apply the regex /t[a-z]*i/ to the string "titanic". This regex is basically a pattern that starts with t, 
ends with i, and has some letters in between.

Regular expressions are by default greedy, so the match would return ["titani"]. It finds the largest sub-string 
possible to fit the pattern.

However, you can use the ? character to change it to lazy matching. "titanic" matched against the adjusted regex 
of /t[a-z]*?i/ returns ["ti"].
Ex:
Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>". Remember the wildcard . in a 
regular expression matches any character.

```
let text = "<h1>Winter is coming</h1>";
let myRegex = /<h1>?/; // Changed this line
let result = text.match(myRegex);
```



### Match beginning string patterns
Prior challenges showed that regular expressions can be used to look for a number of matches. They are also used to search for 
patterns in specific positions in strings.

In an earlier challenge, you used the caret character (^) inside a character set to create a negated character set in the form 
[^thingsThatWillNotBeMatched]. Outside of a character set, the caret is used to search for patterns at the beginning of strings.

```
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
// Returns true
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
// Returns false
```

Ex:
Use the caret character in a regex to find "Cal" only in the beginning of the string rickyAndCal.

```
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Changed this line
let result = calRegex.test(rickyAndCal);
```


#### Match ending string patterns
You can search the end of strings using the dollar sign character $ at the end of the regex.

```
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
// Returns true
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);
// Returns false
```

Ex:
Use the anchor character ($) to match the string "caboose" at the end of the string caboose.

```
let caboose = "The last car on a train is the caboose";
let lastRegex = /change/; // Changed this line
let result = lastRegex.test(caboose);
```


### Match All letters and numbers
Using character classes, you were able to search for all letters of the alphabet with [a-z]. This kind of character class is 
common enough that there is a shortcut for it, although it includes a few extra characters as well.

The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_]. This character 
class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore character (_).

```
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers); // Returns true
shortHand.test(numbers); // Returns true
longHand.test(varNames); // Returns true
shortHand.test(varNames); // Returns true
```

These shortcut character classes are also known as shorthand character classes.
Ex:
Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings.

```
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/gi; // Changed this line
let result = quoteSample.match(alphabetRegexV2).length;
```


#### Match Everything but letters and numbers
You can search for the opposite of the \w with \W. Note, the opposite pattern uses a capital letter. This shortcut is the same 
as [^A-Za-z0-9_].

```
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand); // Returns ["%"]
sentence.match(shortHand); // Returns ["!"]
```

Ex:
Use the shorthand character class \W to count the number of non-alphanumeric characters in various quotes and strings.

```
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/gi; // Changed this line
let result = quoteSample.match(nonAlphabetRegex).length;
```

- Your regex should use the global flag.
- Your regex should find 6 non-alphanumeric characters in "The five boxing wizards jump quickly.".
- Your regex should use the shorthand character.
- Your regex should find 8 non-alphanumeric characters in "Pack my box with five dozen liquor jugs."
- Your regex should find 6 non-alphanumeric characters in "How vexingly quick daft zebras jump!"
- Your regex should find 12 non-alphanumeric characters in "123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ."


### Match all numbers
The shortcut to look for digit characters is \d, with a lowercase d. This is equal to the character class [0-9], which looks for 
a single character of any number between zero and nine.
Ex:

```
let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g; // Changed this line
let result = numString.match(numRegex).length;
```


#### Match All Non-Numbers
You can also search for non-digits using a similar shortcut that uses an uppercase D instead.

The shortcut to look for non-digit characters is \D. This is equal to the character class [^0-9], which looks for a single 
character that is not a number between zero and nine.

```
let numString = "Your sandwich will be $5.00";
let noNumRegex = /\D/g; // Changed this line
let result = numString.match(noNumRegex).length;
```

### Restrict Possible Usernames

Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.

You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their 
username.

1) The only numbers in the username have to be at the end. There can be zero or more of them at the end.

2) Username letters can be lowercase and uppercase.

3) Usernames have to be at least two characters long. A two-letter username can only use alphabet letter characters.


Change the regex userCheck to fit the constraints listed above.

- Your regex should match JACK
- Your regex should not match J
- Your regex should match Oceans11
- Your regex should match RegexGuru
- Your regex should not match 007
- Your regex should not match 9

Solution:

```
let username = "JackOfAllTrades";
let userCheck = /^[a-z]{2,}\d*$/i;
let result = userCheck.test(username);
```






















































