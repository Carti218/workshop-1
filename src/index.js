/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo.vercel.app"

const appNode=document.querySelector('div#app');

const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat("es-PE",{
        style:"currency",
        currency: "PEN",
    }).format(price)

    return newPrice;
};

//web api
//conectarnos al servidor
window
.fetch(`${baseUrl}/api/avo`)
//procesar la respuesta y convertirlo en JSON
.then((respuesta)=> respuesta.json())
//JSON -> Data ->  Renderizar info browser
.then((responseJson)=> {
   const todosLosItems=[];
    responseJson.data.forEach((item)=>{
        //crear imagen
        const image=document.createElement("img");
        image.src=`${baseUrl}${item.image}`;
        image.className="w-48"
        //crear titulo
        const title=document.createElement("h2");
        title.textContent=item.name;
        title.className="text-3xl text-neutral-900"
        //crear precio
        const price=document.createElement("div");
        price.className="text-2xl text-red-600 mt-6 font-semibold";
        price.textContent=formatPrice(item.price);
        
        

        //crear contenedor y añadirimagen, titulo y precio
        const containerDetaills=document.createElement("div");
        containerDetaills.style="background:rgb(217 249 157)";
        containerDetaills.className="w-full p-4 "
        containerDetaills.append(title,price);

        const container=document.createElement("div");
        container.className="w-96 p-2 shadow-xl shadow-black grid justify-items-center"
        container.append(image,containerDetaills);

        //agregar el contenedor al Array todosLosItems
        todosLosItems.push(container);
    })
    
    appNode.append(...todosLosItems);
    appNode.className="flex flex-wrap gap-6 justify-center"
    

    
});