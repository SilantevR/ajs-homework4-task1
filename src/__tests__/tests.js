import healthStatus from '../index';

test.each([
  ['healthy', { name: 'Маг', health: 90 }],
  ['wounded', { name: 'Маг', health: 50 }],
  ['critical', { name: 'Маг', health: 10 }],
  ['died', { name: 'Маг', health: -20 }],
])('healthy status', (status, object) => {
  const result = healthStatus(object);
  expect(result).toBe(status);
});
