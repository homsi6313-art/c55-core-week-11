// Time.js
class Time {
  constructor(h = 0, m = 0, s = 0) {
    this.hours = h;
    this.minutes = m;
    this.seconds = s;
  }

  getHours() { return this.hours; }
  getMinutes() { return this.minutes; }
  getSeconds() { return this.seconds; }

  addHours(h) {
    this.hours = (this.hours + h) % 24;
    if (this.hours < 0) this.hours += 24;
  }

  addMinutes(m) {
    const totalMinutes = this.minutes + m;
    this.addHours(Math.floor(totalMinutes / 60));
    this.minutes = ((totalMinutes % 60) + 60) % 60;
  }

  addSeconds(s) {
    const totalSeconds = this.seconds + s;
    this.addMinutes(Math.floor(totalSeconds / 60));
    this.seconds = ((totalSeconds % 60) + 60) % 60;
  }

  toString() {
    const h = String(this.getHours()).padStart(2, '0');
    const m = String(this.getMinutes()).padStart(2, '0');
    const s = String(this.getSeconds()).padStart(2, '0');
    return `${h}:${m}:${s}`;
  }
}

module.exports = { Time };