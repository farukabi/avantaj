const camasirMakineleri = document.getElementById('camasir');
const categoriesBar = document.getElementById('categories-bar');
const subcategoriesBar = document.getElementById('subcategories-bar');
const subcategoriesBarMobilya = document.getElementById('subcategories-bar-mobilya');
const mainImage = document.getElementById('main_image');
const subeler = document.getElementById("home");
const hakkimizda = document.getElementById('hakkimizda');
const bulasikMak = document.getElementById("bulasik");
const buzdolabiSection = document.getElementById('buzdolabi');
const galery = document.getElementById("galleryCarousel");
const kurutmalik = document.getElementById("kurutma");
const mobilyaResim = document.getElementById("galleryMobilya");
const yatakResim = document.getElementById("galleryYatak");
const dolapResim = document.getElementById("galleryDolap");
const info = document.getElementById('contact-info');
const brands = document.getElementById("brand");
const koseResim = document.getElementById("galleryMobilyaKose");
const ayakkabilikResim = document.getElementById("galleryAyakkabilik");
const searchBar = document.getElementById("search-bar");
const filterCapacity = document.getElementById("filter-capacity");
const productCards = document.querySelectorAll(".camasir_cards");
const noResult = document.getElementById("no-result");
const bulasikSearchBar = document.getElementById("bulasik-search-bar");
const programFilter = document.getElementById("program-filter");
const bulasikCards = document.querySelectorAll(".bulasik_cards");
const noResultBulasik = document.getElementById("no-result-bulasik");

function iconClicked(){
  document.getElementById('contact-info').classList.add('active');
  info.scrollIntoView({ behavior: 'smooth', block: 'end' });
} 

