class Email {
    constructor(email) {
      if (!this.isValid(email)) {
        throw new Error('Invalid email address.');
      }
  
      this.email = email;
    }
  
    get value() {
      return this.email;
    }
  
    isValid(email) {
      // Use regular expressions or a third-party email validation library to validate email address format.
      return true;
    }
  }
  
  module.exports = Email;
  
