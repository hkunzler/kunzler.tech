import { Typography } from "antd";
import styled from "styled-components";

const { Title } = Typography;

export const StyledTitle = styled(Title)<{secondary?: boolean}>`
    ${({secondary}) => secondary && `
        color: #0052cc !important;
    `}
`;
