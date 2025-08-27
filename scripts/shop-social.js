import { navbar, footer } from "../components/navbar.js";
let navbarContainer = document.getElementById("navbar");
let footerContainer = document.getElementById("footer");

navbarContainer.innerHTML = navbar();
footerContainer.innerHTML = footer();

// home redirect
let logo = document.getElementById("logo");
logo.addEventListener("click", () => {
  window.location.href = "index.html";
});

//cart item count
let cart_items = JSON.parse(localStorage.getItem("cart_items")) || [];
let loginUser = JSON.parse(localStorage.getItem("loginUser")) || null;
let sumCount = 0;

let displayCartCount = () => {
  let total_cart_item = document.getElementById("total-cart-item");
  if (loginUser == null) {
    total_cart_item.innerText = sumCount;
  } else {
    if (cart_items.length > 0) {
      let elements = cart_items.filter((ele) => {
        if (loginUser.email == ele.email) return ele;
      });

      for (let i = 0; i < elements.length; i++) {
        let x = elements[i].cartItems;
        for (let j = 0; j < x.length; j++) {
          sumCount += x[j].count;
        }
      }
      total_cart_item.innerText = sumCount;
    } else {
      total_cart_item.innerText = sumCount;
    }
  }
};
displayCartCount();

// redirect to account/login
let login_icon = document.getElementById("login-icon");
login_icon.addEventListener("click", () => {
  if (loginUser) {
    window.location.href = "account.html";
  } else {
    window.location.href = "login.html";
  }
});

let gridData = [
  {
    img: "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L401001-6-1__30333_823x.jpg?v=1645115951",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L201005-2__41179_493x.jpg?v=1645115930",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101009-B-2_823x.jpg?v=1650308459",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101061-2_823x.jpg?v=1650308606",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/011000124-3__50511_493x.jpg?v=1645115769",
  },
];

// grid struct function
let moreGridStructFuntion = (data) => {
  let grid_img_list = document.getElementById("grid-img-list-shop-social");
  grid_img_list.innerHTML = ""; // Clear previous grid before rendering

  let shop_feed_list = document.createElement("div");
  shop_feed_list.setAttribute("id", "shop-feed-list");

  data.forEach((item) => {
    let div = document.createElement("div");
    div.addEventListener("click", () => {
      window.location.href = "shop-all.html";
    });

    let img = document.createElement("img");
    img.src = item.img;
    img.setAttribute("class", "grid-img");

    div.append(img);
    shop_feed_list.append(div);
  });
  grid_img_list.append(shop_feed_list);
};

moreGridStructFuntion(gridData);

// more grid list function when we click on btn
let more_btn = document.getElementById("more");
more_btn.onclick = function() {
  window.location.href = "shop-all.html";
};
