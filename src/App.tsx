import { Home, MasterArea, RegisterMaster, MasterPreLogin, ClientPreLogin } from './pages';
import { Routes, Route } from 'react-router-dom';
import './app.scss';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/master" element={<MasterArea />} />
            <Route path="/register/master" element={<RegisterMaster />} />
            <Route path="/masters/pre-login" element={<MasterPreLogin />} />
            <Route path="/clients/pre-login" element={<ClientPreLogin />} />
        </Routes>
    );
}

export default App;
