// 搜索框键盘按下事件
function handleInputKeydown() {
    console.log('handleInputKeydown', window.event.keyCode);
    if (window.event.keyCode === 13) {
        handleSearch()
    }

}

//设置星星的点击事件
function handleOnclick(){
    const inputNode = document.getElementsByClassName('star')[0]
    console.log('inputNode.src',inputNode.src)
    // inputNode.src="../assets/images/star-selected.png"
    if (inputNode.src === "http://127.0.0.1:5500/assets/images/star-selected.png"){
        inputNode.src = "http://127.0.0.1:5500/assets/images/start.png"
    }
     else{
        inputNode.src = "http://127.0.0.1:5500/assets/images/star-selected.png"
     }

    
}

function handleOnclick1(){
    const inputNode = document.getElementsByClassName('comstar')[0]
    console.log('inputNode.src',inputNode.src)
    // inputNode.src="../assets/images/star-selected.png"
    if (inputNode.src === "http://127.0.0.1:5500/assets/images/star-selected.png"){
        inputNode.src = "http://127.0.0.1:5500/assets/images/start.png"
    }
     else{
        inputNode.src = "http://127.0.0.1:5500/assets/images/star-selected.png"
     }

    
}