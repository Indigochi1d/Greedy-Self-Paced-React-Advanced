import styled from "styled-components";

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

const CategoryFilter = ({ selectedCategory, onChange }) => {
    const options = ["전체", "한식", "중식", "일식", "양식", "아시안", "기타"];

    return (
        <FilterContainer>
            <FilterSelect
                value={selectedCategory}
                onChange={(e) => onChange(e.target.value)}
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
