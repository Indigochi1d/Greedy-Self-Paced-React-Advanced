import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../../modules/slices/categorySlice.js";

const FilterContainer = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 0 16px;
    margin-top: 24px;
`;

const FilterSelect = styled.select`
    height: 44px;
    min-width: 125px;
    border: 1px solid #d0d5dd;
    border-radius: 8px;
    background: transparent;
    font-size: 16px;
    padding: 8px;
    line-height: 24px;
    font-weight: 400;
`;

const CategoryFilter = () => {
    const dispatch = useDispatch();
    const category = useSelector((state) => state.category);
    const options = ["전체", "한식", "중식", "일식", "양식", "아시안", "기타"];


    const handleChange = (e) => {
       dispatch(setCategory(e.target.value));
    };

    return (
        <FilterContainer>
            <FilterSelect
                value={category}
                onChange={handleChange}
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </FilterSelect>
        </FilterContainer>
    );
};

export default CategoryFilter;
