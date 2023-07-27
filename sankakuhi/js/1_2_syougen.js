Vue.createApp({
    data() {
        return {
            mondai: ['nothing',
                'img/sin_0.png', 'img/sin_30.png', 'img/sin_45.png', 'img/sin_60.png', 'img/sin_90.png', 'img/sin_120.png', 'img/sin_135.png', 'img/sin_150.png', 'img/sin_180.png',
                'img/cos_0.png', 'img/cos_30.png', 'img/cos_45.png', 'img/cos_60.png', 'img/cos_90.png', 'img/cos_120.png', 'img/cos_135.png', 'img/cos_150.png', 'img/cos_180.png',
                'img/tan_0.png', 'img/tan_30.png', 'img/tan_45.png', 'img/tan_60.png', 'img/tan_90.png', 'img/tan_120.png', 'img/tan_135.png', 'img/tan_150.png', 'img/tan_180.png'
            ],
            kotae: ['nothing.png',
                'img/n_0.png', 'img/n_2_bunno_1.png', 'img/n_r2_bunno_1.png', 'img/n_2_bunno_r3.png', 'img/n_1.png', 'img/n_2_bunno_r3.png', 'img/n_r2_bunno_1.png', 'img/n_2_bunno_1.png', 'img/n_0.png',
                'img/n_1.png', 'img/n_2_bunno_r3.png', 'img/n_r2_bunno_1.png', 'img/n_2_bunno_1.png', 'img/n_0.png', 'img/n_mainasu_2_bunno_1.png', 'img/n_mainasu_r2_bunno_1.png', 'img/n_mainasu_2_bunno_r3.png', 'img/n_mainasu_1.png',
                'img/n_0.png','img/n_r3_bunno_1.png', 'img/n_1.png', 'img/n_r3.png', 'img/batsu.png','img/n_mainasu_r3.png', 'img/n_mainasu_1.png','img/n_mainasu_r3_bunno_1.png','img/n_0.png'
            ],
            user: ['img/question.png',
                'img/n_mainasu_1.png', 'img/n_0.png', 'img/n_1.png', 'img/batsu.png',
                'img/n_mainasu_2_bunno_r3.png', 'img/n_mainasu_r2_bunno_1.png', 'img/n_mainasu_2_bunno_1.png', 'img/n_2_bunno_1.png', 'img/n_r2_bunno_1.png', 'img/n_2_bunno_r3.png',
                'img/n_mainasu_r3.png', 'img/n_mainasu_r3_bunno_1.png', 'img/n_r3_bunno_1.png', 'img/n_r3.png',],
            mondai_num: '',
            mondai_path: '',
            user_num: '',
            user_path: '',
            sec: 0,
            set_sec: 60,
            limit_sec: 60,
            seikai: '',
            fuseikai: '',
            bg_color: '',
            hantei: '',
            run_flg: false,
            hantei_flg: false,
            seikai_flg: false,
            timer_flg: false,
            timerObj: null,
            randomize_flg: true,
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

        randomize() {
            this.randomize_flg = !this.randomize_flg;
        },

        start() {

            let self = this;
            this.sec = this.limit_sec = this.set_sec;
            this.seikai = 0;
            this.fuseikai = 0;
            this.timer_flg = true;
            this.run_flg = true;

            if (!this.randomize_flg) { this.mondai_num = 0; }

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
                this.user_num = 0;
                if (this.randomize_flg) {
                    this.mondai_num = Math.floor(Math.random() * 27 + 1);
                }else{
                    this.mondai_num ++;
                    if(this.mondai_num >27){this.mondai_num=1;}
                }
            }
            this.mondai_path = this.mondai[this.mondai_num];

        },

        owari() {
            // this.mondai = '終了！！';
        },

        user_1: function () { this.user_num = 1; },
        user_2: function () { this.user_num = 2; },
        user_3: function () { this.user_num = 3; },
        user_4: function () { this.user_num = 4; },
        user_5: function () { this.user_num = 5; },
        user_6: function () { this.user_num = 6; },
        user_7: function () { this.user_num = 7; },
        user_8: function () { this.user_num = 8; },
        user_9: function () { this.user_num = 9; },
        user_10: function () { this.user_num = 10; },
        user_11: function () { this.user_num = 11; },
        user_12: function () { this.user_num = 12; },
        user_13: function () { this.user_num = 13; },
        user_14: function () { this.user_num = 14; },

        kaitou: function () {
            this.hantei_flg = true;
            if (this.kotae[this.mondai_num] == this.user[this.user_num]) {
                this.seikai_flg = true;
                this.bg_color = '#9f9';
                this.hantei = "正解";
                this.seikai++;
            } else {
                this.seikai_flg = false;
                this.bg_color = '#f99';

                this.hantei = '不正解　正解は　';
                this.fuseikai++;
            }
        },

        get_bg_color (n) {
            if(n == this.mondai_num){
                return 'LightSkyBlue' ;
            }else{
                return 'white' ;
            }
        }


    }
}).mount('#app')