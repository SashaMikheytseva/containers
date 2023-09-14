import ErrorRepository from '../js/map';

test('checking translate func', () => {
  const map = new ErrorRepository();
  const result1 = map.translate(304);
  const result2 = map.translate(404);
  const result3 = map.translate(200);
  expect(result1).toBe('Not Modified');
  expect(result2).toBe('Not Found');
  expect(result3).toBe('Unknown error');
});
