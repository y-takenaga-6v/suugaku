const audio_fuseikai = new Audio('../sound/a-nasty-sound-if-you-choose-the-wrong-one-149895.mp3');
const audio_seikai = new Audio('../sound/unpause-106278.mp3');

Vue.createApp({
    data(){
        return {
            sec: 0,
            set_sec: 60,
            limit_sec: 60,
            num1: 0,
            num2: 0,
            num1_plus: '',
            num2_plus: '',
            mondai: '',
            a: 0,
            b: 0,
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
            if (this.sec == 0 ) {
            this.stop();
            } else {
            this.sec--;
            }
        },
        start() {
            
            let self = this;
            this.sec = this.limit_sec = this.set_sec;
            this.seikai=0;
            this.fuseikai=0;
            this.timer_flg = true;
            this.run_flg = true;

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

        tsugi() {
            if(this.run_flg && this.timer_flg){
                this.hantei_flg=false;
                this.num1=this.num2=0;
                this.num1_plus=this.num2_plus='+';
                this.a=Math.floor(Math.random()*9+1) * (-1);
                this.b=Math.floor(Math.random()*9+1) * (-1);
                wa=this.a+this.b;
                seki=this.a*this.b;
                a_plus_b= wa;
                ab='+' + seki;
                this.mondai='x²'+ a_plus_b +  'x' + ab;
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
                    audio_seikai.play();
                    this.bg_color='#9f9';
                    this.hantei = "正解";
                    this.seikai++;
            } else {
                audio_fuseikai.play();
                this.bg_color='#f99';
                this.hantei = '不正解　正解は　'
                     + this.a +' と '+ this.b ;
                this.fuseikai++;
            }
        }
        
   
    }
}).mount('#app')