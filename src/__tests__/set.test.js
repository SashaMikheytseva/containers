import Team from '../js/set';
import Character from '../js/Character';

test('checking add function', () => {
  const team = new Team();
  const char1 = new Character('Harry', 'Magician');

  team.add(char1);
  expect(team.members).toEqual(new Set([char1]));
});

test('should throw Error when adding the same character', () => {
  const team = new Team();
  const char1 = new Character('Harry', 'Magician');
  team.add(char1);
  expect(() => team.add(char1)).toThrow('Такой объект уже существует в команде!');
});

test('checkink addAll func', () => {
  const team = new Team();
  const char1 = new Character('Harry', 'Magician');
  const char2 = new Character('Roy', 'Bowman');
  const char3 = new Character('Luke', 'Daemon');
  team.addAll(char1, char2, char3);
  expect(team.members).toEqual(new Set([char1, char2, char3]));
});

test('checking toArray func', () => {
  const team = new Team();
  const char1 = new Character('Harry', 'Magician');
  const char2 = new Character('Roy', 'Bowman');
  team.addAll(char1, char2);
  const expected = [
    { name: 'Harry', type: 'Magician' },
    { name: 'Roy', type: 'Bowman' },
  ];

  expect(team.toArray()).toEqual(expected);
});
