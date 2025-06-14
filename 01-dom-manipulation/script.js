//easy
const mainheading=document.querySelector("#main-heading");
mainheading.textContent="My Awesome Shop";

const changeTagline=document.querySelector(".tagline");
changeTagline.innerHTML="Find the <Strong> best </Strong>  products here!";

const footerText=document.querySelector("footer p");
const currentYear=new Date().getFullYear();

footerText.textContent=`© ${currentYear} Shybash shaik`;

//medium

const appContainer=document.querySelector("#app-container");

const heading=document.createElement("h2");
heading.textContent="About us";

const paragraph=document.createElement("p");
paragraph.textContent="We are a small team passionate about quality products";

appContainer.appendChild(heading);
appContainer.appendChild(paragraph);


//Hard

const contactDiv=document.createElement("div");
contactDiv.className="contact-info";


const emailPara=document.createElement("p");
emailPara.innerHTML='Email:<a href="mailto:contact@awesomeshop.com">contact@awesomeshop.com</a>';

const PhonePara=document.createElement("p");
PhonePara.textContent="Phone:123-456-7890";

contactDiv.appendChild(emailPara);
contactDiv.appendChild(PhonePara);

const footer=document.querySelector("footer");
document.body.insertBefore(contactDiv,footer);
