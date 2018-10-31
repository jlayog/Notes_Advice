# Golf JS Exercise
Code:
```
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  if (strokes === 1) {
    return "Hole-in-one!";
  }
  else if (strokes <= par - 2) {
    return "Eagle";
  }
  else if (strokes == par - 1) {
    return "Birdie";
  }
  else if (strokes == par) {
    return "Par";
  }
  else if (strokes == par + 1) {
    return "Bogey";
  }
  else if (strokes == par + 2) {
    return "Double Bogey";
  }
  else if (strokes >= par + 3) {
    return "Go Home!";
  }
  else {
  return "Change Me";
  }
}
golfScore(5, 4);
```

Your function will be passed par and strokes arguments. Return the correct string according to this table 
which lists the strokes in order of priority; top (highest) to bottom (lowest):

```
Strokes	      Return
1	         "Hole-in-one!"
<= par - 2	 "Eagle"
par - 1	     "Birdie"
par	         "Par"
par + 1	     "Bogey"
par + 2	     "Double Bogey"
>= par + 3	 "Go Home!"
```



# Blackjack - Counting Cards
You will write a card counting function. It will receive a card parameter, which can be a number or a string, 
and increment or decrement the global count variable according to the card's value (see table). The function will
then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero
or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.

```
Count Change	         Cards
+1	                     2, 3, 4, 5, 6
0	                     7, 8, 9
-1	                     10, 'J', 'Q', 'K', 'A'
```

Do NOT reset count to 0 when value is 7, 8, or 9.
Do NOT return an array.
Do NOT include quotes (single or double) in the output.

Code:

```
var count = 0;

function cc(card) {
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}
```

Check the value of each card via a switch statement.
The variable count:
- Increases by 1 if the card is a 2, 3, 4, 5, or 6.
- Since 7, 8, and 9 aren’t worth anything, we ignore those cards in our switch statement.
- Decreases by 1 if the card is a 10, ‘J’, ‘Q’, ‘K’, or ‘A’.
Check the value of count and return the appropriate response.

Alternate code:

```
function cc(card) {
  var regex = /[JQKA]/;
  if (card > 1 && card < 7){count++;}
  else if (card === 10 || String(card).match(regex)){count--;}

  if (count > 0) return count + " Bet";
  return count + " Hold";
}
```

The function first evaluates if the condition card is a value greater than 1 and lower than 7, 
in which case it increments count by one. Then if the card is 10 or higher it decrements count by one. 
The variable regex is a regular expression representing values (letters) for the higher cards.
The else statement checks those values with the || (logical OR) operator; first for 10 and then for any string 
that matches the regular expression using String.match().




# Record Collection
You are given a JSON object representing a part of your musical album collection. 
Each album has several properties and a unique id number as its key. Not all albums have complete information.

Write a function which takes an album's id (like 2548), a property prop (like "artist" or "tracks"), and 
a value (like "Addicted to Love") to modify the data in this collection.

If prop isn't "tracks" and value isn't empty (""), update or set the value for that record album's property.

Your function must always return the entire collection object.

There are several rules for handling incomplete data:

If prop is "tracks" but the album doesn't have a "tracks" property, create an empty array before adding the 
new value to the album's corresponding property.

If prop is "tracks" and value isn't empty (""), push the value onto the end of the album's existing tracks array.

If value is empty (""), delete the given prop property from the album.

CODE:
```
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
  
  
  return collection;
}

updateRecords(5439, "artist", "ABBA");
```

Solution:

```
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));
-----
function updateRecords(id, prop, value) {
  if (prop === "tracks" && value !== "") {
   if(collection[id][prop]) {
    collection[id][prop].push(value);
   }
   else {
    collection[id][prop]=[value];
   }
  } else if (value !== "") {
    collection[id][prop] = value;
  } else {
    delete collection[id][prop];
  }

  return collection;
}
```

Explanation:
First checks if prop is equal to tracks AND if value isn’t a blank string.
- If both tests pass, value is pushed into the tracks array.
- If that first check doesn’t pass, it next checks only if value isn’t a blank string. 
- If that test passes, either a new key (prop) and value (value) are added to the object, 
or an existing key is updated if the prop already exists.
- If both these checks fail (meaning value must be an empty string), 
then the key (prop) is removed from the object.




# Profile Lookup
We have an array of objects representing different people in our contacts lists.
A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.
The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
If both are true, then return the "value" of that property.
If name does not correspond to any contacts then return "No such contact"
If prop does not correspond to any valid properties of a contact found to match name then return "No such property"

Code:
```
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop){
// Solution
for (var x = 0; x < contacts.length; x++) {
  if (contacts[x].firstName === name) {
    if (contacts[x].hasOwnProperty(prop)) {
      return contacts[x][prop];
    } else {
      return "No such property"
    }
  }
}
return "No such contact"
}
```

Explanation:
- The for loop runs, starting at the first object in the contacts list.
- If the firstName parameter passed into the function matches the value of the "firstName" 
key in the first object, the if statement passes.
- Then, we use .hasOwnProperty() method (checks if there’s a given property and returns a boolean) 
with prop as an argument. If it’s true, the value of prop is returned.
- If the second if statement fails, No such property is returned.
- If the first if statement fails, the for loop continues on to the next object in the contacts list.
- If the firstName parameter isn’t matched by the final contacts object, the for loop exits and No such contact is returned.




