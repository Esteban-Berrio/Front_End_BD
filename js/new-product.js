document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("productForm");
    const fileInputoor = document.getElementById('foto');
    const previewImage = document.getElementById('fotoProduct');



    fileInputoor.addEventListener('change', function () {
        if (this.files && this.files[0]) {
            const reader = new FileReader();

            reader.onload = function (e) {
                previewImage.src = e.target.result;
            };

            reader.readAsDataURL(this.files[0]);
        } else {
            // Limpiar la vista previa si no se selecciona ningún archivo
            previewImage.src = "#";
        }
    });




    if (formulario) {


        const Reference = document.getElementById("Reference");
        const referenceError = document.getElementById("reference-error");
        const Provider = document.getElementById("Provider");
        const ProviderError = document.getElementById("state-error");
        const nameError = document.getElementById("name-error");
        const Name = document.getElementById("Name");
        const Description = document.getElementById("Description");
        const descriptionError = document.getElementById("description-error");


        const img = document.getElementById("foto");
        const imgError = document.getElementById("img-error");

        const Stock = document.getElementById("Stock");
        const stockError = document.getElementById("stock-error");

        const Price = document.getElementById("Price");
        const priceError = document.getElementById("price-error");
        const Discount = document.getElementById("Discount");
        const discountError = document.getElementById("discount-error");
        const Tax = document.getElementById("Tax");
        const TaxError = document.getElementById("tax-error");

        const Size = document.getElementById("Size");
        const sizeError = document.getElementById("size-error");


        const longitudMinima = 3;
        const longitudMaxima = 45;


        formulario.addEventListener("submit", function (event) {

            // let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            let valid = true;
            var regex = /^[0-9-%]+$/;


            if (Reference.value === "") {
                referenceError.textContent = "Este campo es obligatorio";
                referenceError.style.display = "block";
                valid = false;

            } else {
                referenceError.style.display = "none";
            }

            if (Provider.value === "") {
                ProviderError.textContent = "Este campo es obligatorio";
                ProviderError.style.display = "block";
                valid = false;

            } else {
                ProviderError.style.display = "none";
            }
            if (Name.value === "") {
                nameError.textContent = "Este campo es obligatorio";
                nameError.style.display = "block";
                valid = false;

            } else {
                nameError.style.display = "none";
            }

            if (Description.value === "") {
                descriptionError.textContent = "Este campo es obligatorio";
                descriptionError.style.display = "block";
                valid = false;

            } else {
                descriptionError.style.display = "none";
            }


            if (Stock.value === "", !regex.test(Stock.value)) {
                stockError.textContent = "Este campo es obligatorio";
                stockError.style.display = "block";
                valid = false;

            } else {
                stockError.style.display = "none";
            }

            if (Price.value === "", !regex.test(Price.value)) {
                priceError.textContent = "Este campo es obligatorio";
                priceError.style.display = "block";
                valid = false;

            } else {
                priceError.style.display = "none";
            }

            if (Discount.value === "", !regex.test(Discount.value)) {
                discountError.textContent = "Este campo es obligatorio";
                discountError.style.display = "block";
                valid = false;

            } else {
                discountError.style.display = "none";
            }


            if (Tax.value === "") {
                TaxError.textContent = "Este campo es obligatorio";
                TaxError.style.display = "block";
                valid = false;

            } else {
                TaxError.style.display = "none";
            }


            if (Size.value === "") {
                sizeError.textContent = "Este campo es obligatorio";
                sizeError.style.display = "block";
                valid = false;

            } else {
                sizeError.style.display = "none";
            }

            if (img.value === "") {
                imgError.textContent = "Este campo es obligatorio";
                imgError.style.display = "block";
                valid = false;

            } else {
                imgError.style.display = "none";
            }


            if (!valid) {
                event.preventDefault(); // Previene la recarga de la página en caso de error
            } else {
                Swal.fire({

                    icon: 'success',
                    title: 'Producto creado!',
                    showConfirmButton: false,
                    timer: 1900
                }).then(() => {
                    window.location.href = "crud-product.php"; // Redireccionar
                });
            }



        });

    }

});