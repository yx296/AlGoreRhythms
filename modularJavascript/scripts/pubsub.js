var events = {
  topics: {},
  on: function(topicName, listener) {
    this.topics[topicName] = this.topics[topicName] || [];
    this.topics[topicName].push(listener);
  },
  off: function(topicName, listener) {
    if (this.topics[topicName]) {
      for (var i = 0; i < this.topics[topicName].length; i++) {
        if (this.topics[topicName][i] === listener) {
          this.topics[topicName].splice(i, 1);
          break;
        }
      };
    }
  },
  emit: function(topicName, data) {
    if (this.topics[topicName]) {
      this.topics[topicName].forEach(function(listener) {
        listener(data);
      });
    }
  }
};



