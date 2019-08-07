function uniq(arr) {
    return arr.filter(
        (item, index) => index === arr.lastIndexOf(item)
    );
}

test('uniq should filter duplicate values', () => {
    expect(uniq([1, 1, 2, 2, 3, 3])).toEqual([1, 2, 3]);
    expect(uniq([1, 1, "1", "1", undefined, undefined, null, null, NaN, NaN])).toEqual([1, "1", undefined, null, NaN]);
})
