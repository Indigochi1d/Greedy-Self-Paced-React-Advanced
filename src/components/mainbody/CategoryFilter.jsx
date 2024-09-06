import styled from "styled-components";
import {useRecoilState} from "recoil";
import {CategoryAtom} from "../../store/index.js";

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
    const options = ["전체", "한식", "중식", "일식", "양식", "아시안", "기타"];
    const [category, setCategory] = useRecoilState(CategoryAtom);

    const handleChange = (e) => {
        setCategory(e.target.value);
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
