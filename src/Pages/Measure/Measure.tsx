import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMeasure } from "../../Services/Slices/Measure/measureSlice";
import Table from "../../Components/Table/Table";

const Measure = () => {
  const dispatch = useDispatch();
  const columns: any[] = [
    { title: "Id", property: "id" },
    { title: "Nome", property: "name" },
    { title: "Editar", property: "edit" },
    { title: "Excluir", property: "delete" },
  ];

  const { data } = useSelector((state: any) => state.productsSlice);

  useEffect(() => {
    dispatch<any>(fetchMeasure("1"));
  }, [dispatch]);

  return (
    <div>
      <Table
        title="Medidas"
        createButton
        columns={columns}
        data={data.results}
        // edit={fetchPatchProduct}
        // create={fetchPostProduct}
      />
    </div>
  );
};

export default Measure;
