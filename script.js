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
        liTag += `<li class="numb" onclick="element(totalPages, 1)"><span>1</span></li>`;
        if (page > 3) {
          liTag += `<li class="dots"><span>...</span></li>`;
        }
  }
  if (page == 1) {
    afterPages = afterPages + 2;
  } else if (page == 2) {
     afterPages = afterPages + 1;
  }

  if (page == totalPages) {
    beforePages = beforePages - 2;
  } else if (page == totalPages - 1) {
    beforePages = beforePages - 1;
  }

    for (let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
      if (pageLength > totalPages) {
        continue;
      }
      if (pageLength == 0) {
        pageLength = pageLength + 1;
      }
      if (page === pageLength) {
        activeLi = "active";
      } else {
        activeLi = "";
      }
      liTag += `<li class="numb ${activeLi}" onclick="element(totalPages, ${pageLength})"><span>${pageLength}</span></li>`;
    }
    
    if (page < totalPages - 1) {
      
      if (page < totalPages-2) {
        liTag += `<li class="dots"><span>...</span></li>`;
        }
        liTag += `<li class="numb" onclick="element(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
    }

  if (page < totalPages) {
    liTag += `<li class="btn next"  onclick = "element(totalPages, ${
      page + 1
    })"><span>Next<i class="fas fa-angle-right"></i></span></li>`;
  }

  ulTag.innerHTML = liTag;
}
element(totalPages, 5);
