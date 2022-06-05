// local reviews data
const reviews = [
    {
        id:1,
        name:"susan  smith",
        job:"web developer",
        img:
        "https://media.istockphoto.com/photos/doing-business-with-a-smile-picture-id1330546092?b=1&k=20&m=1330546092&s=170667a&w=0&h=brj2RTauaIvDQbJqobBjLLw72xBZh80H9Vyr_BhoDnA=",
        text:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus ullam eveniet nisi ut voluptates unde ipsum maiores nesciunt blanditiis omnis fugit officiis praesentium quia totam odio inventore nobis consequuntur, sunt consequatur. Doloribus, consequuntur. Repudiandae modi quas distinctio cum itaque exercitationem ea quam esse, dolores atque placeat dicta, eveniet architecto veritatis?",
    },
    {
        id:2,
        name:"anna johnson",
        job:"web designer",
        img:
        "https://media.istockphoto.com/photos/excited-woman-wearing-rainbow-cardigan-picture-id1327495437?b=1&k=20&m=1327495437&s=170667a&w=0&h=Vbl-XLyAnBoTkyGXXi-X1CFzuSHlNcn-dqB-sCosxFo=",
        text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam tenetur minima dignissimos esse sequi sit asperiores facilis in, necessitatibus cumque eligendi adipisci iure maiores quibusdam natus? Officia, voluptatem nam nulla distinctio quos eum amet adipisci asperiores ea quo, placeat sequi."
    },
    {
        id:4,
        name:"Jim Maleno",
        job:"Back-end developer",
        img:"https://images.unsplash.com/photo-1624188327913-e0c59aaaa3ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c21pbGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quod cum quis, excepturi eos veritatis corporis amet accusamus ex, sit delectus temporibus accusantium officiis alias perferendis beatae nostrum fuga quaerat."
    },
    {
        id:3,
        name:"peter scott",
        job:"intern",
        img:"https://images.unsplash.com/photo-1625241152315-4a698f74ceb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNtaWxpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quod cum quis, excepturi eos veritatis corporis amet accusamus ex, sit delectus temporibus accusantium officiis alias perferendis beatae nostrum fuga quaerat. Quod, consectetur alias, dicta optio modi enim sed molestiae similique vel deleniti quam fugit, dolor perspiciatis? Rem alias doloribus quibusdam?"
    }
]

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function(){
    showPerson(currentItem);
})

// show person based on item
function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person
nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
});

// show previous person

prevBtn.addEventListener("click",function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
})

// show random person
randomBtn.addEventListener("click", function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    console.log(currentItem);
    showPerson(currentItem);
})