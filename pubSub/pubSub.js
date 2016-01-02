var EventBus = { 
  topics: {},

  subscribe: function(topic, listener) { 
    if (!this.topics[topic]) {
      this.topics[topic] = [];
    }

    this.topics[topic].push(listener);
  },

  publish: function(topic, data) {
    if (!this.topics[topic] || this.topics[topic].length < 1) return;

    // for each listener for that topic, invoke the listener with data or an empty object
    this.topics[topic].forEach(function(listener) {
      listener(data || {});
    })
  }
}

var events = {
  topics: {},

  subscribe: function(topic, listener) {
    this.topics[topic] = this.topics[topic] || [];
    this.topics[topic].push(listener);
  },

  publish: function(topic, data) {
    if (this.topics[topic]) {
      this.topic[topic].forEach(function(listener) {
        listener(data);
      })
    }
  }
}

var events = {
  topics: {},

  subscribe: function(topic, listner) {
    this.topics[topic] = this.topics[topic] || [];
    this.topics[topic].push(listener);
  },

  publish: function(topic, data) {
    if (this.topics[topic]) {
      this.topic[topic].forEach(function(listener) {
        listener(data);
      })
    }
  }
}





var Mailer = function () {
  EventBus.subscribe('order/new', this.sendPurchaseEmail);
}


Mailer.prototype = {
  sendPurchaseEmail: function(userEmail) {
    console.log("Sent email to " + userEmail);
  }
};

var Order = function(params) {
  this.params = params;
}

Order.prototype = {
  saveOrder: function () {
    EventBus.publish('order/new', this.params.userEmail);
  }
}

var mailer = new Mailer();
var order = new Order({userEmail: 'john@gmail.com'});

order.saveOrder();




// var Order = function(params) {
//   this.params = params;
// };

// Order.prototype = {
//   save: function() {
//     // save order
//     console.log("Order saved");
//     this.sendEmail();
//   },

//   sendEmail: function() {
//     var mailer = new Mailer();
//     mailer.sendPurchaseEmail(this.params);
//   }
// };

// var Mailer = function() {};

// Mailer.prototype = {
//   sendPurchaseEmail: function(params) {
//     console.log("Email sent to " + params.userEmail);
//   }
// };

// var order = new Order({ userEmail: 'john@gmail.com'  })
// order.save();
// // "Order saved"
// // "Email sent to john@gmail.com"











