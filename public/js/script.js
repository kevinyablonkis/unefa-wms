const optionOne = document.getElementById("optionOne");
const optionTwo = document.getElementById("optionTwo");
const optionThree = document.getElementById("optionThree");

if (optionOne) {
  optionOne.addEventListener("click", () => {
    window.location.href = "/add";
  });
  optionTwo.addEventListener("click", () => {
    window.location.href = "/search";
  });
  optionThree.addEventListener("click", () => {
    window.location.href = "/delete";
  });
}

const result = document.getElementById("result");

if (result) {
  function divRow(numberDivID) {
    let containerInfoID = document.getElementById(
      `containerInfo${numberDivID}`
    );
    let btnSliderInfoID = document.getElementById(
      `btnSliderInfo${numberDivID}`
    );

    console.log(btnSliderInfoID);
    console.log(containerInfoID);

    if (btnSliderInfoID.classList.contains("SliderInfo-Active")) {
      btnSliderInfoID.classList.remove("SliderInfo-Active");
      containerInfoID.scrollLeft += -950;
    } else {
      btnSliderInfoID.classList.add("SliderInfo-Active");
      containerInfoID.classList.remove("SliderInfo-Active");
      containerInfoID.scrollLeft += 950;
    }
  }

  const getNumberContainerInfo = document.querySelector(".container-info");
  const getNumberBtnSliderInfo = document.querySelectorAll(".btn-slider-info");

  getNumberBtnSliderInfo.forEach(function (boton) {
    boton.addEventListener("click", function () {
      let idDelBoton = boton.id.match(/\d+/g);
      divRow(idDelBoton);
    });
  });
}

// SEARCH

const inputSearch = document.getElementById("inputSearch");
const btnQuery = document.getElementById("btnQuery");

function obtenerValor() {
  const inputSearchValue = document.getElementById("inputSearch").value;
  console.log(inputSearchValue);
}

if (btnQuery) {
  btnQuery.addEventListener("click", () => {
    inputSearch.click();
  });
}

// VALIDAR CHECKBOX

function validarCheckbox() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  let contadorChecked = 0;

  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      contadorChecked++;
    }
  });

  if (contadorChecked !== 1) {
    alert("Debe seleccionar exactamente un checkbox.");
    return false;
  }
  return true;
}

// MODE DARK/LIGHT

const btnSwitch = document.getElementById("btn-switch");
const btnMode = document.getElementById("btn-mode");
const sliderSpan = document.getElementById("sliderSpan");

if (sliderSpan) {
  sliderSpan.addEventListener("click", () => {
    window.location.href = "/toggle-dark-mode";
  });
}
