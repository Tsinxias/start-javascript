/*
Activity: Contact manager
*/

// TODO: Complete the program

console.log('Welcome to your contacts manager!');

var options = ['1: List contacts', '2: Add a contact', '0: Quit']; //Option list
options.forEach(option => console.log(option));

var contacts = {
  init: function (last, first) { //Initialize container
    this.last = last;
    this.first = first;
  },
  describe: function() { //Initialize writing form
    var description = 'Last name: ' + this.last + ', first name: ' + this.first;
    return description;
  },
};

var adding = []; //Empty container for added contacts

var name1 = Object.create(contacts);
name1.init('Smith', 'John');
var name2 = Object.create(contacts);
name2.init('Doe', 'Jane');

adding.push(name1, name2);

while (choice !== 0) { //Every
  var choice = prompt('Enter the number of the option chosen: ');
  if (choice === '1') {
    console.log('Here\'s the list of all your contacts:');
    adding.forEach(added => console.log(added.describe()));

  } else if (choice === '2') {
      var add = Object.create(contacts);
      add.init(prompt('Enter the contact\'s Last name:'), prompt('Enter the contact\'s First name:'));
      adding.push(add);
      console.log('Contact added');

  } else if (choice !== '2' && choice !== '0') {
      console.log('Your number is not valid. Choose between the options!');

  } else if (choice === '0') {
      console.log('Quitted');
      break;
  }
};
