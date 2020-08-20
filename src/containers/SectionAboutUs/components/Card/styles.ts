import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  border-radius: 4px;
  width: 100%;
  min-width: 345px;
  max-width: 400px;
  margin-top: 1.5rem;

  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

export const PhotoContainer = styled.div`
  width: 100%;
  height: 170px;
  overflow: hidden;

  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CardTitle = styled.div`
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.1);
  padding: 0.75rem;

  > span {
    color: #2f5777;
    font-weight: 500;
    font-size: 18px;
    text-transform: uppercase;
  }
`;

export const CardContent = styled.div`
  padding: 0.75rem;

  > p {
    line-height: 1.5;
    color: #151515;
  }
`;
