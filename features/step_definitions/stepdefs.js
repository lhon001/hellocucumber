const assert = require('assert');
const { Given, When, Then } = require('cucumber');

function isItFriday(today) {
  // We'll leave the implementation blank for now
  if (today === 'Friday') {
    return "TGIF";
  } else {
    return 'Nope';
  }
}

function isItThirteen(date) {
  if (date === 13) {
    return 'Yes, it is the thirteenth';
  } else {
    return 'No, it is not the thirteenth';
  }
}

Given('today is {string}', function (givenDay) {
  // Write code here that turns the phrase above into concrete actions
  this.today = givenDay;
});

Given('the date is {int}', function (givenDate) {
  this.date = givenDate;
});

When('I ask whether it\'s Friday yet', function () {
 // Write code here that turns the phrase above into concrete actions
  this.actualAnswer = isItFriday(this.today);
});

Given('I ask whether it\'s the thirteenth', function() {
  this.actualDateAnswer = isItThirteen(this.date);
});

Then('I should be told {string}', function (expectedAnswer) {
  // Write code here that turns the phrase above into concrete actions
  assert.equal(this.actualAnswer, expectedAnswer);
});

Given('I should also be told {string}', function (expectedDate) {
  assert.equal(this.actualDateAnswer, expectedDate);
});
