import React from 'react';
import { useServer } from '../context/ServerContext';

const ServerSelector = () => {
    const { serverType, setServerType } = useServer();

    return (
        <div style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'rgba(0,0,0,0.5)',
            padding: '0.5rem',
            borderRadius: '8px',
            display: 'flex',
            gap: '0.5rem',
            alignItems: 'center',
            zIndex: 100
        }}>
            <span style={{ fontSize: '0.8rem', color: '#ccc' }}>Server:</span>
            <select
                value={serverType}
                onChange={(e) => setServerType(e.target.value)}
                style={{
                    background: '#333',
                    color: 'white',
                    border: '1px solid #555',
                    borderRadius: '4px',
                    padding: '0.2rem 0.5rem'
                }}
            >
                <option value="mysql">MySQL (v1)</option>
                <option value="redis">Redis (v2)</option>
            </select>
        </div>
    );
};

export default ServerSelector;
