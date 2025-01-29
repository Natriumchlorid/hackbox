class Quaternion{
    constructor(w,x,y,z) {
        this.w = w;
        this.x = x;
        this.y = y;
        this.z = z;
    }
    mul(pw,px,py,pz){
        return new Quaternion(this.w * pw,
        this.x * px,
        this.y * py,
        this.z * pz);
    }
    inv(){
        return new Quaternion(this.w,-this.x,-this.y,-this.z);
    }
}

class Vector3{
    constructor(x,y,z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

let id = window.core.game.state.secret.id;
/**@type {Number[]}*/
let rotation = window.core.game.state.camera.rotation;
let bodies = window.core.game.state.bodies;
let player = bodies.find((v)=>v.id===id)

function listenGameStart(callback){
    setInterval(() => {
        if(window.core.appState===3){
            callback();
        }
    },1000);
}
function listenKeyHold(key,callback){
    document.addEventListener("keypress",function(e){
        if(e.key===key)callback();
    });
}

listenGameStart(()=> {
//JetPack
    listenKeyHold('r', function () {
        let base = new Quaternion(0, 1, 0, 0);
        let q = new Quaternion(...rotation);
        let rq = q.mul(base).mul(base.inv());
        player.vx = rq.x * 2;
        player.vy = rq.z * 2;
        player.vz = rq.y * 2;
    });
});