function closeInfoBox () {
    document.getElementById('contact-info').classList.remove('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function toggleCategories (){
    categoriesBar.classList.toggle('hidden');
}
function closeCategories(){
    categoriesBar.classList.add('hidden');
}
function showSubcategories(){
    subcategoriesBar.classList.remove('hidden');
}
function showMobilya(){
    subcategoriesBarMobilya.classList.remove("hidden");
}
function closeMobilya(){
    subcategoriesBarMobilya.classList.add("hidden");
}
function closeSubcategories(){
    subcategoriesBar.classList.add('hidden');
}
function showHakkimizda(){
    hakkimizda.style.display = 'block';
    mainImage.classList.add("hidden");
    subeler.classList.add("hidden");
    buzdolabiSection.style.display = 'none'; 
    camasirMakineleri.style.display = "none";
    bulasikMak.style.display = "none";
    galery.classList.add('hidden');
    kurutmalik.style.display = "none";
    mobilyaResim.style.display="none";
    yatakResim.style.display = "none";
    dolapResim.style.display = "none";
    brands.classList.add("hidden");
    koseResim.style.display = "none";
    ayakkabilikResim.style.display = "none";
    window.scrollTo({ top: 0, behavior: 'smooth' });

}
function showBuzdolabi() {
    buzdolabiSection.style.display = 'flex';
    categoriesBar.classList.add('hidden');
    subcategoriesBar.classList.add('hidden');
    mainImage.classList.add('hidden');
    subeler.classList.add("hidden");
    bulasikMak.style.display = "none";
    camasirMakineleri.style.display = "none";
    hakkimizda.style.display = "none";
    galery.classList.add('hidden');
    kurutmalik.style.display = "none";
    mobilyaResim.style.display="none";
    yatakResim.style.display = "none";
    dolapResim.style.display = "none";
    brands.classList.add("hidden");
    koseResim.style.display = "none";
    ayakkabilikResim.style.display = "none";
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function showCamasir(){
    camasirMakineleri.style.display='flex';
    categoriesBar.classList.add('hidden');
    subcategoriesBar.classList.add('hidden');
    mainImage.classList.add("hidden");
    subeler.classList.add("hidden");
    buzdolabiSection.style.display = 'none'; 
    bulasikMak.style.display = "none";
    hakkimizda.style.display = "none";
    galery.classList.add('hidden');
    kurutmalik.style.display = "none";
    mobilyaResim.style.display="none";
    yatakResim.style.display = "none";
    dolapResim.style.display = "none";
    brands.classList.add("hidden");
    koseResim.style.display = "none";
    ayakkabilikResim.style.display = "none";
    resetFilters();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function resetView(){
    buzdolabiSection.style.display = 'none'; 
    camasirMakineleri.style.display = "none";
    mainImage.classList.remove('hidden');
    hakkimizda.style.display = "none";
    bulasikMak.style.display = "none";
    subeler.classList.remove("hidden");
    galery.classList.remove('hidden');
    kurutmalik.style.display = "none";
    mobilyaResim.style.display="none";
    koseResim.style.display = "none";
    yatakResim.style.display = "none";
    dolapResim.style.display = "none";
    brands.classList.remove("hidden");
    ayakkabilikResim.style.display = "none";
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function showBulasik(){
    bulasikMak.style.display = "flex";
    categoriesBar.classList.add('hidden');
    subcategoriesBar.classList.add('hidden');
    mainImage.classList.add('hidden');
    subeler.classList.add("hidden");
    camasirMakineleri.style.display = "none";
    buzdolabiSection.style.display = 'none'; 
    hakkimizda.style.display = "none";
    kurutmalik.style.display = "none";
    galery.classList.add('hidden');
    mobilyaResim.style.display="none";
    yatakResim.style.display = "none";
    dolapResim.style.display = "none";
    brands.classList.add("hidden");
    koseResim.style.display = "none";
    ayakkabilikResim.style.display = "none";
    resetBulasikFilters();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function showKurutma(){
    bulasikMak.style.display = "none";
    categoriesBar.classList.add('hidden');
    subcategoriesBar.classList.add('hidden');
    mainImage.classList.add('hidden');
    subeler.classList.add("hidden");
    camasirMakineleri.style.display = "none";
    buzdolabiSection.style.display = 'none'; 
    hakkimizda.style.display = "none";
    galery.classList.add('hidden');
    kurutmalik.style.display = "flex";
    mobilyaResim.style.display="none";
    yatakResim.style.display = "none";
    dolapResim.style.display = "none";
    brands.classList.add("hidden");
    koseResim.style.display = "none";
    ayakkabilikResim.style.display = "none";
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function showMobilyaResim(){
    bulasikMak.style.display = "none";
    categoriesBar.classList.add('hidden');
    subcategoriesBar.classList.add('hidden');
    subcategoriesBarMobilya.classList.add("hidden");
    mainImage.classList.add('hidden');
    subeler.classList.add("hidden");
    camasirMakineleri.style.display = "none";
    buzdolabiSection.style.display = 'none'; 
    hakkimizda.style.display = "none";
    galery.classList.add('hidden');
    kurutmalik.style.display = "none";
    mobilyaResim.style.display = "flex";
    yatakResim.style.display = "none";
    dolapResim.style.display = "none";
    brands.classList.add("hidden");
    koseResim.style.display = "none";
    ayakkabilikResim.style.display = "none";
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function showMobilyaKoseResim(){
    bulasikMak.style.display = "none";
    categoriesBar.classList.add('hidden');
    subcategoriesBar.classList.add('hidden');
    subcategoriesBarMobilya.classList.add("hidden");
    mainImage.classList.add('hidden');
    subeler.classList.add("hidden");
    camasirMakineleri.style.display = "none";
    buzdolabiSection.style.display = 'none'; 
    hakkimizda.style.display = "none";
    galery.classList.add('hidden');
    kurutmalik.style.display = "none";
    mobilyaResim.style.display = "none";
    koseResim.style.display = "flex";
    yatakResim.style.display = "none";
    dolapResim.style.display = "none";
    brands.classList.add("hidden");
    ayakkabilikResim.style.display = "none";
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function showYatakResim(){
    bulasikMak.style.display = "none";
    categoriesBar.classList.add('hidden');
    subcategoriesBar.classList.add('hidden');
    subcategoriesBarMobilya.classList.add("hidden");
    mainImage.classList.add('hidden');
    subeler.classList.add("hidden");
    camasirMakineleri.style.display = "none";
    buzdolabiSection.style.display = 'none'; 
    hakkimizda.style.display = "none";
    galery.classList.add('hidden');
    kurutmalik.style.display = "none";
    mobilyaResim.style.display = "none";
    yatakResim.style.display = "flex";
    dolapResim.style.display = "none";
    brands.classList.add("hidden");
    koseResim.style.display = "none";
    ayakkabilikResim.style.display = "none";
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function showDolapResim(){
    bulasikMak.style.display = "none";
    categoriesBar.classList.add('hidden');
    subcategoriesBar.classList.add('hidden');
    subcategoriesBarMobilya.classList.add("hidden");
    mainImage.classList.add('hidden');
    subeler.classList.add("hidden");
    camasirMakineleri.style.display = "none";
    buzdolabiSection.style.display = 'none'; 
    hakkimizda.style.display = "none";
    galery.classList.add('hidden');
    kurutmalik.style.display = "none";
    mobilyaResim.style.display = "none";
    yatakResim.style.display = "none";
    dolapResim.style.display = "flex";
    brands.classList.add("hidden");
    koseResim.style.display = "none";
    ayakkabilikResim.style.display = "none";
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function showAyakkabilikResim(){
    bulasikMak.style.display = "none";
    categoriesBar.classList.add('hidden');
    subcategoriesBar.classList.add('hidden');
    subcategoriesBarMobilya.classList.add("hidden");
    mainImage.classList.add('hidden');
    subeler.classList.add("hidden");
    camasirMakineleri.style.display = "none";
    buzdolabiSection.style.display = 'none'; 
    hakkimizda.style.display = "none";
    galery.classList.add('hidden');
    kurutmalik.style.display = "none";
    mobilyaResim.style.display = "none";
    yatakResim.style.display = "none";
    dolapResim.style.display = "none";
    brands.classList.add("hidden");
    koseResim.style.display = "none";
    ayakkabilikResim.style.display = "flex";
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function filterProducts() {
    const searchValue = searchBar.value.toLowerCase(); 
    const selectedCapacity = filterCapacity.value; 
    let hasResults = false;

    productCards.forEach(card => {
        const productName = card.querySelector("h3").innerText.toLowerCase(); 
        const productCapacity = card.getAttribute("data-capacity"); 

        if (
            (productName.includes(searchValue) || searchValue === "") &&
            (selectedCapacity === "all" || productCapacity === selectedCapacity)
        ) {
            card.style.display = "flex"; 
            hasResults = true;
        } else {
            card.style.display = "none"; 
        }
    });

    noResult.style.display = hasResults ? "none" : "block";
}

function resetFilters() {
    searchBar.value = ""; 
    filterCapacity.value = "all"; 
    productCards.forEach(card => {
        card.style.display = "flex"; 
    });
    noResult.style.display = "none"; 
}


searchBar.addEventListener("input", filterProducts);
filterCapacity.addEventListener("change", filterProducts);


document.addEventListener("DOMContentLoaded", resetFilters);

function filterBulasikProducts() {
    const searchValue = bulasikSearchBar.value.toLowerCase(); 
    const selectedProgram = programFilter.value; 
    let hasResults = false;

    bulasikCards.forEach(card => {
        const productName = card.querySelector("h3").innerText.toLowerCase();
        const productProgram = card.getAttribute("data-program"); 

        
        if (
            (productName.includes(searchValue) || searchValue === "") &&
            (selectedProgram === "all" || productProgram === selectedProgram)
        ) {
            card.style.display = "flex"; 
            hasResults = true;
        } else {
            card.style.display = "none"; 
        }
    });

    
    noResultBulasik.style.display = hasResults ? "none" : "block";
}


function resetBulasikFilters() {
    bulasikSearchBar.value = ""; 
    programFilter.value = "all"; 
    bulasikCards.forEach(card => {
        card.style.display = "flex"; 
    });
    noResultBulasik.style.display = "none"; 
}

bulasikSearchBar.addEventListener("input", filterBulasikProducts);
programFilter.addEventListener("change", filterBulasikProducts);

document.addEventListener("DOMContentLoaded", resetBulasikFilters);



