import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "../../Components/Table/Table";
import { fetchCategory } from "../../Services/Slices/Category/categorySlice";
import { fetchDeleteCategory } from "../../Services/Slices/Category/deleteCategory";
import { fetchPatchCategory } from "../../Services/Slices/Category/patchCategory";
import { fetchPostCategory } from "../../Services/Slices/Category/postCategory";

const Category = () => {
  const dispatch = useDispatch();
  const columns: any[] = [
    { title: "Id", property: "id" },
    { title: "Nome", property: "name" },
    { title: "Código", property: "code" },
    { title: "Editar", property: "edit" },
    { title: "Excluir", property: "delete" },
  ];

  const { data } = useSelector((state: any) => state.categorySlice);

  useEffect(() => {
    dispatch<any>(fetchCategory("1"));
  }, [dispatch]);

  return (
    <div>
      <Table
        title="Categorias"
        type="category"
        columns={columns}
        data={data.results}
        onEdit={fetchPatchCategory}
        onCreate={fetchPostCategory}
        onDelete={fetchDeleteCategory}
      />
    </div>
  );
};

export default Category;
