const audio_fuseikai = new Audio('../sound/a-nasty-sound-if-you-choose-the-wrong-one-149895.mp3');
const audio_seikai = new Audio('../sound/unpause-106278.mp3');

Vue.createApp({
    data() {
        return {
            sec: 0,
            set_sec: 60,
            limit_sec: 60,
            num1: 0,
            num2: 0,
            num3: 0,
            num4: 0,
            num1_plus: '',
            num2_plus: '',
            num3_plus: '',
            num4_plus: '',
            mondai: '',
            a: 0,
            b: 0,
            p: 0,
            q: 0,
            r: 0,
            s: 0,
            seikai: '',
            fuseikai: '',
            bg_color: '',
            hantei: '',
            run_flg: false,
            hantei_flg: false,
            timer_flg: false,
            timerObj: null,
        };
    },

    methods: {
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
            this.seikai = 0;
            this.fuseikai = 0;
            this.timer_flg = true;
            this.run_flg = true;

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

        gcm(x, y) {
            return x % y ? this.gcm(y, x % y) : y;
        },

        tsugi() {
            if (this.run_flg && this.timer_flg) {
                this.hantei_flg = false;
                this.num1 = this.num2 = this.num3 = this.num4 = 0;
                this.show_num1 = this.show_num3 = '?';
                this.num2_plus = this.num3_plus = this.num4_plus = '+';
                this.a = Math.floor(Math.random() * 3 + 1); //1から3
                do {
                    this.b = Math.floor(Math.random() * 3 + 1);
                } while (this.gcm(this.a, this.b) != 1); //　互いに素になるように
                this.b *= -1;
                //if (Math.random() > .5) { this.b *= -1 };

                this.mondai = '(' + (this.a == 1 ? '' : this.a) + 'x '
                    + (this.b >= 0 ? '+' : '') + (this.b == 1 ? '' : (this.b == -1 ? '-' : this.b)) + 'y )³';

                this.p = this.a * this.a * this.a;
                this.q = 3 * this.a * this.a * this.b;
                this.r = 3 * this.a * this.b * this.b;
                this.s = this.b * this.b * this.b;

            }

        },

        owari() {
            this.mondai = '終了！！';
        },

        first(n) {
            if (this.num1 >= 0) {
                this.num1 = this.num1 * 10 + n;
            } else {
                this.num1 = this.num1 * 10 - n;
            }
        },
        num1_1: function () { this.first(1); },
        num1_2: function () { this.first(2); },
        num1_3: function () { this.first(3); },
        num1_4: function () { this.first(4); },
        num1_5: function () { this.first(5); },
        num1_6: function () { this.first(6); },
        num1_7: function () { this.first(7); },
        num1_8: function () { this.first(8); },
        num1_9: function () { this.first(9); },
        num1_0: function () { this.first(0); },
        num1_pm: function () {
            this.num1 *= -1;
            if (this.num1 >= 0) { this.num1_plus = '+'; } else { this.num1_plus = ''; }
        },
        num1_C: function () { this.num1 = 0; this.num1_plus = '+'; },

        second(n) {
            if (this.num2 >= 0) {
                this.num2 = this.num2 * 10 + n;
            } else {
                this.num2 = this.num2 * 10 - n;
            }
        },
        num2_1: function () { this.second(1); },
        num2_2: function () { this.second(2); },
        num2_3: function () { this.second(3); },
        num2_4: function () { this.second(4); },
        num2_5: function () { this.second(5); },
        num2_6: function () { this.second(6); },
        num2_7: function () { this.second(7); },
        num2_8: function () { this.second(8); },
        num2_9: function () { this.second(9); },
        num2_0: function () { this.second(0); },
        num2_pm: function () {
            this.num2 *= -1;
            if (this.num2 >= 0) { this.num2_plus = '+'; } else { this.num2_plus = ''; }
        },
        num2_C: function () { this.num2 = 0; this.num2_plus = '+'; },

        third(n) {
            if (this.num3 >= 0) {
                this.num3 = this.num3 * 10 + n;
            } else {
                this.num3 = this.num3 * 10 - n;
            }
        },
        num3_1: function () { this.third(1); },
        num3_2: function () { this.third(2); },
        num3_3: function () { this.third(3); },
        num3_4: function () { this.third(4); },
        num3_5: function () { this.third(5); },
        num3_6: function () { this.third(6); },
        num3_7: function () { this.third(7); },
        num3_8: function () { this.third(8); },
        num3_9: function () { this.third(9); },
        num3_0: function () { this.third(0); },
        num3_pm: function () {
            this.num3 *= -1;
            if (this.num3 >= 0) { this.num3_plus = '+'; } else { this.num3_plus = ''; }
        },
        num3_C: function () { this.num3 = 0; this.num3_plus = '+'; },

        fourth(n) {
            if (this.num4 >= 0) {
                this.num4 = this.num4 * 10 + n;
            } else {
                this.num4 = this.num4 * 10 - n;
            }
        },
        num4_1: function () { this.fourth(1); },
        num4_2: function () { this.fourth(2); },
        num4_3: function () { this.fourth(3); },
        num4_4: function () { this.fourth(4); },
        num4_5: function () { this.fourth(5); },
        num4_6: function () { this.fourth(6); },
        num4_7: function () { this.fourth(7); },
        num4_8: function () { this.fourth(8); },
        num4_9: function () { this.fourth(9); },
        num4_0: function () { this.fourth(0); },
        num4_pm: function () {
            this.num4 *= -1;
            if (this.num4 >= 0) { this.num4_plus = '+'; } else { this.num4_plus = ''; }
        },
        num4_C: function () { this.num4 = 0; this.num4_plus = '+'; },




        kaitou: function () {
            this.hantei_flg = true;
            if (this.p == this.num1 && this.q == this.num2 && this.r == this.num3 && this.s == this.num4) {
                audio_seikai.play();
                this.bg_color = '#9f9';
                this.hantei = "正解";
                this.seikai++;
            } else {
                audio_fuseikai.play();
                this.bg_color = '#f99';
                kaitou = (this.p == 1 ? '' : this.p) + 'x³' 
                    + (this.q >= 0 ? '+' : '') + this.q + 'x²y'
                    + (this.r >= 0 ? '+' : '') + this.r + 'xy²' 
                    + (this.s >= 0 ? '+' : '') + (this.s == 1 ? '' : (this.s == -1 ? '-' : this.s)) + 'y³';
                this.hantei = '不正解　正解は　'
                    + kaitou;
                this.fuseikai++;
            }
        }
    }
}).mount('#app')