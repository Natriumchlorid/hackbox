import {add, remove, trigger} from "./sidebar.js";

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

function setVoxels(x, y, z, id) {
    window.core.game.voxel._setVoxel(x, y, z, id);
}

function listenGameStart(callback) {
    let handler = setInterval(() => {
        if (window.core) {
            if (window.core.appState === 3) {
                console.log("Starting game");
                globalThis.started = true;
                callback();
                clearInterval(handler);
            }
        }
    }, 1000);
}

function listenKeyUp(key, callback) {
    document.addEventListener('keyup', function (event) {
        if (event.key === key) callback();
    });
}

function listenKeyDown(key, callback) {
    document.addEventListener("keydown", function (event) {
        if (event.key === key) callback();
    });
}

function listenKeyClick(key, callback) {
    let triggered = false;
    document.addEventListener("keydown", function (event) {
        if (event.key === key) {
            triggered = true;
            callback();
        }
    });
    document.addEventListener("keyup", function (event) {
        if (event.key === key) triggered = false;
    })
}

listenGameStart(() => {
    let id = window.core.game.state.secret.id;
    let rotation = window.core.game.state.camera.rotation;
    let bodies = window.core.game.state.bodies;
    /**@namespace
     * @prop {number} px
     * @prop {number} py
     * @prop {number} pz
     * @prop {number} vx
     * @prop {number} vy
     * @prop {number} vz
     * */
    let player = bodies.find((v) => v.id === id);
    globalThis.player = player;

    //JetPack
    listenKeyDown('r', function () {
        add('JetPack');
    });
    listenKeyUp('r', function () {
        remove('JetPack');
    });
    listenKeyDown('r', function () {
        let base = new Quaternion(0, 1, 0, 0);
        let q = new Quaternion(...rotation);
        let rq = q.cross(base).cross(q.inv());
        player.vx = rq.z * 2;
        player.vy = -rq.y * 2 + 0.1;
        player.vz = rq.x * 2;
    });

    //AutoPave
    let autoPaveHandler = null;
    listenKeyClick('2', function () {
        if (autoPaveHandler === null) {
            autoPaveHandler = setInterval(() => {
                setVoxels(Math.round(player.px - 0.5), Math.floor(player.py - 1.5), Math.round(player.pz - 0.5), 170);
            }, 50);
        } else {
            clearInterval(autoPaveHandler);
            autoPaveHandler = null;
        }
        trigger('AutoPave');
    });
});