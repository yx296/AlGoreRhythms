function TempTracker() {
  this.temps = [];
  this.max;
  this.min;
  this.totalSumOfTemps = 0;
  this.hash = {};
}

TempTracker.prototype.get_max = function() {
  return this.max;
}

TempTracker.prototype.get_min = function() {
  return this.min;
}

TempTracker.prototype.insert = function(temp) {
  if (!this.max && !this.min) {
    this.max = this.min = temp;
  }

  if (temp > this.max) {
    this.max = temp;
  }

  if (temp < this.min) {
    this.min = temp;
  }

  this.temps.push(temp);
  this.totalSumOfTemps += temp;

  this.hash[temp] ? this.hash[temp]++ : this.hash[temp] = 1;
}

TempTracker.prototype.getMean = function() {
  var amountOfTemps = this.temps.length;
  var totalSum = this.totalSumOfTemps;
  
  return totalSum/amountOfTemps;
}

TempTracker.prototype.getMode = function() {
  var max = 0;
  var mode;

  for (var temp in this.hash) {
    if (this.hash[temp] > max) {
      max = this.hash[temp];
      mode = temp;
    }
  }

  return mode;
}

var tempT = new TempTracker();



tempT.insert(40)
tempT.insert(20);
tempT.insert(20);
tempT.insert(20);
tempT.insert(60);
tempT.insert(70);
tempT.insert(70);

console.log(tempT);

// console.log(tempT.getMean());
console.log(tempT.getMode());



