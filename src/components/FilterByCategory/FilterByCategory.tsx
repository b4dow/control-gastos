import { categories } from "@data/categories";
import { ChangeEvent } from "react";
import { UseBudget } from "@hook";

export const FilterByCategory = () => {
  const { dispatch } = UseBudget();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: "ADD_FILTER_CATEGORY", payload: { id: e.target.value } });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-10">
      <form>
        <div className="flex flex-col md:flex-row md:items-center gap-5">
          <label htmlFor="category">Filtrar Gastos</label>
          <select
            id="category"
            className="bg-slate-100 p-3 flex-1 rounded "
            onChange={handleChange}
          >
            <option>-- Todas las Categorias --</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
};
