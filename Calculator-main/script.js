const screen=document.querySelector('.screen input')
const btn=document.querySelectorAll('.btn')
const clear=document.querySelector('.clear')
const equal=document.querySelector('.equal')


// screen.value="hello i am here"
 Array.from(btn).forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        // e.preventDefault()
        screen.value+=e.target.value
    })
 });

 equal.addEventListener('click',(e)=>{
    if(screen.value===""){
        screen.value=""
    }else{
        let answer=eval(screen.value)
        screen.value=answer;
    }
 });
 clear.addEventListener('click',function(e){
    screen.value=""
 }
 );
 
 