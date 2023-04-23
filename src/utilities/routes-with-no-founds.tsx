import { Route, Routes } from "react-router-dom";

interface Props {
    children: JSX.Element | JSX.Element[];
}

function RoutesWithNoFounds({ children }: Props) {
    return (
        <Routes>
            {children}
            <Route path="*" element={<>Not Founds</>} />
        </Routes>
    )
}
export default RoutesWithNoFounds