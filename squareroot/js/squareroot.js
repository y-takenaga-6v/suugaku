const audio_fuseikai = new Audio('../sound/a-nasty-sound-if-you-choose-the-wrong-one-149895.mp3');
const audio_seikai = new Audio('../sound/unpause-106278.mp3');

Vue.createApp({
    data() {
        return {
            sec: 0,
            set_sec: 60,
            limit_sec: 60,
            level: 0,
            level_sel: ['初級', '中級', '上級'],
            level_now: '初級', //スタートして左側に表示用
            num1: 0,
            num2: 0,
            mondai: '',
            a: 0,
            b: 0,
            old_a: 0,
            old_b: 0,
            bb: [2, 3, 5, 6, 7],
            seikai: '',
            fuseikai: '',
            bg_color: '',
            hantei: '',
            run_flg: false,
            hantei_flg: false,
            timer_flg: false,
            seikai_flg: false,
            timerObj: null,
        };
    },

    methods: {
        level_select() {
            this.level++;
            if (this.level > 2) { this.level = 0; }
        },

        time_set(s) {
            this.set_sec = s;
        },
        time_inc10() {
            this.set_sec += 10;
        },
        time_dec10() {
            this.set_sec -= 10;
            if (this.set_sec < 10) { this.set_sec = 10; }
        },

        count() {
            if (this.sec == 0) {
                this.stop();
            } else {
                this.sec--;
            }
        },
        start() {

            let self = this;
            this.sec = this.limit_sec = this.set_sec;
            this.level_now = this.level_sel[this.level];
            this.seikai = 0;
            this.fuseikai = 0;
            this.timer_flg = true;
            this.run_flg = true;
            this.old_a = this.old_b = 0;

            this.timerObj = setInterval(function () { self.count() }, 1000)

            this.tsugi();
        },

        stop() {
            clearInterval(this.timerObj);
            this.timer_flg = false;
            this.run_flg = false;
            this.hantei_flg = false;
            this.owari();
        },

        tsugi() {
            if (this.run_flg && this.timer_flg) {
                this.hantei_flg = false;
                this.num1 = this.num2 = '?';

                do {
                    switch (this.level_sel[this.level]) {
                        case '初級':
                            this.a = Math.floor(Math.random() * 2 + 2); //2から3
                            this.b = this.bb[Math.floor(Math.random() * 2)];
                            break;
                        case '中級':
                            this.a = Math.floor(Math.random() * 3 + 2); //2から4
                            this.b = this.bb[Math.floor(Math.random() * 4)];
                            break;
                        case '上級':
                            this.a = Math.floor(Math.random() * 4 + 3); //3から6
                            this.b = this.bb[Math.floor(Math.random() * 5)];
                            break;
                    }
                } while (this.a == this.old_a && this.b == this.old_b)
                this.old_a = this.a;
                this.old_b = this.b;

                this.mondai = this.a * this.a * this.b;
            }

        },

        owari() {
            this.mondai = '終了！！';
        },


        num1_1: function () { this.num1 = 1; },
        num1_2: function () { this.num1 = 2; },
        num1_3: function () { this.num1 = 3; },
        num1_4: function () { this.num1 = 4; },
        num1_5: function () { this.num1 = 5; },
        num1_6: function () { this.num1 = 6; },
        num1_7: function () { this.num1 = 7; },
        num1_8: function () { this.num1 = 8; },
        num1_9: function () { this.num1 = 9; },

        num2_1: function () { this.num2 = 1; },
        num2_2: function () { this.num2 = 2; },
        num2_3: function () { this.num2 = 3; },
        num2_4: function () { this.num2 = 4; },
        num2_5: function () { this.num2 = 5; },
        num2_6: function () { this.num2 = 6; },
        num2_7: function () { this.num2 = 7; },
        num2_8: function () { this.num2 = 8; },
        num2_9: function () { this.num2 = 9; },
        num2_0: function () { this.num2 = 0; },


        kaitou: function () {
            this.hantei_flg = true;
            if (this.a == this.num1 && this.b == this.num2) {
                audio_seikai.play();
                this.bg_color = '#9f9';
                this.hantei = "正解";
                this.seikai_flg = true;
                this.seikai++;
            } else {
                audio_fuseikai.play();
                this.bg_color = '#f99';

                this.seikai_flg = false;

                this.hantei = '不正解　正解は　';
                this.fuseikai++;
            }
        }


    }
}).mount('#app')