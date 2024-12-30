import React from 'react';
import LedSignBoard from './LedSignBoard';
import './App.css';

function App() {
    return (
        <div className="app" style={{ background: '#1a1a1a', minHeight: '100vh', padding: '20px' }}>
            <LedSignBoard 
                initialBusNumber="300"
                initialTopText="Mehdipatnam-uppal"
                initialBottomText="via mehdipatnam - aramghar - santosh nagar - lb nagar - uppal"
            />
        </div>
    );
}

export default App;
