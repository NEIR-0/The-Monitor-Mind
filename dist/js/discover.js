// doom
import { nfts } from "./nft.js";

const cardCover = document.getElementById("cardCover");
const nft = nfts;

for (let i = 1; i < nft.length; i++) {
  cardCover.innerHTML += `
  <li data-category="" data-price="" class="m-0.5 h-[100px] w-[23%] rounded-sm bg-orange-500 dark:bg-sky-500 md:m-1 md:h-[180px] md:rounded-md lg:h-[260px] lg:w-[24%]" id="${nft[i].id}">
    <div class="picture mx-auto my-1 h-[65%] w-[95%] rounded-sm md:rounded-md lg:h-[70%]">
      <img src="${nft[i].img}" alt="${nft[i].nama}" class="h-full w-full rounded-sm md:rounded-md" />
    </div>
    <div class="detail mx-auto h-[25%] w-[95%] md:h-[29%] lg:h-[25%]">
      <div class="relative mx-auto h-[25px] w-full md:h-full">
        <!-- name -->
        <div class="absolute left-0">
        <strong class="block text-[4px] font-normal text-black duration-300 ease-in-out dark:text-white md:text-[8px] lg:text-[10px]">${nft[i].rarity}</strong>
          <h2 class="text-[5px] text-black duration-300 ease-in-out dark:text-white md:text-[10px] lg:text-sm">${nft[i].nama}</h2>
        </div>

        <!-- price -->
        <div class="absolute right-0">
          <p class="text-right text-[4px] text-black duration-300 ease-in-out dark:text-white md:text-[8px] lg:text-[10px]">Price</p>
          <h2 class="priceses flex text-[5px] text-black duration-300 ease-in-out dark:text-white md:text-[10px] lg:text-sm"><span class="hidden">${nft[i].dollar}</span>${nft[i].harga} <img src="img/logo/crypto2.png" alt="" class="my-auto ms-0.5 h-1 w-1 md:ms-1 md:h-2 lg:h-3 md:w-2 lg:w-3" /></h2>
        </div>

        <!-- like -->
        <div class="like absolute bottom-0 flex w-full justify-between border-t-[1px] border-orange-400 duration-300 ease-in-out dark:border-sky-400 md:border-t-2">
          <h2 class="text-[5px] text-black duration-300 ease-in-out dark:text-white md:text-[10px] lg:text-[15px]">${nft[i].Like}</h2>
          <i class="fa-solid fa-heart my-auto text-[5px] text-red-600 duration-300 ease-in-out dark:text-red-400 md:text-[10px] lg:text-sm"></i>
        </div>
      </div>
    </div>
    <!-- <h4>$41.78</h4> -->
  </li>
`;
}

// filter and sorting
(function () {
  let field = document.querySelector(".items");
  let li = Array.from(field.children);

  function FilterProduct() {
    for (let i of li) {
      const name = i.querySelector("strong");
      const x = name.textContent;
      i.setAttribute("data-category", x);
    }

    let indicator = document.querySelector(".indicator").children;

    this.run = function () {
      for (let i = 0; i < indicator.length; i++) {
        indicator[i].onclick = function () {
          for (let x = 0; x < indicator.length; x++) {
            indicator[x].classList.remove("ActiveFilter");
          }
          this.classList.add("ActiveFilter");
          const displayItems = this.getAttribute("data-filter");

          for (let z = 0; z < li.length; z++) {
            li[z].style.transform = "scale(0)";
            setTimeout(() => {
              li[z].style.position = "absolute";
              li[z].style.opacity = "0";
            }, 500);

            if (li[z].getAttribute("data-category") == displayItems || displayItems == "all") {
              li[z].style.transform = "scale(0)";
              setTimeout(() => {
                li[z].style.position = "relative";
                li[z].style.transform = "scale(1)";
                li[z].style.opacity = "1";
              }, 500);
            }
          }
        };
      }
    };
  }

  function SortProduct() {
    let select = document.getElementById("select");
    let ar = [];
    for (let i of li) {
      const last = i.querySelector(".priceses");
      console.log(last);
      // const last = i.lastElementChild;
      const x = last.textContent.trim();
      const y = Number(x.substring(1));
      i.setAttribute("data-price", y);
      ar.push(i);
    }
    this.run = () => {
      addevent();
    };
    function addevent() {
      select.onchange = sortingValue;
    }
    function sortingValue() {
      if (this.value === "Default") {
        while (field.firstChild) {
          field.removeChild(field.firstChild);
        }
        field.append(...ar);
      }
      if (this.value === "LowToHigh") {
        SortElem(field, li, true);
      }
      if (this.value === "HighToLow") {
        SortElem(field, li, false);
      }
    }
    function SortElem(field, li, asc) {
      let dm, sortli;
      dm = asc ? 1 : -1;
      sortli = li.sort((a, b) => {
        const ax = a.getAttribute("data-price");
        const bx = b.getAttribute("data-price");
        return ax > bx ? 1 * dm : -1 * dm;
      });
      while (field.firstChild) {
        field.removeChild(field.firstChild);
      }
      field.append(...sortli);
    }
  }

  new FilterProduct().run();
  new SortProduct().run();
})();
