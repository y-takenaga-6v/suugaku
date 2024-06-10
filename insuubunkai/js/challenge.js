const audio_fuseikai = new Audio('../sound/blip01.mp3');
const audio_seikai = new Audio('../sound/correct_answer2.mp3');
const audio_stage_clear = new Audio('../sound/correct_answer3.mp3');
const audio_all_clear = new Audio('../sound/scene_change4.mp3');
const audio_all_clear2 = new Audio('../sound/short_clap1.mp3');

Vue.createApp({
    data(){
        return {
            mondai_db: [
                [[1,4],[3,4],[2,2],[3,2],[6,6]],
                [[-2,-6],[-3,-3],[5,6],[-7,-7],[4,-4]],
                [[-3,6],[5,-6],[4,-9],[3,-5],[9,-8]],
            ],
            stage: 1,
            mondai_num: 1,
            stage_clear: false,
            all_clear: false,
            first_time: true,
            min_sec: 99999,
            sec: 0,
            num1: 0,
            num2: 0,
            num1_plus: '',
            num2_plus: '',
            mondai: '',
            a: 0,
            b: 0,
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

            this.timerObj = setInterval(function() {self.count()}, 1000)
            
            this.tsugi(); 
        },
 
        stop() {
            clearInterval(this.timerObj);
            this.timer_flg = false; 
            this.run_flg = false;
            this.hantei_flg = false;
            this.owari();
        },

        tsugi_1() {
            this.mondai_num++;
            if(this.mondai_num == 6){
                this.stage_clear = false;
                this.mondai_num =1;
                this.stage++;
            }
     
            this.tsugi();
        },

        tsugi() {
            if(this.run_flg && this.timer_flg){
                this.hantei_flg=false;
                this.num1=this.num2=0;
                this.num1_plus=this.num2_plus='+';

                this.a=this.mondai_db[this.stage - 1][this.mondai_num - 1][0];
                this.b=this.mondai_db[this.stage - 1][this.mondai_num - 1][1];
            
                wa=this.a+this.b;
                seki=this.a*this.b;
                if(wa >= 0){
                    a_plus_b = '+'+ wa + 'x';
                } else {
                    a_plus_b = wa + 'x';
                }
                if(wa==0){
                    a_plus_b = '';
                }
                if(wa==1){
                    a_plus_b = '+x';
                }
                if(wa==-1){
                    a_plus_b = '-x';
                }

                if(seki >=0 ){
                    ab='+' + seki;
                } else {
                    ab= seki;
                }
                this.mondai='x²'+ a_plus_b  + ab;
           }

        },
        
        owari() {
            this.mondai='終了！！';
        },

        num1_1: function() {this.num1=this.num1>=0?1:-1;},
        num1_2: function() {this.num1=this.num1>=0?2:-2;},
        num1_3: function() {this.num1=this.num1>=0?3:-3;},
        num1_4: function() {this.num1=this.num1>=0?4:-4;},
        num1_5: function() {this.num1=this.num1>=0?5:-5;},
        num1_6: function() {this.num1=this.num1>=0?6:-6;},
        num1_7: function() {this.num1=this.num1>=0?7:-7;},
        num1_8: function() {this.num1=this.num1>=0?8:-8;},
        num1_9: function() {this.num1=this.num1>=0?9:-9;},
        num1_0: function() {this.num1=this.num1>=0?0:-0;},
        num1_pm: function() {
            this.num1*=-1;
            if(this.num1>=0){this.num1_plus='+';}else{this.num1_plus='';}
        },

        num2_1: function() {this.num2=this.num2>=0?1:-1;},
        num2_2: function() {this.num2=this.num2>=0?2:-2;},
        num2_3: function() {this.num2=this.num2>=0?3:-3;},
        num2_4: function() {this.num2=this.num2>=0?4:-4;},
        num2_5: function() {this.num2=this.num2>=0?5:-5;},
        num2_6: function() {this.num2=this.num2>=0?6:-6;},
        num2_7: function() {this.num2=this.num2>=0?7:-7;},
        num2_8: function() {this.num2=this.num2>=0?8:-8;},
        num2_9: function() {this.num2=this.num2>=0?9:-9;},
        num2_0: function() {this.num2=this.num2>=0?0:-0;},
        num2_pm: function() {
            this.num2*=-1;
            if(this.num2>=0){this.num2_plus='+';}else{this.num2_plus='';}
        },

        kaitou: function(){
            this.hantei_flg = true;
            if( (this.a == this.num1 && this.b == this.num2) ||
                (this.a == this.num2 && this.b == this.num1) ){
                    this.bg_color='#9f9';
                    this.hantei = "正解";

                if(this.mondai_num==5){
                    if(this.stage==3){
                        this.all_clear = true;
                        audio_all_clear.play();
                        audio_all_clear2.play();
                        clearInterval(this.timerObj);
                        this.timer_flg = false; 
                        this.run_flg = false;
                        if(this.sec<this.min_sec){
                            this.min_sec=this.sec;
                        }
                    }else{
                        this.stage_clear = true;
                        audio_stage_clear.play();
                    }
                }else{
                    audio_seikai.play();
                }
   
            } else {
                audio_fuseikai.play();
                this.bg_color='#f99';
                this.hantei = '不正解　正解は　'
                     + this.a +' と '+ this.b ;
                clearInterval(this.timerObj);
                this.timer_flg = false; 
                this.run_flg = false;
            }
        }
        
   
    }
}).mount('#app')