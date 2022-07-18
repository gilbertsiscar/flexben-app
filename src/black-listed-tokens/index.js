class BlackListedStore {
  constructor() {
    this.data = [];
  }

  add(token) {
    this.data.push(token);
  }

  list() {
    return this.data;
  }

  get(token) {
    return this.data.includes(token);
  }
}

module.exports = new BlackListedStore();
