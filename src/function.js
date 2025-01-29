class Quaternion {
    constructor(w, x, y, z) {
        this.w = w;
        this.x = x;
        this.y = y;
        this.z = z;
    }

    cross(pw, px, py, pz) {
        let w = this.w * pw - this.x * px - this.y * py - this.z * pz;
        let x = this.w * px + this.x * pw + this.y * pz - this.z * py;
        let y = this.w * py - this.x * pz + this.y * pw + this.z * px;
        let z = this.w * pz + this.x * py - this.y * px + this.z * pw;
        return new Quaternion(w, x, y, z);
    }

    inv() {
        return new Quaternion(this.w, -this.x, -this.y, -this.z);
    }
}

class Vector3 {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

function listenGameStart(callback) {
    setInterval(() => {
        if (window.core) {
            if (window.core.appState === 3) {
                callback();
            }
        }
    }, 1000);
}

function listenKeyHold(key, callback) {
    document.addEventListener("keypress", function (e) {
        if (e.key === key) callback();
    });
}

listenGameStart(() => {
    let id = window.core.game.state.secret.id;
    /**@type {Number[]}*/
    let rotation = window.core.game.state.camera.rotation;
    let bodies = window.core.game.state.bodies;
    let player = bodies.find((v) => v.id === id)

    //JetPack
    listenKeyHold('r', function () {
        let base = new Quaternion(0, 1, 0, 0);
        let q = new Quaternion(...rotation);
        let rq = q.cross(base).cross(base.inv());
        player.vx = rq.x * 2;
        player.vy = rq.z * 2;
        player.vz = rq.y * 2;
    });
});