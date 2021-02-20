let trie;
(async()=>{
    let response = await fetch("https://garyongguanjie.github.io/entrie/trie.json");
    trie = await response.json();
    console.log(trie);
})();
function entrie(trie,prefix,distance=2){
    function dfs(trie,prefix,arr,depth){
        if (depth>distance){
            return
        }
        for(let k in trie){
            let nextPrefix;
            if(k==="_"){
                arr.push({word:prefix,freq:trie["freq"]})
            }else{
                nextPrefix = prefix+k;
                dfs(trie[k],nextPrefix,arr,depth+1);
            }
        }
    }
    let temp = trie;
    for(let c of prefix){
        if(c in temp){
            temp = temp[c];
        }else{
            console.log("Word does not exist");
            return undefined;
        }
    }
    // get all possible words given prefix
    let arr = [];
    dfs(temp,prefix,arr,0);
    arr.sort((a,b)=>b.freq-a.freq);
    return arr.map(x=>x.word)
}
function onclickhandler(e) {
    let prefix = e.value;
    if(trie!==undefined){
        let topElement = document.getElementById("words");
        topElement.innerHTML = '';
        let words = entrie(trie,prefix,4);
        if(words==undefined)return;
        for(word of words){
            var div = document.createElement("div");
            var text = document.createTextNode(word);
            div.appendChild(text);
            topElement.appendChild(div);
        }

    }   
}
