const entrie = {
    get:async function(){
        let response = await fetch("https://garyongguanjie.github.io/entrie/trie.json");
        trie = await response.json();
        console.log(trie);
        return trie;
    },
    find:function(trie,prefix,distance=2){
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
                return [];
            }
        }
        // get all possible words given prefix
        let arr = [];
        dfs(temp,prefix,arr,0);
        arr.sort((a,b)=>b.freq-a.freq);
        return arr.map(x=>x.word)
    }
}
