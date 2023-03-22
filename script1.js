var container=document.createElement("div");
container.className="container";
var row=document.createElement("div");
row.className="row";
row.classList.add("row","m-3");
container.append(row);

var res=fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json())
.then((data1)=>foo(data1))
.catch((error)=>console.log(error));

function foo(data1){
    console.log(data1);
    for(var i=0;i<data1.length;i++){
        row.innerHTML+=
        `<div class="col-md-4">
        <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
         <div class="card-header">Header</div>
         <div class="card-body">
         <h5 class="card-title">Dark card title</h5>
         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
</div>`
    }
     document.body.append(container);
}