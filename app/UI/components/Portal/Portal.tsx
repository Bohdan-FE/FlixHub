'use client'
import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const Portal = ({ children }: { children: React.ReactNode }) => {
    const portalContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const portalContainer = document.createElement('div');
        portalContainer.classList.add('portal-container');
        document.body.appendChild(portalContainer);
        portalContainerRef.current = portalContainer;


        return () => {
            if (portalContainerRef.current) {
                document.body.removeChild(portalContainerRef.current);
            }
        };
    }, []);

    return portalContainerRef.current
        ? ReactDOM.createPortal(children, portalContainerRef.current)
        : null;
};

export default Portal;