function recommendShampoo() {
  var hairType = document.getElementById("hair-type").value;
  var usagePurpose = document.getElementById("usage-purpose").value;
  var shampooImage = document.getElementById("shampoo-image");
  var recommendation = ""; // Burada önerilen şampuanı saklayacağız

  // Burada saç tipi ve kullanım amacına göre şampuanı öneren mantığı uygulayabilirsiniz
  if (hairType === "normal" && usagePurpose === "kepek-azaltma") {
    recommendation = "Nane & Biberiye Şampuanını öneriyoruz.";
    shampooImage.innerHTML = `<div id="ImageDiv">
    <a href="https://nimbahome.com/urun/nane-biberiye-kati-sampuan-110-gr/">
      <img
        class="shampoo-img"
        src="https://nimbahome.com/wp-content/uploads/2023/05/nane_biberiye-800x1198.jpg"
        alt="shampoo-image"
        width="200" height="300"
      />
    </a>
  </div>`;
  } else if (hairType === "normal" && usagePurpose === "hizli-uzama") {
    recommendation = "Hindistan Cevizi & Badem Şampuanını öneriyoruz.";
    shampooImage.innerHTML = `<div id="ImageDiv">
    <a href="https://nimbahome.com/urun/hindistan-cevizi-badem-kati-sampuan-110-gr/">
      <img
        class="shampoo-img"
        src="https://nimbahome.com/wp-content/uploads/2023/05/hindistancevizi_badem-800x1198.jpg"
        alt="shampoo-image"
        width="200" height="300"
      />
    </a>
  </div>`;
  } else if (hairType === "normal" && usagePurpose === "yaglanma-engelleme") {
    recommendation = "Lavanta & Argan Şampuanını öneriyoruz.";
    shampooImage.innerHTML = `<div id="ImageDiv">
    <a href="https://nimbahome.com/urun/lavanta-argan-kati-sampuan-110-gr/">
      <img
        class="shampoo-img"
        src="https://nimbahome.com/wp-content/uploads/2023/05/lavanta_argan-800x1198.jpg"
        alt="shampoo-image"
        width="200" height="300"
      />
    </a>
  </div>`;
  } else if (hairType === "normal" && usagePurpose === "dokulmeyi-engelleme") {
    recommendation = "Portakal & Jojoba Şampuanını öneriyoruz.";
    shampooImage.innerHTML = `<div id="ImageDiv">
    <a href="https://nimbahome.com/wp-content/uploads/2023/05/portakal_jojoba-800x1198.jpg">
      <img
        class="shampoo-img"
        src="https://nimbahome.com/urun/portakal-jojoba-kati-sampuan-110-gr/"
        alt="shampoo-image"
        width="200" height="300"
      />
    </a>
  </div>`;
  } else if (hairType === "ince-telli" && usagePurpose === "kepek-azaltma") {
    recommendation = "Limon & Papatya Şampuanını öneriyoruz.";
    shampooImage.innerHTML = `<div id="ImageDiv">
    <a href="https://nimbahome.com/urun/limon-papatya-kati-sampuan-120-gr/">
      <img
        class="shampoo-img"
        src="https://nimbahome.com/wp-content/uploads/2023/09/papatya_limon-800x1198.jpg"
        alt="shampoo-image"
        width="200" height="300"
      />
    </a>
  </div>`;
  } else if (hairType === "ince-telli" && usagePurpose === "hizli-uzama") {
    recommendation = "Karanfil & Aynısefa Şampuanını öneriyoruz.";
    shampooImage.innerHTML = `<div id="ImageDiv">
    <a href="https://nimbahome.com/urun/karanfil-aynisefa-kati-sampuan-120-gr/">
      <img
        class="shampoo-img"
        src="https://nimbahome.com/wp-content/uploads/2023/09/karanfil_aynisefa-800x1198.jpg"
        alt="shampoo-image"
        width="200" height="300"
      />
    </a>
  </div>`;
  } else if (
    hairType === "ince-telli" &&
    usagePurpose === "yaglanma-engelleme"
  ) {
    recommendation = "Aktif Karbon & Çayağacı Şampuanını öneriyoruz.";
    shampooImage.innerHTML = `<div id="ImageDiv">
    <a href="https://nimbahome.com/urun/aktif-karbon-cay-agaci-kati-sampuan-120-gr/">
      <img
        class="shampoo-img"
        src="https://nimbahome.com/wp-content/uploads/2023/09/aktifkarbon_cayagaci-800x1155.jpg"
        alt="shampoo-image"
        width="200" height="300"
      />
    </a>
  </div>`;
  } else if (
    hairType === "ince-telli" &&
    usagePurpose === "dokulmeyi-engelleme"
  ) {
    recommendation = "Gül & İncir Çekirdeği Şampuanını öneriyoruz.";
    shampooImage.innerHTML = `<div id="ImageDiv">
    <a href="https://nimbahome.com/urun/gul-incir-cekirdegi-kati-sampuan-120-gr/">
      <img
        class="shampoo-img"
        src="https://nimbahome.com/wp-content/uploads/2023/09/gul_incircekirdegi-800x1198.jpg"
        alt="shampoo-image"
        width="200" height="300"
      />
    </a>
  </div>`;
  }
  if (hairType )
  var recommendationDiv = document.getElementById("shampoo-recommendation");
  recommendationDiv.innerHTML = "Önerilen Şampuan: " + recommendation;
  recommendationDiv.style.display = "block";
}

document.getElementById("hair-type").addEventListener("change", function () {
  var usagePurposeSelect = document.getElementById("usage-purpose");
  var recommendButton = document.getElementById("recommend-button");

  if (this.value !== "") {
    usagePurposeSelect.removeAttribute("disabled");
  } else {
    usagePurposeSelect.value = "";
    usagePurposeSelect.setAttribute("disabled", "true");
    recommendButton.style.display = "none";
  }
});

document
  .getElementById("usage-purpose")
  .addEventListener("change", function () {
    var recommendButton = document.getElementById("recommend-button");

    if (this.value !== "") {
      recommendButton.style.display = "block";
    } else {
      recommendButton.style.display = "none";
    }
  });
