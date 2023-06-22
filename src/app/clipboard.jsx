
const validate = (values) => {
    const priceRegex = /^\d+(\.\d{1,2})?$/;

    setErrors({
      name_product: "",
      price_product: "",
      description_product: "",
      category_product: "",
      gener_product: "",
    });

    if (values.name_product === "" || values.name_product.length < 5) {
      setErrors((prev) => ({
        ...prev,
        name_product: "Adicione no mínimo 5 caracteres",
      }));
    }

    if (!priceRegex.test(values.price_product)) {
      setErrors((prev) => ({
        ...prev,
        price_product: "Insira um valor numérico válido para o preço",
      }));
    }

    if (values.description_product.length < 10) {
      setErrors((prev) => ({
        ...prev,
        description_product: "Adicione no mínimo 10 caracteres",
      }));
    }

    if (values.category_product === "") {
      setErrors((prev) => ({
        ...prev,
        category_product: "Selecione uma categoria",
      }));
    }

    if (values.gener_product === "") {
      setErrors((prev) => ({
        ...prev,
        gener_product: "Selecione um gênero",
      }));
    }

    if (
      Object.values(errors).every((value) => value === "") &&
      Object.values(values).every((value) => value !== "")
    ) {
      console.log("passou");
      sendInfoToDataBase();
      listenerSubmit(true);
    }
  };

  const sendInfoToDataBase = () => {
    sendInfo(formik.values);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };