// @flow
import styled from 'styled-components';

const HelpText = styled.p`
  margin-top: 0;
  color: ${props => props.theme.slateDark};
  font-size: ${props => (props.small ? '13px' : 'inherit')};
`;

export default HelpText;
