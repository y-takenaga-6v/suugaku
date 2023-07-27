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
                'img/n_0.png', 'img/n_r3_bunno_1.png', 'img/n_1.png', 'img/n_r3.png', 'img/batsu.png', 'img/n_mainasu_r3.png', 'img/n_mainasu_1.png', 'img/n_mainasu_r3_bunno_1.png', 'img/n_0.png'
            ],
            user: ['img/question.png',
                'img/n_mainasu_1.png', 'img/n_0.png', 'img/n_1.png', 'img/batsu.png',
                'img/n_mainasu_2_bunno_r3.png', 'img/n_mainasu_r2_bunno_1.png', 'img/n_mainasu_2_bunno_1.png', 'img/n_2_bunno_1.png', 'img/n_r2_bunno_1.png', 'img/n_2_bunno_r3.png',
                'img/n_mainasu_r3.png', 'img/n_mainasu_r3_bunno_1.png', 'img/n_r3_bunno_1.png', 'img/n_r3.png',],

            shuffle_num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],

            mondai_num: '',
            mondai_path: '',
            user_num: '',
            user_path: '',
            sec: 0,
            seikai: '',
            fuseikai: '',
            bg_color: '',
            hantei: '',
            run_flg: false,
            hantei_flg: false,
            seikai_flg: false,
            timer_flg: false,
            kotae_flg: [false,
                false, false, false, false, false, false, false, false, false,
                false, false, false, false, false, false, false, false, false,
                false, false, false, false, false, false, false, false, false,
            ],
            timerObj: null,

            disabled: false
        };
    },

    methods: {
        count() {
            this.sec++;
        },

        start() {

            let self = this;
            this.sec = 0;
            this.seikai = 0;
            this.fuseikai = 0;
            this.timer_flg = true;
            this.run_flg = true;
            this.seikai_flg = false;
            for (var i = 0; i <= 27; i++) {
                this.kotae_flg[i] = false;
            }

            this.mondai_num = 1;

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
                if (this.seikai_flg == true) { this.mondai_num++; }
                if (this.mondai_num > 27) { this.stop(); }
            }
            this.mondai_path = this.mondai[this.mondai_num];
     

        },

        owari() {
            // this.mondai = '終了！！';
        },

        user_kotae(n) { this.user_num = n; this.kaitou(); },


        user_1: function () { this.user_num = 1; this.kaitou(); },
        user_2: function () { this.user_num = 2; this.kaitou(); },
        user_3: function () { this.user_num = 3; this.kaitou(); },
        user_4: function () { this.user_num = 4; this.kaitou(); },
        user_5: function () { this.user_num = 5; this.kaitou(); },
        user_6: function () { this.user_num = 6; this.kaitou(); },
        user_7: function () { this.user_num = 7; this.kaitou(); },
        user_8: function () { this.user_num = 8; this.kaitou(); },
        user_9: function () { this.user_num = 9; this.kaitou(); },
        user_10: function () { this.user_num = 10; this.kaitou(); },
        user_11: function () { this.user_num = 11; this.kaitou(); },
        user_12: function () { this.user_num = 12; this.kaitou(); },
        user_13: function () { this.user_num = 13; this.kaitou(); },
        user_14: function () { this.user_num = 14; this.kaitou(); },

        kaitou: function () {
            this.hantei_flg = true;
            if (this.kotae[this.mondai_num] == this.user[this.user_num]) {
                this.seikai_flg = true;
                this.kotae_flg[this.mondai_num] = true;
                this.bg_color = '#9f9';
                this.hantei = "正解";
                this.seikai++;
                this.shuffle_num = _.shuffle(this.shuffle_num);

            } else {
                this.seikai_flg = false;
                this.bg_color = '#f99';

                this.hantei = '不正解';
                this.fuseikai++;

                this.disabled = true;
                setTimeout(() => {
                    this.disabled = false
                }, 1500)


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