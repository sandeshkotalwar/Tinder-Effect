
//get the data
let users=[
    {
     profilePic:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
     displayPic:"https://plus.unsplash.com/premium_photo-1673757121229-b4030607c094?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI2fHx8ZW58MHx8fHx8",
     pendingMessage: 3, 
     location:"Delhi, India", 
     name:"Harshita", 
     age: 23, 
     intrests:[{
        icon:`<i class="ri-music-2-fill"></i>`,
        intrest:`music`
       },{
        icon:`<i class="ri-quill-pen-fill"></i>`,
        intrest:`writing`
       }],
     bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quisquam provident quaerat quidem aspernatur ex!',
     isFriend: null
    },
    {
        profilePic:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic:"https://images.unsplash.com/photo-1626818590242-5a5f27ee3971?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 2, 
        location:"Mumbai, India", 
        name:"Avinya", 
        age: 26, 
        intrests:[{
            icon:`<i class="ri-music-2-fill"></i>`,
            intrest:`music`
           },{
            icon:`<i class="ri-quill-pen-fill"></i>`,
            intrest:`writing`
           }],
        bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat qu aspernatur ex!',
        isFriend: null
    },
    {
        profilePic:"https://images.unsplash.com/photo-1508285296015-c0b524447532?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
        displayPic:"https://images.unsplash.com/photo-1559828801-04565cd31e27?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
        pendingMessage: 3, 
        location:"Chennai, India", 
        name:"Nishi", 
        age: 22, 
        intrests:[{
            icon:`<i class="ri-music-2-fill"></i>`,
            intrest:`music`
           },{
            icon:`<i class="ri-quill-pen-fill"></i>`,
            intrest:`writing`
           }],
        bio: 'Lorem ipsum dolor sit  consectetur adipisicing elit. Placeat  quaerat quidem aspernatur ex!',
        isFriend: null
    },
    {
        profilePic:"https://images.unsplash.com/photo-1526510747491-58f928ec870f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic:"https://images.unsplash.com/photo-1529946179074-87642f6204d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
        pendingMessage: 4, 
        location:"Chandigarh, India", 
        name:"Riya", 
        age: 23, 
        intrests:[{
            icon:`<i class="ri-music-2-fill"></i>`,
            intrest:`music`
           },{
            icon:`<i class="ri-quill-pen-fill"></i>`,
            intrest:`writing`
           }],
        bio: 'Lorem elit Placeat quisquam provident quaerat quidem aspernatur ex!',
        isFriend: null
    }
];

let curr = 0;
let isAnimating = false;

function select(elem){
    return document.querySelector(elem);
}

function setData(index){
    select(".prfimg img").src = users[index].profilePic;
    select(".badge h5").textContent = users[index].pendingMessage;
    select(".location h3").textContent = users[index].location;
    select(".name h1:nth-child(1)").textContent =users[index].name;
    select(".name h1:nth-child(2)").textContent =users[index].age;

    let clutter="";
    users[index].intrests.forEach(function(intrest){
        clutter += `<div class="tag flex items-center bg-white/30 px-3 py-1 rounded-full gap-3">
        ${intrest.icon}
        <h3 class="text-sm tracking-tight capitalize">${intrest.intrest}</h3>
        </div>`
    })
    select(".tags").innerHTML = clutter;

    select('.bio p').textContent = users[index].bio;
}

(function setInitial(){
    select(".maincard img").src = users[curr].displayPic;
    select(".incomingcard img").src = users[curr+1]?.displayPic;


    setData(curr);

    curr = 2;
})();

function imageChange(){
    if(!isAnimating){
        isAnimating = true;
        let t1 = gsap.timeline({
            onComplete: function(){
                isAnimating = false;
                let main = select(".maincard");
                let incoming = select(".incomingcard")
        
                incoming.classList.remove("z-[2]");
                incoming.classList.add("z-[3]");
                incoming.classList.remove("incomingcard");
        
                main.classList.remove("z-[3]");
                main.classList.add("z-[2]");
                gsap.set(main,{
                    scale: 1,
                    opacity: 1
                })
        
                if(curr === users.length) curr=0;
                select(".maincard img").src = users[curr].displayPic;
                curr++;
                main.classList.remove("maincard");
                incoming.classList.add("maincard");
                main.classList.add("incomingcard");
        
        
        
            }
           });
        
           t1.to(".maincard",{
            scale:1.1,
            opacity:0,
            ease: Circ,
            duration: .9
           },"a")
           .from(".incomingcard",{
            scale:.9,
            opacity:0,
            ease: Circ,
            duration: 1.1
           },"a")  
    }
}

let deny = select(".deny");
let accept = select(".accept");


deny.addEventListener("click", function (){
    imageChange();
    setData(curr-1);
    gsap.from(".details .element",{
        y:"100%",
        opacity:0,
        stagger:.06,
        ease: Power4.easeInOut,
        duration:1.5
    })
});


accept.addEventListener("click", function (){
    imageChange();
    setData(curr-1);
    gsap.from(".details .element",{
        y:"100%",
        opacity:0,
        stagger:.06,
        ease: Power4.easeInOut,
        duration:1.5
    })
});

(function containerCreator(){
    document.querySelectorAll(".element")
    .forEach(function(element){
        let div = document.createElement("div");
        div.classList.add(`${element.classList[1]}container`,`overflow-hidden`);
        div.appendChild(element);
        select(".details").appendChild(div);
    })
})();

gsap.from(".details .element",{
    y:"100%",
    opacity:0,
    stagger:.06,
    ease: Power4.easeInOut,
    duration:1.5
})


