import {writable} from "svelte/store";

let itemStore = writable(new Set([]));

/**
 * 触发侧边栏的更改
 * @param item {string} 功能的显示名称
 */
function trigger(item) {
    itemStore.update(v=>{
        if(v.has(item)){
            v.delete(item);
        }else{
            v.add(item);
        }
        return v;
    });
}

function add(item) {
    itemStore.update(v=>{
        v.add(item);
        return v;
    });
}

function remove(item) {
    itemStore.update(v=>{
        v.delete(item);
        return v;
    });
}

export {
    itemStore,
    trigger,
    add,
    remove,
}