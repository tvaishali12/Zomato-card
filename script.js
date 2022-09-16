const productcontainer = document.getElementById("products");

const array = [
    {

img:"https://b.zmtcdn.com/data/pictures/chains/1/19334021/83933aab4128dc1f6cac8f5c3f65e47a_o2_featured_v2.jpg",
heading: "Hotel Apna",
rating:4.5,
items:"Desserts,Icecream,Mithai"
},
{
img:"https://b.zmtcdn.com/data/pictures/chains/3/1401863/930ee0cc8be9a105207904e0979904b3_o2_featured_v2.jpg",
heading: "Sandwich",
rating:4.3,
items:"Northindian,Chinese,Food"
},
{
    img:"https://b.zmtcdn.com/data/pictures/chains/2/1400082/d952ed7658e94591765c61b612089d89_o2_featured_v2.jpg",
    heading: "Bhartiya Bhojnalay",
    rating:4.8,
    items:"Desserts,Icecream,Mithai"
    },
    {
        img:"https://b.zmtcdn.com/data/pictures/3/18802813/00ffc8f212c8215296f0fc8fd8481241_o2_featured_v2.jpg",
        heading: "Karnawat Bhojan",
        rating:4.1,
        items:"Fast Food,Northindian"
        },
        {
            img:"https://b.zmtcdn.com/data/pictures/7/18741987/05c788034a5c8c0fa30103f26923ae82_o2_featured_v2.jpg",
            heading: "Shree Leela Dal Bafle",
            rating:4.6,
            items:"Pureveg,Dalbafle"
            },
            {
                img:"https://b.zmtcdn.com/data/pictures/4/19616104/f0013075d44b690400171a19ead77e77_o2_featured_v2.jpg",
                heading: "Maa Ki Rasoi",
                rating:4.9,
                items:"Dal,Paratha,Halwa"
                },
                {
                    img:"https://b.zmtcdn.com/data/pictures/3/1400983/0cb78b452e52ae03e76538c5c281e172_o2_featured_v2.jpg",
                    heading: "Raju Bhai Ka Dhaba",
                    rating:4.5,
                    items:"Northindian,Fastfood,"
                    },
                    {
                        img:"https://b.zmtcdn.com/data/pictures/3/18931263/dda0a8d19448adf672c0905f68c1afb2_o2_featured_v2.jpg",
                        heading: "Ashirwad Bhojnalay",
                        rating:4.3,
                        items:"Northindian,chinese"
                        },

                        {
                            img:"https://b.zmtcdn.com/data/pictures/chains/1/1402201/fd0dacb70f8330460fb3c65086c89f6f_o2_featured_v2.jpg",
                            heading: "Cafe Kono",
                            rating:4.5,
                            items:"Desserts,Icecream,Mithai"

                            },
];

for(var i=0; i<9; i++){

// create container 
const containers = document.createElement("div");
containers.className = "container";
// containers.href ="https://www.zomato.com/indore/restaurants?place_name=Rambagh%2C+Indore&dishv2_id=30308" 
// containers.target = "blank"

// img container
const imgcontainer = document.createElement("div")
imgcontainer.className = "img"

// create img tag
const imgtag = document.createElement("img")
imgtag.tagName = "img"
imgtag.src = array[i].img

// create anchor tag
const anchor = document.createElement("a")
anchor.href = "https://www.zomato.com/indore/restaurants?place_name=Rambagh%2C+Indore&dishv2_id=30308"
// appeend image in anchor and this anchor in imgcontainer
anchor.appendChild(imgtag)

imgcontainer. appendChild(anchor)
containers.appendChild(imgcontainer)

// create binary div
const binary = document.createElement("div")
binary.className = "binary"

// create first p tag
const p = document.createElement("p")
p.className = "para-1"
p.innerText = "Pro extra 10% OFF"

// append this p in a binary div
binary.appendChild(p)

// create second p tag
const p2 = document.createElement("p")
p2.className = "para-2"
p2.innerText = "50% OFF Up to 100"

// append this p2 in binary div
binary.appendChild(p2)

imgcontainer.appendChild(binary)

// create min div
const min = document.createElement("div")
min.className = "min"

// create third para
const p3 = document.createElement("p")
p3.className = "para-3"
p3.innerText = "45 min"
// append this p in min div
min.appendChild(p3)

imgcontainer.appendChild(min)

// create bottom div
const bottom = document.createElement("div")
bottom.className = "bottom"

// create bootom-1 div
const bottom1 = document.createElement("div")
bottom1.className = "bottom-1"

// append bottom1 in bottom

// create heading div
const heading = document.createElement("div")
heading.className = "heading"

// create h4 
const h4 = document.createElement("h4")
h4.tagName = "h4"
h4.id = "head"
h4.innerText = array[i].heading
// append this h4 in heading div and this heading div in bottom div
heading.appendChild(h4)
bottom1.appendChild(heading)

// create button
const button = document.createElement("button")
button.className = "rating"
button.innerText = array[i].rating
// append this button in bottom-1
bottom1.appendChild(button)
bottom.appendChild(bottom1)

// create bottom-2 div
const bottom2 = document.createElement("div")
bottom2.className = "bottom-2"

// create div for items
const item = document.createElement("div")
item.className = "items"
item.innerText = "North Indian,Fast Food"
bottom2.appendChild(item)

// create rupee div
const rupe = document.createElement("div")
rupe.className = "rupee"
rupe.innerText = "₹150 for one"
bottom2.appendChild(rupe)

bottom.appendChild(bottom2)

// create hr tag
const hrtag = document.createElement("hr")
hrtag.tagName = "hr"
bottom.appendChild(hrtag)
// containers.appendChild(hrtag)

// create last div
const last = document.createElement("div")
last.className = "last"

// create icon div
const icons = document.createElement("div")
icons.className = "icon"

// create img in icon
const imgtaglast1 = document.createElement("img")
imgtaglast1.tagName = "img"
imgtaglast1.src ="images/4bf016f32f05d26242cea342f30d47a31595763089.webp"

// append thids img in icon and this icon in last div
icons.appendChild(imgtaglast1)
last.appendChild(icons)

// create para div
const paralast = document.createElement("div")
paralast.className = "para"

// create para
const paragraph = document.createElement("p")
paragraph.tagName = "p"
paragraph.innerText = "435+ Order place from here recently"
// append this p in para div
paralast.appendChild(paragraph)
last.appendChild(paralast)

// create saftey div
const safteydiv = document.createElement("div")
safteydiv.className = "saftey"

const imgtaglast2 = document.createElement("img")
imgtaglast2.tagName = "img"
imgtaglast2.src ="images/0b07ef18234c6fdf9365ad1c274ae0631612687510.webp"
safteydiv.appendChild(imgtaglast2)
last.appendChild(safteydiv)

bottom.appendChild(last)

containers.appendChild(bottom)

productcontainer.appendChild(containers)

}



