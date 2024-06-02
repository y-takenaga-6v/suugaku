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
            mondai: '',
            a: 0,
            b: 0,
            c: 0,
            d: 0,
            ac: 0,
            ad_bc: 0,
            bd : 0,
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
            this.set_sec=s;
        },
        time_inc10(){
            this.set_sec+=10;
        },
        time_dec10(){
            this.set_sec-=10;
            if(this.set_sec<10){this.set_sec=10;}
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

        gcm(x,y){
            return x%y ? this.gcm (y,x%y) :y;
        },

        tsugi() {
            if (this.run_flg && this.timer_flg) {
                this.hantei_flg = false;
                this.num1 = this.num2 = this.num3 = 0;
                this.a = Math.floor(Math.random() * 4 + 2); //2から5
                do {
                    this.b = Math.floor(Math.random() * 5 + 1);
                } while(this.gcm(this.a,this.b)!=1) ; //　互いに素になるように

                this.c = Math.floor(Math.random() * 5 + 1);
                do {
                    this.d = Math.floor(Math.random() * 5 + 1);
                } while(this.gcm(this.c,this.d)!=1) ; //　互いに素になるように   

                this.ac = this.a * this.c;
                this.ad_bc = this.a * this.d + this.b * this.c;
                this.bd = this.b * this.d;

                if (this.a == this.c && this.b == this.d) {
                    this.mondai = '('+  (this.a==1?'':this.a)+ 'x' + '+' + this.b + ')²';
                } else {
                    this.mondai = '(' +(this.a==1?'':this.a) +'x' + '+' + this.b + ')('+(this.c==1?'':this.c)+'x' + '+' + this.d + ')';
                }
            }

        },

        owari() {
            this.mondai = '終了！！';
        },

        num1_1: function () { this.num1 = this.num1 * 10 + 1; },
        num1_2: function () { this.num1 = this.num1 * 10 + 2; },
        num1_3: function () { this.num1 = this.num1 * 10 + 3; },
        num1_4: function () { this.num1 = this.num1 * 10 + 4; },
        num1_5: function () { this.num1 = this.num1 * 10 + 5; },
        num1_6: function () { this.num1 = this.num1 * 10 + 6; },
        num1_7: function () { this.num1 = this.num1 * 10 + 7; },
        num1_8: function () { this.num1 = this.num1 * 10 + 8; },
        num1_9: function () { this.num1 = this.num1 * 10 + 9; },
        num1_0: function () { this.num1 = this.num1 * 10 + 0; },
        num1_C: function () { this.num1 = 0; },

        num2_1: function () { this.num2 = this.num2 * 10 + 1; },
        num2_2: function () { this.num2 = this.num2 * 10 + 2; },
        num2_3: function () { this.num2 = this.num2 * 10 + 3; },
        num2_4: function () { this.num2 = this.num2 * 10 + 4; },
        num2_5: function () { this.num2 = this.num2 * 10 + 5; },
        num2_6: function () { this.num2 = this.num2 * 10 + 6; },
        num2_7: function () { this.num2 = this.num2 * 10 + 7; },
        num2_8: function () { this.num2 = this.num2 * 10 + 8; },
        num2_9: function () { this.num2 = this.num2 * 10 + 9; },
        num2_0: function () { this.num2 = this.num2 * 10 + 0; },
        num2_C: function () { this.num2 = 0; },

        num3_1: function () { this.num3 = this.num3 * 10 + 1; },
        num3_2: function () { this.num3 = this.num3 * 10 + 2; },
        num3_3: function () { this.num3 = this.num3 * 10 + 3; },
        num3_4: function () { this.num3 = this.num3 * 10 + 4; },
        num3_5: function () { this.num3 = this.num3 * 10 + 5; },
        num3_6: function () { this.num3 = this.num3 * 10 + 6; },
        num3_7: function () { this.num3 = this.num3 * 10 + 7; },
        num3_8: function () { this.num3 = this.num3 * 10 + 8; },
        num3_9: function () { this.num3 = this.num3 * 10 + 9; },
        num3_0: function () { this.num3 = this.num3 * 10 + 0; },
        num3_C: function () { this.num3 = 0; },

        kaitou: function () {
            this.hantei_flg = true;
            if (this.ac == this.num1 && this.ad_bc == this.num2&& this.bd == this.num3 ) {
                audio_seikai.play();
                this.bg_color = '#9f9';
                this.hantei = "正解";
                this.seikai++;
            } else {
                audio_fuseikai.play();
                this.bg_color = '#f99';
                this.hantei = '不正解　正解は　'
                  + this.ac  + 'x²+' + this.ad_bc + 'x+' + this.bd;
                this.fuseikai++;
            }
        }


    }
}).mount('#app')