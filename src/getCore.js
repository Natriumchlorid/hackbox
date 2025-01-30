Object.defineProperty(Object.prototype, "isAdmin", {
    get() {
        return true;
    },
    set() {
        /**@namespace
         * @prop {object} game 游戏目录
         * @prop {object} game.voxel 方块
         * @prop {function} game.voxel._setVoxel 设置方块
         * @prop {object} game.state 游戏状态
         * @prop {object} game.state.secret 个人信息
         * @prop {number} game.state.secret.id 玩家ID
         * @prop {object} game.state.camera 摄像机状态
         * @prop {number[]} game.state.camera.rotation 摄像机旋转四元数
         * @prop {object} game.state.bodies 实体
         * @prop {number} appState 游戏状态码
         *
         * @type {Object}
         */
        window.core = this;
        console.log("HackBox successfully injected.");
        console.log(this);
    },
    configurable: true
});