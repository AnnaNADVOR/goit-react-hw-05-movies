import { ContainerContent } from "./Container.styled";

function Container({ children }) {
    return (
        <ContainerContent>{children}</ContainerContent>
    )
}

export default Container; 