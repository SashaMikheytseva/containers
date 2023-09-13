export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Такой объект уже существует в команде!');
    }
    this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach((hero) => this.members.add(hero));
  }

  toArray() {
    return Array.from(this.members);
  }
}
