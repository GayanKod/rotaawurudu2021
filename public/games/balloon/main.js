var app = new Vue({
    el: "#app",
    data: {
        health: 0,
        level: 5,
        started: false,
        ended: false,
        startTime: "",
        elapsedTime: "",
        seconds: "00",
    },
    methods: {
        start: function() {
            self = this;
            this.startTime = Date.now();
            this.started = true;
            setInterval(function() {
                self.regenerate();
            }, 750);
            setInterval(function() {
                self.countTimer();
            }, 100);
        },
        punch: function() {
            if (this.started == true && this.health < 100) {
                this.health += 5;
                if (this.health >= 100) {
                    this.ended = true;
                    this.$refs.audio.play();
                }
            } else {
                alert("Game Not Yet Started !");
            }

        },
        regenerate: function() {
            if (this.health >= 10 && this.ended == false) {
                this.health -= parseInt(this.level);
            }
        },
        restart: function() {
            this.health = 0;
            this.ended = false;
            this.started = false;
            this.seconds = "00";
            this.startTime = "";
            this.elapsedTime = "";

        },
        countTimer: function() {
            if (this.started == true && this.ended == false) {
                this.elapsedTime = Date.now() - this.startTime;
                this.seconds = (this.elapsedTime / 1000).toFixed(3);
            }
        },

    },
});