import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMeasure } from "../../Services/Slices/Measure/measureSlice";
import Table from "../../Components/Table/Table";
import { fetchPatchMeasure } from "../../Services/Slices/Measure/patchMeasure";
import { fetchPostMeasure } from "../../Services/Slices/Measure/postMeasure";
import { fetchDeleteMeasure } from "../../Services/Slices/Measure/deleteMeasure";

const Measure = () => {
  const dispatch = useDispatch();
  const columns: any[] = [
    { title: "Id", property: "id" },
    { title: "Nome", property: "name" },
    { title: "Editar", property: "edit" },
    { title: "Excluir", property: "delete" },
  ];

  const { data } = useSelector((state: any) => state.measureSlice);

  useEffect(() => {
    dispatch<any>(fetchMeasure("1"));
  }, [dispatch]);

  return (
    <div>
      <Table
        title="Medidas"
        type="measure"
        columns={columns}
        data={data.results}
        onEdit={fetchPatchMeasure}
        onCreate={fetchPostMeasure}
        onDelete={fetchDeleteMeasure}
      />
    </div>
  );
};

export default Measure;
