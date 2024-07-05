const { createObjectDifferenceList } = require('../src/5-treeCompariston');

describe('createObjectDifferenceList', () => {
  it('should detect added properties', () => {
    const objOld = { a: 1 };
    const objNew = { a: 1, b: 2 };
    const expected = [
      { path: 'b', oldValue: null, newValue: 2 },
    ];
    expect(createObjectDifferenceList(objOld, objNew)).toEqual(expected);
  });

  it('should detect removed properties', () => {
    const objOld = { a: 1, b: 2 };
    const objNew = { a: 1 };
    const expected = [
      { path: 'b', oldValue: 2, newValue: null },
    ];
    expect(createObjectDifferenceList(objOld, objNew)).toEqual(expected);
  });

  it('should detect changed properties', () => {
    const objOld = { a: 1, b: 2 };
    const objNew = { a: 1, b: 3 };
    const expected = [
      { path: 'b', oldValue: 2, newValue: 3 },
    ];
    expect(createObjectDifferenceList(objOld, objNew)).toEqual(expected);
  });

  it('should detect nested changes', () => {
    const objOld = { a: { b: 2 } };
    const objNew = { a: { b: 3 } };
    const expected = [
      { path: 'a.b', oldValue: 2, newValue: 3 },
    ];
    expect(createObjectDifferenceList(objOld, objNew)).toEqual(expected);
  });

  it('should detect multiple changes', () => {
    const objOld = { a: 1, b: { c: 2 } };
    const objNew = { a: 2, b: { c: 3 }, d: 4 };
    const expected = [
      { path: 'a', oldValue: 1, newValue: 2 },
      { path: 'b.c', oldValue: 2, newValue: 3 },
      { path: 'd', oldValue: null, newValue: 4 },
    ];
    expect(createObjectDifferenceList(objOld, objNew)).toEqual(expected);
  });
});