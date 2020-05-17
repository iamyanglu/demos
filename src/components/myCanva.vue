<template>
    <div class="canva">
        <div class="utl">

        </div>
     <canvas id="canvas">
     </canvas>


    </div>
</template>

<script>
    export default {
        name: "myCanva",
        computed:{

        },
        data(){
            return {
                colorArry :['#67b55b','#ffd700','#a0522d','#b81250','#ff3300','#ffd700','#a0522d','#b81250'],
                index:0,
                canvas:null,
                ctx:null

            }
        },
        methods: {
            resize(){
                let w = document.documentElement.clientWidth;
                let h = document.documentElement.clientHeight;
                this.canvas.width = w;
                this.canvas.height =h;

            },
            init(){
                this.canvas = document.getElementById('canvas');
                console.log(this.canvas);
                this.ctx = this.canvas.getContext('2d');
                let w = document.documentElement.clientWidth;
                let h = document.documentElement.clientHeight;
                this.canvas.width = w;
                this.canvas.height =h;
            },
            drawLine(){
                this.ctx.beginPath();
                let starPoint={}
                let newPoint={}
                let paint;
               if(window.ontouchstart !==undefined){
                   //触屏
               }
               else{
                   //非触屏
                  window.onmousedown= (e)=> {
                      paint=true;
                     starPoint.x=e.offsetX;
                     starPoint.y=e.offsetY;
                  }
                  window.onmousemove=(e)=>{
                      if(paint){
                          newPoint.x=e.offsetX;
                          newPoint.y=e.offsetY;
                          this.ctx.moveTo(starPoint.x,starPoint.y);
                          this.ctx.lineTo(newPoint.x,newPoint.y)
                          this.ctx.stroke();
                         starPoint = {...newPoint}
                      }



                  }
                  window.onmouseup=(e)=>{
                      paint=false
                  }
               }
            }


           },
        created(){
            this.$emit('loaded')
        },
        mounted() {
            this.init();
            window.onresize=this.resize()
            this.drawLine()
        }
    }
</script>

<style scoped>
    .utl{
        width: 100%;

        display: flex;
        flex-direction: column;

        background-color: #fff;
    }
    .colorC{
        margin: 1px;
        width: 10px;
        height: 10px;
         display: inline-block;
        border-radius: 50%;
        border: 3px double black;
    }

</style>