# entrie
Autocomplete with fast prefix search of popular words.

It uses a trie prefix search followed by sorting based on frequency used based on web data.

# Demo
https://garyongguanjie.github.io/entrie/

# Dataset
https://www.kaggle.com/rtatman/english-word-frequency

# Usage
```
let response = await fetch("https://garyongguanjie.github.io/entrie/trie.json");
trie = await response.json();
let word = "test";
let distance = 2;
entrie(trie,word,distance);
```
# TODO 
Convert to javascript module