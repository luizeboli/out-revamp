import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ListItem = styled(motion.li)`
  color: #fff;
  font-size: 1.375rem;
  font-weight: 600;
  list-style: none;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &::before {
    content: '0${(props) => props.count}.';
    display: block;
    font-size: 0.75rem;
    opacity: .5;
  }
`;
