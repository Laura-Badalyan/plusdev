import styled from 'styled-components';

const Title = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  text-transform: uppercase;
  margin-top: auto;
  margin-bottom: auto;
`;

export const PageTitle = () => {

    return (
        <Title>
            Լեռնային Ղարաբաղից տեղահանվածներին կեցության եվ կացության ծախսերը հոգալու կատարմանն օժանդակելու համար
            սոցիալական աջակցության միջոցառում
        </Title>
    );
};
