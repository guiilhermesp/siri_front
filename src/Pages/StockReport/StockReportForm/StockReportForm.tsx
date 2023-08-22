import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../../Components/Forms/Input";
import SelectedList from "../../../Components/SelectedList/SelectedList";
import { fetchAllCategories } from "../../../Services/Slices/allCategoriesSlice";
import { fetchAllSectors } from "../../../Services/Slices/Sector/allSectorsSlice";
import { fetchAllProducts } from "../../../Services/Slices/Product/allProducts";
import { fetchAllPublicDefenses } from "../../../Services/Slices/allPublicDefenses";
import Button from "../../../Components/Forms/Button";
import { fetchStockReport } from "../../../Services/Slices/stockReportSlice";
import { generateQueryString } from "../../../Components/Helper";

const StockReportForm = () => {
  const dispatch = useDispatch();
  const [body, setBody] = useState({
    initial_date: "27/04/2002",
    final_date: "27/04/2002",
    category: [],
    product: [],
    public_defense: [],
    sector: [],
  });
  const category: any = useSelector<any>((state) => state.allCategoriesSlice);
  const product: any = useSelector<any>((state) => state.allProducts);
  const public_defense: any = useSelector<any>(
    (state) => state.allPublicDefenses
  );
  const sector: any = useSelector<any>((state) => state.allSectorsSlice);

  const extractNames = (property: string) => {
    switch (property) {
      case "category":
        return category.data;
      case "product":
        return product.data;
      case "public_defense":
        return public_defense.data;
      case "sector":
        return sector.data;
      default:
        return [];
    }
  };
  const { data } = useSelector((state: any) => state.stockReportSlice);
  console.log("data: ", data);

  const handleSelectionChange = (field: string, selectedOption: any) => {
    setBody((prev: any) => ({
      ...prev,
      [field]: [...prev[field], selectedOption],
    }));
  };

  const handleSubmit = () => {
    dispatch<any>(fetchStockReport(generateQueryString(body)));
  };

  useEffect(() => {
    dispatch<any>(fetchAllCategories());
    dispatch<any>(fetchAllProducts());
    dispatch<any>(fetchAllPublicDefenses());
    dispatch<any>(fetchAllSectors());
  }, []);

  return (
    <div>
      <Input placeholder="Data inicial" />
      <Input placeholder="Data final" />
      <SelectedList
        placeholder="Categoria"
        setList={setBody}
        list={body}
        options={extractNames("category")}
        isType
        readOnly
        onChange={(option: any) => {
          handleSelectionChange("category", option);
        }}
        field="category"
      />
      <SelectedList
        placeholder="Produto"
        setList={setBody}
        list={body}
        options={extractNames("product")}
        isType
        readOnly
        onChange={(option: any) => {
          handleSelectionChange("product", option);
        }}
        field="product"
      />
      <SelectedList
        placeholder="Núcleo"
        setList={setBody}
        list={body}
        options={extractNames("public_defense")}
        isType
        readOnly
        onChange={(option: any) => {
          handleSelectionChange("public_defense", option);
        }}
        field="public_defense"
      />
      <SelectedList
        placeholder="Setor"
        setList={setBody}
        list={body}
        options={extractNames("sector")}
        isType
        readOnly
        onChange={(option: any) => {
          handleSelectionChange("sector", option);
        }}
        field="sector"
      />
      <Button onClick={handleSubmit}>Consultar</Button>
    </div>
  );
};

export default StockReportForm;
