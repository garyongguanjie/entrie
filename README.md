# entrie
Autocomplete with fast prefix search of popular words.

It uses a trie prefix search followed by sorting based on frequency used based on web data.

# Demo
https://garyongguanjie.github.io/entrie/

# Dataset
https://www.kaggle.com/rtatman/english-word-frequency

# Usage
```js
<script src="https://garyongguanjie.github.io/entrie/entrie.js"></script>
<script>
let trie;
(async()=>{
    trie = await entrie.get(); // downloads trie with frequency data build from kaggle dataset
})();
let prefix = "hello"
let searchDistance = 4; // how many characters after prefix to search for
let words = entrie.find(trie,"hello",searchDistance); // returns array of words from most frequently used to least frequently used with prefix and search distance
</script>
```
# TODO 
Convert to javascript module
