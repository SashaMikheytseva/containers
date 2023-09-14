export default class ErrorRepository {
  constructor() {
    this.map = new Map();
    this.map.set(304, 'Not Modified');
    this.map.set(404, 'Not Found');
  }

  translate(code) {
    const checkCode = this.map.has(code);
    if (!checkCode) {
      return 'Unknown error';
    }
    return this.map.get(code);
  }
}
