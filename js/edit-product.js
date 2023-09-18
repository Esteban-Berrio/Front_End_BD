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


    if (formulario) { // Verifica que el formulario existe
        const Reference = document.getElementById("Reference");
        const referenceError = document.getElementById("reference-error");
        const Provider = document.getElementById("Provider");
        const ProviderError = document.getElementById("provider-error");
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
        const taxError = document.getElementById("tax-error");

        const Size = document.getElementById("Size");
        const sizeError = document.getElementById("size-error");

        const longitudMinima = 3;
        const longitudMaxima = 45;



        formulario.addEventListener("submit", function (e) {
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

            if (Stock.value === "" || !regex.test(Stock.value)) {
                stockError.textContent = "Este campo es obligatorio (Solo se aceptan números)";
                stockError.style.display = "block";
                valid = false;
            } else {
                stockError.style.display = "none";
            }

            if (Price.value === "" || !regex.test(Price.value)) {
                priceError.textContent = "Este campo es obligatorio (Solo se aceptan números)";
                priceError.style.display = "block";
                valid = false;
            } else {
                priceError.style.display = "none";
            }

            if (Discount.value === "" || !regex.test(Discount.value)) {
                discountError.textContent = "Este campo es obligatorio (Solo se aceptan números)";
                discountError.style.display = "block";
                valid = false;
            } else {
                discountError.style.display = "none";
            }

            if (Tax.value === "") {
                taxError.textContent = "Este campo es obligatorio";
                taxError.style.display = "block";
                valid = false;
            } else {
                taxError.style.display = "none";
            }

            if (Size.value === "") {
                sizeError.textContent = "Este campo es obligatorio";
                sizeError.style.display = "block";
                valid = false;
            } else {
                sizeError.style.display = "none";
            }

            if (img && img.files.length === 0) {


            } else {
                imgError.style.display = "none";
            }

            if (!valid) {
                e.preventDefault(); // Evita el envío del formulario si hay errores
            } else {
                Swal.fire({

                    icon: 'success',
                    title: 'Producto actualizado!',
                    showConfirmButton: false,
                    timer: 1900
                }).then(() => {
                    window.location.href = "crud-product.php"; // Redireccionar
                });
            }
        });
    }



});