let trie;
(async()=>{
    trie = await entrie.get();
    document.getElementById("waittext").innerHTML = "Type here";
    let topElement = document.getElementById("words");
    topElement.style.display = "block";
})();
function onclickhandler(e) {
    let prefix = e.value.toLowerCase();
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
