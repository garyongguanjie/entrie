let trie;
(async()=>{
    let trie = await entrie.get();
})();
function onclickhandler(e) {
    let prefix = e.value;
    let topElement = document.getElementById("words");
    topElement.innerHTML = '';
    if(prefix==="")return;
    if(trie!==undefined){
        let words = entrie.find(trie,prefix,4);
        if(words==undefined)return;
        for(word of words){
            var div = document.createElement("div");
            var text = document.createTextNode(word);
            div.appendChild(text);
            topElement.appendChild(div);
        }

    }   
}
