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
                this.num2_plus = this.num4_plus = '+';
                this.a = Math.floor(Math.random() * 4 + 2); //2から5
                do {
                    this.b = Math.floor(Math.random() * 5 + 1);
                } while (this.gcm(this.a, this.b) != 1); //　互いに素になるように

                this.c = Math.floor(Math.random() * 5 + 1);
                do {
                    this.d = Math.floor(Math.random() * 5 + 1);
                } while (this.gcm(this.c, this.d) != 1); //　互いに素になるように   

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

        num3_1: function () { this.num3 = 1; this.show_num3 = '';},
        num3_2: function () { this.num3 =  this.show_num3 =2; },
        num3_3: function () { this.num3 =  this.show_num3 =3; },
        num3_4: function () { this.num3 =  this.show_num3 =4; },
        num3_5: function () { this.num3 =  this.show_num3 =5; },
        num3_6: function () { this.num3 =  this.show_num3 =6; },
        num3_7: function () { this.num3 =  this.show_num3 =7; },
        num3_8: function () { this.num3 =  this.show_num3 =8; },
        num3_9: function () { this.num3 =  this.show_num3 =9; },

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
                this.seikai++;
            } else {
                this.bg_color = '#f99';


                if (this.a == this.c && this.b == this.d) {
                    kaitou = '(' + (this.a == 1 ? '' : this.a) + 'x' + (this.b >= 0 ? '+' : '') + this.b + ')²';
                } else {
                    kaitou = '(' + (this.a == 1 ? '' : this.a) + 'x' + (this.b >= 0 ? '+' : '') + this.b + ')(' + (this.c == 1 ? '' : this.c) + 'x' + (this.d >= 0 ? '+' : '') + this.d + ')';
                }

                this.hantei = '不正解　正解は　'
                    + kaitou;
                this.fuseikai++;
            }
        }


    }
}).mount('#app')