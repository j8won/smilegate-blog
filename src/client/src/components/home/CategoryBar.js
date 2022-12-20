import styled from "styled-components";
import {useRecoilState} from "recoil";
import categoryState from "../../recoil/atoms/categoryState";
import CATEGORY_TYPES from "../../constant/CATEGORY_TYPES";

function CategoryBar() {
  const [categories, setCategories] = useRecoilState(categoryState);

  const onButtonClick = (type) => {
    setCategories({...CATEGORY_TYPES.INITIAL_STATUS, ...CATEGORY_TYPES.TYPES_TRUE[type]});
  };

  return (
    <Container>
      {CATEGORY_TYPES.ARRAY.map((category) => (
        <Button
          onClick={() => onButtonClick(category)}
          status={categories[category]}
        >
          {CATEGORY_TYPES[category]}
        </Button>
      ))}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 48px;
  margin-top: 24px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Button = styled.div`
  width: 100px;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 16px;
  font-weight: 600;

  color: ${props => props.status ? props.theme.orange : props.theme.highlightColor};
  border-bottom: ${props => props.status ? `2px solid ${props.theme.orange}` : undefined};
`;

export default CategoryBar;
