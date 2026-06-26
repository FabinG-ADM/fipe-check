const baseUrl = "https://fipe.parallelum.com.br/api/v2/"

const selectBrand = document.getElementById('select-marca')
const selectModels = document.getElementById('select-modelo')
const selectYear = document.getElementById('select-ano')
const btnSearch = document.getElementById('btn-search')
const btnReset = document.getElementById('btn-reset')

// Função para limpar o select
const resetSelect = (select, placeholder) => {
    select.innerHTML = `<option value="">${placeholder}</option>`;
};

// Marcas
const filterBrands = async (vehicleType) => {
    try {
        resetSelect(selectBrand, "Selecione");

        const response = await fetch(`${baseUrl}/${vehicleType}/brands`)

        const brands = await response.json()

        brands.forEach((brand) => {
            selectBrand.innerHTML += `<option value="${brand.code}">
            ${brand.name}</option>`;
        });
    } catch (error) {
        console.error("Erro ao buscar marcas: ", error);
    }
};


// Modelos
const filterModels = async (vehicleType, brandId) => {
    try {
        resetSelect(selectModels, "Selecione");
        resetSelect(selectYear, "Selecione");

        const response = await fetch(`${baseUrl}/${vehicleType}/brands/${brandId}/models`)

        const models = await response.json()

        models.forEach((model) => {
            selectModels.innerHTML += `<option value="${model.code}">
            ${model.name}</option>`;
        });
    } catch (error) {
        console.error("Erro ao buscar modelos: ", error);
    }
};


// Anos
const filterYears = async (vehicleType, brandId, modelId) => {
    try {
        resetSelect(selectYear, "Selecione");

        const response = await fetch(`${baseUrl}/${vehicleType}/brands/${brandId}/models/${modelId}/years`)

        const years = await response.json()

        years.forEach((year) => {
            selectYear.innerHTML += `<option value="${year.code}">
            ${year.name}</option>`;
        });
    } catch (error) {
        console.error("Erro ao buscar ano: ", error);
    }
};

// Informações da FIPE
const searchCarValue = async (vehicleType, brandId, modelId, yearId) => {
    try {
        const response = await fetch(`${baseUrl}/${vehicleType}/brands/${brandId}/models/${modelId}/years/${yearId}`)

        const carValue = await response.json()
        console.log(carValue);

        // Preenche os elementos do HTML com os dados do objeto retornado
        document.getElementById('result-model').textContent = carValue.model;
        document.getElementById('result-price').textContent = carValue.price;
        document.getElementById('result-brand').textContent = carValue.brand;
        document.getElementById('result-year').textContent = carValue.modelYear;
        document.getElementById('result-fuel').textContent = carValue.fuel;
        document.getElementById('result-code').textContent = carValue.codeFipe;
        document.getElementById('result-reference').textContent = carValue.referenceMonth;

        // Mostra a seção de resultado removendo a classe 'hide'
        const resultSection = document.getElementById('result-section');
        resultSection.classList.remove('hide');

        // Scroll suave até o resultado
        resultSection.scrollIntoView({ behavior: 'smooth' });

    } catch (error) {
        console.error("Erro ao buscar informações do carro selecionado: ", error);
    }
}

// Events
// Quando trocar marca -> atualiza modelos
selectBrand.addEventListener('change', () => {
    const brandId = selectBrand.value;

    if (!brandId) {
        resetSelect(selectModels, "Selecione");
        resetSelect(selectYear, "Selecione");
        return;
    }

    filterModels("cars", brandId);
});

// Quando trocar modelo -> atualiza anos
selectModels.addEventListener('change', () => {
    const brandId = selectBrand.value;
    const modelId = selectModels.value;

    if (!modelId) {
        resetSelect(selectYear, "Selecione");
        return;
    }

    filterYears("cars", brandId, modelId);
});

btnSearch.addEventListener('click', () => {
    const brandId = selectBrand.value;
    const modelId = selectModels.value;
    const yearId = selectYear.value;

    if (!brandId || !modelId || !yearId) {
        alert("Selecione todos os campos!");
        return;
    }

    searchCarValue("cars", brandId, modelId, yearId);
});

// Quando clicar em Limpar Busca -> restaura o estado inicial e oculta o resultado
btnReset.addEventListener('click', () => {
    resetSelect(selectBrand, "Selecione");
    resetSelect(selectModels, "Selecione");
    resetSelect(selectYear, "Selecione");
    
    // Recarrega as marcas
    filterBrands("cars");

    // Oculta a seção de resultados
    const resultSection = document.getElementById('result-section');
    resultSection.classList.add('hide');
});

// Inicialização
filterBrands("cars");
