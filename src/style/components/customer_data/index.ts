import styled from 'styled-components';

export const CustomerDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const CustomerInfo = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
  border-radius: 8px;
  padding: 20px;
  width: 100%;
  max-width: 600px;
`;

export const CustomerName = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
`;

export const CustomerDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const DetailTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const DetailValue = styled.p`
  font-size: 16px;
`;