//fetch the content
fetch("http://www.ali-merkouk.dk/blog/wp-json/wp/v2/bike?categories=4")
       .then(res=>res.json())
       .then(goThroughEach);
//foreach
function goThroughEach(data){
    // console.log(data);
    data.forEach(showBrand);

}
//that function

function showBrand(oneBrand){
    const template = document.querySelector("template").content;
    const parentElement=document.querySelector("main"); 
//1find the first letter

//grab the template
//clone it 
const myCopy = template.cloneNode(true);
// console.log(template);
//change some content
 myCopy.querySelector("h2").textContent = oneBrand.type;

//find the parent







}
//append it


//find the correct letter




// //    console.log(oneBrand);
// //grab the template
// const template = document.querySelector("template").content;
// //clone it 
// const myCopy = template.cloneNode(true);
// // console.log(template);
// //change some content
//  myCopy.querySelector("a").textContent = oneBrand.brandname;
//  myCopy.querySelector("a").href = `productlist.html?brandname=${oneBrand.brandname}`;
// //find the parent
// const parent = document.querySelector("#letter_b ol");
// //append it
// parent.appendChild(myCopy);
// }