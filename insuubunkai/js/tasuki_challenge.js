const audio_fuseikai = new Audio('../sound/blip01.mp3');
const audio_seikai = new Audio('../sound/correct_answer2.mp3');
const audio_stage_clear = new Audio('../sound/correct_answer3.mp3');
const audio_all_clear = new Audio('../sound/scene_change4.mp3');
const audio_all_clear2 = new Audio('../sound/short_clap1.mp3');

Vue.createApp({
    data() {
        return {
            mondai_db: [
                [[2, 1, 1, 1], [2, 1, 3, 1], [2, 1, 1, 2], [1, 2, 3, 1], [2, 1, 3, 2]],
                [[1, -2, 2, -1], [1, -3, 3, -2], [1, 6, 2, 1], [2, -1, 2, -5], [3, 2, 3, 2]],
                [[1, -1, 2, 3], [1, -2, 5, 4], [2, 1, 3, -2], [3, 5, 3, -5], [2, -1, 3, 7]],
            ],
            stage: 1,
            mondai_num: 1,
            stage_clear: false,
            all_clear: false,
            first_time: true,
            sec: 0,
            min_sec: 99999,
            num1: 0,
            num2: 0,
            num3: 0,
            num4: 0,
            show_num1: '',
            show_num3: '',
            num2_plus: '',
            num4_plus: '',
            mondai: '',
            a: 0,
            b: 0,
            c: 0,
            d: 0,
            ac: 0,
            ad_bc: 0,
            bd: 0,
            bg_color: '',
            hantei: '',
            run_flg: false,
            hantei_flg: false,
            timer_flg: false,
            timerObj: null,
        };
    },

    methods: {
        count() {
            this.sec++;
        },
        start() {

            let self = this;
            this.stage = 1;
            this.mondai_num = 1;
            this.sec = 0;
            this.timer_flg = true;
            this.run_flg = true;
            this.first_time = false;
            this.all_clear = false;

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

        tsugi_1() {
            this.mondai_num++;
            if (this.mondai_num == 6) {
                this.stage_clear = false;
                this.mondai_num = 1;
                this.stage++;
            }

            this.tsugi();
        },

        tsugi() {
            if (this.run_flg && this.timer_flg) {
                this.hantei_flg = false;
                this.num1 = this.num2 = this.num3 = this.num4 = 0;
                this.show_num1 = this.show_num3 = '?';
                this.num2_plus = this.num4_plus = '+';

                this.a = this.mondai_db[this.stage - 1][this.mondai_num - 1][0];
                this.b = this.mondai_db[this.stage - 1][this.mondai_num - 1][1];
                this.c = this.mondai_db[this.stage - 1][this.mondai_num - 1][2];
                this.d = this.mondai_db[this.stage - 1][this.mondai_num - 1][3];

                this.ac = this.a * this.c;
                this.ad_bc = this.a * this.d + this.b * this.c;
                this.bd = this.b * this.d;

                if (this.ad_bc >= 0) {
                    ad_plus_bc = '+' + this.ad_bc + 'x';
                } else {
                    ad_plus_bc = this.ad_bc + 'x';
                }
                if (this.ad_bc == 0) {
                    ad_plus_bc = '';
                }
                if (this.ad_bc == 1) {
                    ad_plus_bc = '+x';
                }
                if (this.ad_bc == -1) {
                    ad_plus_bc = '-x';
                }

                if (this.bd >= 0) {
                    _bd = '+' + this.bd;
                } else {
                    _bd = this.bd;
                }
                this.mondai = this.ac + 'x²' + ad_plus_bc + _bd;


            }

        },

        owari() {
            this.mondai = '終了！！';
        },


        num1_1: function () { this.num1 = 1; this.show_num1 = ''; },
        num1_2: function () { this.num1 = this.show_num1 = 2; },
        num1_3: function () { this.num1 = this.show_num1 = 3; },
        num1_4: function () { this.num1 = this.show_num1 = 4; },
        num1_5: function () { this.num1 = this.show_num1 = 5; },
        num1_6: function () { this.num1 = this.show_num1 = 6; },
        num1_7: function () { this.num1 = this.show_num1 = 7; },
        num1_8: function () { this.num1 = this.show_num1 = 8; },
        num1_9: function () { this.num1 = this.show_num1 = 9; },

        num2_1: function () { this.num2 = this.num2 >= 0 ? 1 : -1; },
        num2_2: function () { this.num2 = this.num2 >= 0 ? 2 : -2; },
        num2_3: function () { this.num2 = this.num2 >= 0 ? 3 : -3; },
        num2_4: function () { this.num2 = this.num2 >= 0 ? 4 : -4; },
        num2_5: function () { this.num2 = this.num2 >= 0 ? 5 : -5; },
        num2_6: function () { this.num2 = this.num2 >= 0 ? 6 : -6; },
        num2_7: function () { this.num2 = this.num2 >= 0 ? 7 : -7; },
        num2_8: function () { this.num2 = this.num2 >= 0 ? 8 : -8; },
        num2_9: function () { this.num2 = this.num2 >= 0 ? 9 : -9; },
        num2_0: function () { this.num2 = this.num2 >= 0 ? 0 : -0; },
        num2_pm: function () {
            this.num2 *= -1;
            if (this.num2 >= 0) { this.num2_plus = '+'; } else { this.num2_plus = ''; }
        },

        num3_1: function () { this.num3 = 1; this.show_num3 = ''; },
        num3_2: function () { this.num3 = this.show_num3 = 2; },
        num3_3: function () { this.num3 = this.show_num3 = 3; },
        num3_4: function () { this.num3 = this.show_num3 = 4; },
        num3_5: function () { this.num3 = this.show_num3 = 5; },
        num3_6: function () { this.num3 = this.show_num3 = 6; },
        num3_7: function () { this.num3 = this.show_num3 = 7; },
        num3_8: function () { this.num3 = this.show_num3 = 8; },
        num3_9: function () { this.num3 = this.show_num3 = 9; },

        num4_1: function () { this.num4 = this.num4 >= 0 ? 1 : -1; },
        num4_2: function () { this.num4 = this.num4 >= 0 ? 2 : -2; },
        num4_3: function () { this.num4 = this.num4 >= 0 ? 3 : -3; },
        num4_4: function () { this.num4 = this.num4 >= 0 ? 4 : -4; },
        num4_5: function () { this.num4 = this.num4 >= 0 ? 5 : -5; },
        num4_6: function () { this.num4 = this.num4 >= 0 ? 6 : -6; },
        num4_7: function () { this.num4 = this.num4 >= 0 ? 7 : -7; },
        num4_8: function () { this.num4 = this.num4 >= 0 ? 8 : -8; },
        num4_9: function () { this.num4 = this.num4 >= 0 ? 9 : -9; },
        num4_0: function () { this.num4 = this.num4 >= 0 ? 0 : -0; },
        num4_pm: function () {
            this.num4 *= -1;
            if (this.num4 >= 0) { this.num4_plus = '+'; } else { this.num4_plus = ''; }
        },




        kaitou: function () {
            this.hantei_flg = true;
            if (this.a == this.num1 && this.b == this.num2 && this.c == this.num3 && this.d == this.num4
                || this.a == this.num3 && this.b == this.num4 && this.c == this.num1 && this.d == this.num2) {

                this.bg_color = '#9f9';
                this.hantei = "正解";

                if (this.mondai_num == 5) {
                    if (this.stage == 3) {
                        this.all_clear = true;
                        audio_all_clear.play();
                        audio_all_clear2.play();
                        clearInterval(this.timerObj);
                        this.timer_flg = false;
                        this.run_flg = false;
                        if(this.sec<this.min_sec){
                            this.min_sec=this.sec;
                        }
                    } else {
                        this.stage_clear = true;
                        audio_stage_clear.play();
                    }
                } else {
                    audio_seikai.play();
                }
            } else {
                audio_fuseikai.play();
                this.bg_color = '#f99';

                if (this.a == this.c && this.b == this.d) {
                    kaitou = '(' + (this.a == 1 ? '' : this.a) + 'x' + (this.b >= 0 ? '+' : '') + this.b + ')²';
                } else {
                    kaitou = '(' + (this.a == 1 ? '' : this.a) + 'x' + (this.b >= 0 ? '+' : '') + this.b + ')(' + (this.c == 1 ? '' : this.c) + 'x' + (this.d >= 0 ? '+' : '') + this.d + ')';
                }

                this.hantei = '不正解　正解は　'
                    + kaitou;

                clearInterval(this.timerObj);
                this.timer_flg = false;
                this.run_flg = false;
            }
        }


    }
}).mount('#app')