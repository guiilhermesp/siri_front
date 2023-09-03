import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./StockReportForm.module.css";
import Input from "../../../Components/Forms/Input";
import SelectedList from "../../../Components/SelectedList/SelectedList";
import { fetchAllCategories } from "../../../Services/Slices/allCategoriesSlice";
import { fetchAllSectors } from "../../../Services/Slices/Sector/allSectorsSlice";
import { fetchAllProducts } from "../../../Services/Slices/Product/allProducts";
import { fetchAllPublicDefenses } from "../../../Services/Slices/allPublicDefenses";
import Button from "../../../Components/Forms/Button";
import { fetchStockReport } from "../../../Services/Slices/stockReportSlice";
import {
  generateQueryString,
  removeObjectFromCode,
} from "../../../Components/Helper";

const StockReportForm = () => {
  const dispatch = useDispatch();
  const [body, setBody] = useState({
    initial_date: "01/06/2023",
    final_date: "31/08/2023",
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

  const handleSelectionChange = (field: string, selectedOption: any) => {
    setBody((prev: any) => ({
      ...prev,
      [field]: [...prev[field], selectedOption],
    }));
  };

  const handleSubmit = () => {
    dispatch<any>(
      fetchStockReport(generateQueryString(removeObjectFromCode(body)))
    );
  };

  useEffect(() => {
    dispatch<any>(fetchAllCategories());
    dispatch<any>(fetchAllProducts());
    dispatch<any>(fetchAllPublicDefenses());
    dispatch<any>(fetchAllSectors());
  }, []);

  return (
    <div className={styles.container}>
      <Input placeholder="Data inicial" type="date" className={styles.date} />
      <Input placeholder="Data final" type="date" className={styles.date} />
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
        classnameContainer={styles.selectedList}
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
        classnameContainer={styles.selectedList}
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
        classnameContainer={styles.selectedList}
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
        classnameContainer={styles.selectedList}
      />
      <Button onClick={handleSubmit} className={styles.button}>
        Consultar
      </Button>
    </div>
  );
};

export default StockReportForm;
