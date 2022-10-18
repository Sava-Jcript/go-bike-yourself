// const endpoint ="http://www.ali-merkouk.dk/blog/wp-json/wp/v2/"; 



    fetch ("http://www.ali-merkouk.dk/blog/wp-json/wp/v2/bike?per_page=100&_embed")
    .then (res=>res.json())
    .then(GoAhead);


function GoAhead(element){


    const template=document.querySelector("template").content; 

    
    const parentElement=document.querySelector("main"); 
    element.forEach(bike1 => {
        const copy=template.cloneNode(true);
        copy.querySelector("h2").textContent = bike1.title.rendered; 
        copy.querySelector("h3").textContent = bike1.price_; 
        copy.querySelector("h4").textContent = bike1.colour_; 

        copy.querySelector("img").src = bike1._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url;
        copy.querySelector("h5").textContent = bike1.full_specs; 

console.log(element);






        parentElement.appendChild(copy);
    
    });


}