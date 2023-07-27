Vue.createApp({
  data() {
    return {
      weightNum: 2,
      canvas: null,
      color: "black",
      context: null,
    }
  },
  mounted() {
    function noscroll(e){
      e.preventDefault();
    };
    document.addEventListener('touchmove',noscroll, {passive: false});
    document.addEventListener('pointermove',noscroll, {passive: false});
    // カンバス作成
    this.canvas = document.querySelector('#myCanvas')
    this.context = this.canvas.getContext('2d')
    this.context.lineCap = 'round'
    this.context.lineCap = 'round'
    this.canvas.width = 400
    this.canvas.height = 500
    this.context.lineWidth = this.weightNum
    this.context.strokeStyle = this.color
  },
  methods: {
    // 描画
    draw: function (e) {
      let x = e.offsetX
      let y = e.offsetY
      if (!this.isDrag) return;
      this.context.lineTo(x, y);
      this.context.stroke();
    },
    // 描画開始（mousedown）
 
    dragStart: function (e) {
      let x = e.offsetX
      let y = e.offsetY
      this.context.beginPath();
      this.context.lineTo(x, y);
      this.context.stroke();
      this.isDrag = true;
      this.context.getImageData(0, 0, this.canvas.width, this.canvas.height)

    },
  
    // 描画終了（mouseup, mouseout）
    dragEnd: function () {
      this.context.closePath();
      this.isDrag = false;
    },
  

    clear: function () {
      this.context = null;
      this.canvas = document.querySelector('#myCanvas')
      this.context = this.canvas.getContext('2d')
      this.context.lineCap = 'round'
      this.context.lineCap = 'round'
      this.canvas.width = 400
      this.canvas.height = 500
      this.context.lineWidth = this.weightNum
      this.context.strokeStyle = this.color
    },
  }
}).mount('#tegaki')