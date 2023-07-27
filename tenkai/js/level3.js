Vue.createApp({
    data() {
        return {
            sec: 0,
            set_sec: 60,
            limit_sec: 60,
            num1: 0,
            num2: 0,
            num1_plus: '',
            num2_plus: '',
            show_num1: '+?x',
            mondai: '',
            a: 0,
            b: 0,
            wa: 0,
            seki: 0,
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

        tsugi() {
            if (this.run_flg && this.timer_flg) {
                this.hantei_flg = false;
                this.num1 = this.num2 = 0;
                this.show_num1 = '+?x' ;
                this.num1_plus=this.num2_plus='+';
                this.a = Math.floor(Math.random() * 9 + 1) ;
                if(Math.random()>.5) {this.a *= -1};
                this.b = Math.floor(Math.random() * 9 + 1) ;
                if(Math.random()>.5) {this.b *= -1};
                this.wa = this.a + this.b;
                this.seki = this.a * this.b;
                if (this.a == this.b) {
                    this.mondai = '(x' + (this.a>=0?'+':'') + this.a + ')²';
                } else {
                    this.mondai = '(x' + (this.a>=0?'+':'') + this.a + ')(x' + (this.b>=0?'+':'') + this.b + ')';
                }
            }

        },

        owari() {
            this.mondai = '終了！！';
        },


        left(n) {
            if (this.num1 >= 0) {
                this.num1 = this.num1 * 10 + n;
            } else {
                this.num1 = this.num1 * 10 - n;
            }
            if(this.num1>0){ this.show_num1 = '+' + this.num1 + 'x'; }
            if(this.num1<0){ this.show_num1 = this.num1 + 'x'; }
            if(this.num1==0){ this.show_num1 = ''; }
            if(this.num1==1){ this.show_num1 = '+x'; }
            if(this.num1==-1){ this.show_num1 = '-x'; }
        },
        num1_1: function () { this.left(1); },
        num1_2: function () { this.left(2); },
        num1_3: function () { this.left(3); },
        num1_4: function () { this.left(4); },
        num1_5: function () { this.left(5); },
        num1_6: function () { this.left(6); },
        num1_7: function () { this.left(7); },
        num1_8: function () { this.left(8); },
        num1_9: function () { this.left(9); },
        num1_0: function () { this.left(0); },
        num1_pm: function () { 
            this.num1 *= -1; 
            if(this.num1>=0){this.num1_plus='+';}else{this.num1_plus='';} //これは使ってない
            if(this.num1>0){ this.show_num1 = '+' + this.num1 + 'x'; }
            if(this.num1<0){ this.show_num1 = this.num1 + 'x'; }
            if(this.num1==0){ this.show_num1 = ''; }
            if(this.num1==1){ this.show_num1 = '+x'; }
            if(this.num1==-1){ this.show_num1 = '-x'; }

        },
        num1_C: function () { this.num1 = 0; this.num1_plus='+'; this.show_num1='';},

        right(n) {
            if (this.num2 >= 0) {
                this.num2 = this.num2 * 10 + n;
            } else {
                this.num2 = this.num2 * 10 - n;
            }
        },
        num2_1: function () { this.right(1) ; },
        num2_2: function () { this.right(2) ; },
        num2_3: function () { this.right(3) ; },
        num2_4: function () { this.right(4) ; },
        num2_5: function () { this.right(5) ; },
        num2_6: function () { this.right(6) ; },
        num2_7: function () { this.right(7) ; },
        num2_8: function () { this.right(8) ; },
        num2_9: function () { this.right(9) ; },
        num2_0: function () { this.right(0) ; },
        num2_pm: function () { 
            this.num2 *= -1;
            if(this.num2>=0){this.num2_plus='+';}else{this.num2_plus='';} 
        },
        num2_C: function () { this.num2 = 0; this.num2_plus='+';},

        kaitou: function () {
            this.hantei_flg = true;
            if (this.wa == this.num1 && this.seki == this.num2) {
                this.bg_color = '#9f9';
                this.hantei = "正解";
                this.seikai++;
            } else {
                this.bg_color = '#f99';
                if(this.wa >= 0){
                    a_plus_b = '+'+ this.wa + 'x';
                } else {
                    a_plus_b = this.wa + 'x';
                }
                if(this.wa==0){
                    a_plus_b = '';
                }
                if(this.wa==1){
                    a_plus_b = '+x';
                }
                if(this.wa==-1){
                    a_plus_b = '-x';
                }

                if(this.seki >=0 ){
                    ab='+' + this.seki;
                } else {
                    ab= this.seki;
                }
                this.hantei = '不正解　正解は　' + 'x²' + a_plus_b + ab ;
                this.fuseikai++;
            }
        }


    }
}).mount('#app')