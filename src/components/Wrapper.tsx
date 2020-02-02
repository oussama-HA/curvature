import * as React from 'react';
import styled from '@emotion/styled';

const StyledWrapper = styled.div`
  margin-top:4rem;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

interface WrapperProps {
  className?: string;
}

const Wrapper: React.FC<WrapperProps> = ({ children, className }) => (
  <StyledWrapper className={className}>{children}</StyledWrapper>
);

export default Wrapper;
