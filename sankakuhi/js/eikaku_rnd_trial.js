Vue.createApp({
    data() {
        return {
            mondai: ['nothing',
                'img/sin_30.png', 'img/sin_45.png', 'img/sin_60.png',
                'img/cos_30.png', 'img/cos_45.png', 'img/cos_60.png',
                'img/tan_30.png', 'img/tan_45.png', 'img/tan_60.png'],
            kotae: ['nothing.png',
                'img/n_2_bunno_1.png', 'img/n_r2_bunno_1.png', 'img/n_2_bunno_r3.png',
                'img/n_2_bunno_r3.png', 'img/n_r2_bunno_1.png', 'img/n_2_bunno_1.png',
                'img/n_r3_bunno_1.png', 'img/n_1.png', 'img/n_r3.png'],
            user: ['img/question.png',
                'img/n_0.png', 'img/n_1.png',
                'img/n_2_bunno_1.png', 'img/n_r2_bunno_1.png', 'img/n_2_bunno_r3.png',
                'img/n_r3_bunno_1.png', 'img/n_r3.png',],
            mondai_num: '',
            mondai_path: '',
            user_num: '',
            user_path: '',
            sec: 0,
            set_sec: 20,
            limit_sec: 20,
            seikai: '',
            fuseikai: '',
            bg_color: '',
            hantei: '',
            run_flg: false,
            hantei_flg: false,
            seikai_flg: false,
            timer_flg: false,
            timerObj: null,
        };
    },

    methods: {
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
                if(this.seikai == 0 && this.fuseikai == 0){
                    this.hantei_flg = false;
                }else{
                    this.hantei_flg = true;
                }
                this.user_num = 0;
                this.mondai_num = Math.floor(Math.random() * 9 + 1);
            }
            this.mondai_path = this.mondai[this.mondai_num];

        },

        owari() {
            // this.mondai = '終了！！';
        },

        user_1: function () { this.user_num = 1; this.kaitou();},
        user_2: function () { this.user_num = 2; this.kaitou(); },
        user_3: function () { this.user_num = 3; this.kaitou(); },
        user_4: function () { this.user_num = 4; this.kaitou(); },
        user_5: function () { this.user_num = 5; this.kaitou(); },
        user_6: function () { this.user_num = 6; this.kaitou(); },
        user_7: function () { this.user_num = 7; this.kaitou(); },


        kaitou: function () {
            if (this.kotae[this.mondai_num] == this.user[this.user_num]) {
                this.seikai_flg = true;
                this.bg_color = '#9f9';
                this.hantei = "正解";
                this.seikai++;
            } else {
                this.seikai_flg = false;
                this.bg_color = '#f99';

                this.hantei = '不正解';
                this.fuseikai++;
            }
            this.tsugi();
        },

        get_bg_color(n) {
            if (n == this.mondai_num) {
                return 'LightSkyBlue';
            } else {
                return 'white';
            }
        }


    }
}).mount('#app')