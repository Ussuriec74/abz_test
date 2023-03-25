import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 ${p => p.theme.space[4]}px;

  @media (min-width: ${p => p.theme.space[11]}px) {
    width: ${p => p.theme.space[11]}px;
    padding: 0 ${p => p.theme.space[6]}px;
  }
  @media (min-width: ${p => p.theme.space[12]}px) {
    width: ${p => p.theme.space[12]}px;
    padding: 0 ${p => p.theme.space[7]}px;;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: ${p => p.theme.space[7]}px;
  background-color: ${p => p.theme.colors.white};
`;

export const Logo = styled.p`
  font-weight: 700;
  margin: 0;
`;