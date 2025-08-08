import React from 'react';

const PaginaEmConstrucao = () => {
    return (
        <div style={{
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#f5f5f5',
            color: '#333'
        }}>
            <svg width="100" height="100" viewBox="0 0 24 24" fill="none">
                <path d="M2 17h20M2 17l2-9h16l2 9M7 17V9M17 17V9" stroke="#ff9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="4" r="2" fill="#ff9800"/>
            </svg>
            <h1>Página em Construção</h1>
            <p>Esta página do portfólio está sendo desenvolvida.<br />Volte em breve para novidades!</p>
        </div>
    );
};

export default PaginaEmConstrucao;