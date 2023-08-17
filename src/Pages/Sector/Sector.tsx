import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "../../Components/Table/Table";
import { fetchSector } from "../../Services/Slices/Sector/sectorSlice";

const Sector = () => {
  const dispatch = useDispatch();
  const columns: any[] = [
    { title: "Id", property: "id" },
    { title: "Nome", property: "name" },
    { title: "Defensoria", property: "public_defense" },
  ];

  const { data } = useSelector((state: any) => state.sectorSlice);

  useEffect(() => {
    dispatch<any>(fetchSector("1"));
  }, [dispatch]);

  return (
    <div>
      <Table
        title="Medidas"
        createButton
        columns={columns}
        data={data.results}
      />
    </div>
  );
};

export default Sector;
