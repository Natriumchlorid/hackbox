Object.defineProperty(Object.prototype, "isAdmin", {
    get() {
        return true
    },
    set(v) {
        if (v) return;
        this.isAdmin = true;
        window.core = this;
        console.log("HackBox successfully injected.");
        console.log(this);
        delete Object.prototype.isAdmin;
    },
    configurable: true
});