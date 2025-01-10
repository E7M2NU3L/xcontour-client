import {Outlet, Navigate} from 'react-router-dom'

const IsLoggedin = () => {
    const session = true;
    return (
        <div>
            {session ? <Outlet /> : <Navigate to="/login" />}
        </div>
    )
}

export default IsLoggedin