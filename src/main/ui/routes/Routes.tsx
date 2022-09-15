import RegistrationPage from '../../../features/f1-auth/a2-registretion/RegistrationPage';
import RecoveryPassPage from '../../../features/f2-pass/a1-recoveryPass/RecoveryPassPage';
import SetPassPage from '../../../features/f2-pass/a2-setPass/SetPassPage';
import ProfilePage from '../../../features/f3-profile/a5-profile/ProfilePage';
import Error404Page from '../../../features/error/Error404Page';
import TestPage from '../../../features/f0-test/TestPage';
import {Route, Routes} from 'react-router-dom';
import LoginContainer from '../../../features/f1-auth/a1-login/LoginContainer';

const RoutesC = () => {
    return <div>
        <Routes>
            <Route path="/login" element={<LoginContainer/>}/>
            <Route path="/registration" element={<RegistrationPage/>}/>
            <Route path="/recovery-pass" element={<RecoveryPassPage/>}/>
            <Route path="/set-pass" element={<SetPassPage/>}/>
            <Route path="/profile" element={<ProfilePage/>}/>
            <Route path="/error-404" element={<Error404Page/>}/>
            <Route path="/test" element={<TestPage/>}/>
        </Routes>
    </div>
}

export default RoutesC