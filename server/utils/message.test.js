const expect = require('expect');
const message = require('./message');

describe("messageGenerator", ()=> {
  it("should generate a correct message object ", () => {
    var from = 'Nits';
    var text = 'Welcome to mocha test case';
    var msg = message.generateMessage(from, text);
    expect(msg.createdAt).toBe('number');
  });
});
