import { Flex } from "antd";
import styled from "styled-components";

export const Section = styled(Flex)<{secondary?: boolean}>`
${({secondary}) => secondary && `background-color: #f8f9fa;`}
padding: 50px 10%; 
text-align: center;
`;