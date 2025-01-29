class Quaternion {
    constructor(w, x, y, z) {
        this.w = w;
        this.x = x;
        this.y = y;
        this.z = z;
    }

    cross(q) {
        let w = this.w * q.w - this.x * q.x - this.y * q.y - this.z * q.z;
        let x = this.w * q.x + this.x * q.w + this.y * q.z - this.z * q.y;
        let y = this.w * q.y - this.x * q.z + this.y * q.w + this.z * q.x;
        let z = this.w * q.z + this.x * q.y - this.y * q.x + this.z * q.w;
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
                console.log("Starting game");
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
        let rq = q.cross(base).cross(q.inv());
        player.vx = rq.z * 2;
        player.vy = -rq.y * 2 + 0.1;
        player.vz = rq.x * 2;
    });
});