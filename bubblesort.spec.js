describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('sorts a array', function() {
    expect( bubbleSort([2, 5, 8, 1])).toEqual([1, 2, 5, 8])
  });
});

describe('Testing Swap function', function() {
  beforeAll(function () {
    spyOn(bubbleSort, 'swap').and.callThrough();
  });
  it('swaps elements 3 times', function (){
    bubbleSort.swap();
    expect(bubbleSort.swap.calls.count()).toEqual(3);
  })
});
