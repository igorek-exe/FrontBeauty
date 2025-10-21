import { Home, MasterArea, RegisterMaster, MasterPreLogin } from './pages';
import { Routes, Route } from 'react-router-dom';
import './app.scss';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/master" element={<MasterArea />} />
            <Route path="/register/master" element={<RegisterMaster />} />
            <Route path="/masters/pre-login" element={<MasterPreLogin />} />
        </Routes>
    );
}

export default App;
