import { useEffect } from "react";
import Table from "../../Components/Table/Table";
import { useDispatch, useSelector } from "react-redux";
import { fetchBiddingExemption } from "../../Services/Slices/BiddingExemption/BiddingExemptionSlice";
import { fetchDeleteBiddingExemption } from "../../Services/Slices/BiddingExemption/deleteBiddingExemption";
import { fetchPostBiddingExemption } from "../../Services/Slices/BiddingExemption/postBiddingExemption";

const BiddingExemption = () => {
  const dispatch = useDispatch();
  const columns: any[] = [
    { title: "Id", property: "id" },
    { title: "Quantidade", property: "quantity" },
    { title: "Produto", property: "product" },
    { title: "Descrição", property: "description" },
    { title: "Estoque", property: "stock" },
    { title: "Nota fiscal", property: "nota_fiscal" },
    { title: "Excluir", property: "delete" },
  ];

  const data = useSelector((state: any) => state.biddingExemptionSlice);

  useEffect(() => {
    dispatch<any>(fetchBiddingExemption("1"));
  }, [dispatch]);

  return (
    <div>
      <Table
        title="Pedidos de AF"
        type="biddingExemption"
        columns={columns}
        data={data}
        onDelete={fetchDeleteBiddingExemption}
        onCreate={fetchPostBiddingExemption}
      />
    </div>
  );
};

export default BiddingExemption;
