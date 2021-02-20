fs = require("fs");

let lines = fs.readFileSync("unigram_freq.csv",{encoding:"utf8"}).split("\n");
let words = []
let freqs = []
for (let i=1;i<lines.length;i++){
    let [word,freq] = lines[i].split(",");
    words.push(word);
    freqs.push(parseInt(freq));
}

let trie = {};
for(let i=0;i<words.length;i++){
    let word = words[i]
    let freq = freqs[i]
    let temp = trie;
    for(let i=0;i<word.length;i++){

        if(!(word[i] in temp)){
            temp[word[i]] = {};
        }
        if(i==word.length-1){
            temp[word[i]]["_"] = 1
            temp[word[i]]["freq"] = freq
        }
        temp = temp[word[i]];
    }
}

fs.writeFileSync("trie.json",JSON.stringify(trie));