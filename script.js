console.log("insta story feature");
let stories=document.querySelector(".stories")
let arr=[{dp:"https://plus.unsplash.com/premium_photo-1673758905770-a62f4309c43c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWx8ZW58MHx8MHx8fDA%3D" ,story:"https://plus.unsplash.com/premium_photo-1682095757120-c9abb908ed60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWx8ZW58MHx8MHx8fDA%3D"},
    {
  dp:" https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8fDA%3D",story:"https://plus.unsplash.com/premium_photo-1669704098750-7cd22c35422b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZWx8ZW58MHx8MHx8fDA%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHx8MHx8fDA%3D ",story:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8fDA%3D "
    },
    {
        dp:"https://images.unsplash.com/photo-1729850219812-45733c1c0acc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",story:"https://media.istockphoto.com/id/1922703877/photo/gen-z-teenager-poses-full-body-towards-camera-showing-attitude.webp?a=1&b=1&s=612x612&w=0&k=20&c=dBSco9xGftxG7-D4XbB7S519IHxBV9FSmeXVVorIAi8= "
    },
    {
        dp:"https://images.unsplash.com/photo-1613005798967-632017e477c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWx8ZW58MHx8MHx8fDA%3D",story:"https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsfGVufDB8fDB8fHww "
    },
    {
        dp:"https://images.unsplash.com/photo-1730279971829-19aab6e0e20f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",story:"https://images.unsplash.com/photo-1727774429053-a0ef7f45d7f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8"
    }
   
]
//dp
let clutter="";
arr.forEach(function(elem,idx){
    clutter+=`  <div class="story">
            <img id=${idx} src="${elem.dp}">
           </div>`
})

stories.innerHTML=clutter;
//story
stories.addEventListener("click",function(dets){
    console.log(arr[dets.target.id].story);
    document.querySelector("#full-screen").style.display="block";
    document.querySelector("#full-screen").style.backgroundImage=`url(${arr[dets.target.id].story})`;
   setTimeout(() => {
    document.querySelector("#full-screen").style.display="none";
   }, 3000);
})


