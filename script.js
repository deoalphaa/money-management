
// custom element, liat dri yutub :p

// class logo_money extends HTMLElement{
//     connectedCallback(){
//         this.innerHTML = `
//             <h1>
//                 <b>Money Management</b>
//                 <i data-feather="moon" id="dark"></i>
//             </h1>
//         `;
//     }
// }
// customElements.define("logo-money", logo_money);

//ini aku gtw buat apa sumpah awowkwkw

feather.replace();

    document.getElementById("toggle-btn").addEventListener("click", () => {
      document.querySelector(".side_bar").classList.toggle("collapsed");
    });