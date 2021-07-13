import styled from 'styled-components'

const MainGrid = styled.main`
  width: 100%;
  grid-gap: 0.625rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 31.25rem;
  padding: 1rem;

  .profileArea {
    display: none;
    @media (min-width: 860px) {
      display: block;
    }
  }

  @media (min-width: 860px) {
    max-width: 69.375rem;
    display: grid;
    grid-template-areas: 'profileArea welcomeAre ProfileRelationsAre';
    grid-template-columns: 10rem 1fr 19.5rem;
  }
`;

export default MainGrid;