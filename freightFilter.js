function scanAndFilter(freightItems, forbiddenString) {
    
    let filteredItems = [];
  
    filteredItems = freightItems.filter(x => x !== forbiddenString);

    return filteredItems;
}
  
 
  const filtered = scanAndFilter(
    ['dog', 'ray gun', 'cat', 'zippers', 'ray gun'],
    'ray gun'
  );
  console.log('Filtered Items');
  console.log(filtered); // should be ['dog', 'cat', 'zippers']



