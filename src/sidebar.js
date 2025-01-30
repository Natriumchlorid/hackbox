let itemList = [];

function trigger(item){
    let find = itemList.find(v => v.displayName === item);
    if(find){
        //itemList = itemList.
    }else{
        itemList = [...itemList, item];
    }
}

export {
    itemList,
    trigger
}