import { PiMaskSadDuotone } from "react-icons/pi";
import { NotificationContainer } from "./Notification.styled";

function Notification({ children }) {
    return (
        <NotificationContainer>
            <PiMaskSadDuotone />
            {children}
        </NotificationContainer>
    )
}

export default  Notification;