
const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
    { id: 2, name: "Headphones", category: "Electronics", price: 150, inStock: false },
    { id: 3, name: "The Great Gatsby", category: "Books", price: 15, inStock: true },
    { id: 4, name: "Coffee Maker", category: "Home Goods", price: 60, inStock: true },
    { id: 5, name: "To Kill a Mockingbird", category: "Books", price: 12, inStock: false },
    { id: 6, name: "Smart Watch", category: "Electronics", price: 250, inStock: true },
];

//easy

const productList=document.querySelector("#product-list");

const listItems=products.map(product => `<li>${product.name}</li>`);

productList.innerHTML=listItems.join("");

//medium

const inStockProducts=products.filter(product=>product.inStock==true);

const itemsInList=inStockProducts.map(product=>
    `<li class=product-item">
    <h3> ${product.name}</h3>
    <p>$${product.price}</P>
    </li>`
);

productList.innerHTML=itemsInList.join("");


//hard
productList.innerHTML="";

products.forEach(product=>{
    const li=document.createElement("li");

    const name=document.createElement("h3");
    name.textContent=product.name;

    const price=document.createElement("p");
    price.textContent=`$${product.price}`;

    li.appendChild(name);
    li.appendChild(price);

    if(!product.inStock){
        li.classList.add("out-of-stock");
    }

    li.classList.add(`category-${product.category.toLocaleLowerCase().replace(/\s/g, '-')}`);

    productList.appendChild(li);
});


//Bonus
const totalValue=products.filter(p=>p.inStock).reduce((sum,p)=>sum+p.price,0);

const totalDiv=document.createElement("div");
totalDiv.className="total-box";
totalDiv.textContent=`Total value of In-Stock Items: $${totalValue}`;


const footer=document.querySelector("footer");
document.body.insertBefore(totalDiv,footer);