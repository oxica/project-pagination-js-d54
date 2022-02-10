const ulTag = document.querySelector("ul");
const totalPages = 20;

function element(totalPages, page) {
  let liTag = "";
  let activeLi;
  let beforePages = page - 1;
  let afterPages = page + 1;

  if (page > 1) {
    liTag += `<li class="btn prev" onclick = "element(totalPages, ${
      page - 1
    })"><span><i class="fas fa-angle-left"></i>Prev</span></li>`;
    }
    if (page > 2) {
        liTag += `<li class="numb"><span>1</span></li>`;
        if (page > 3) {
          liTag += `<li class="dots"><span>...</span></li>`;
        }
    }

  for (let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
    if (page === pageLength) {
      activeLi = "active";
    } else {
      activeLi = "";
    }
    liTag += `<li class="numb ${activeLi}" ><span>${pageLength}</span></li>`;
    }
    
    if (page < totalPages - 1) {
      
      if (page < totalPages-2) {
        liTag += `<li class="dots"><span>...</span></li>`;
        }
        liTag += `<li class="numb"><span>${totalPages}</span></li>`;
    }

  if (page < totalPages) {
    liTag += `<li class="btn next"  onclick = "element(totalPages, ${
      page + 1
    })"><span>Next<i class="fas fa-angle-right"></i></span></li>`;
  }

  ulTag.innerHTML = liTag;
}
element(totalPages, 5);
