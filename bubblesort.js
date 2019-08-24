function bubbleSort (array) {
  let currentEle = array[0]
  let currentIdx = 0
  let nextEle = array[1]
  let nextIdx = currentIdx + 1;
  if (!array.length) {
    return -1;
  } else if (array.length -1 === array[0]) {
    return array;
  } else {
    if (currentEle < nextEle)  {
      currentIdx++
    } else {
      swap()
      // array[currentIdx] = array[nextIdx]
      array[currentIdx] = nextEle;
      array[nextEle] = currentEle;
      currentEle = nextEle;
      currentIdx++
      nextEle = array[nextIdx]
      bubbleSort()
    }
  }

  return array;
}


function swap () {
  return null
}
