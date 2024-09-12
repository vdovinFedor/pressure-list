import React, { ReactNode } from 'react';
import './TwoElementLayout.css';

type TwoElementLayoutProps = {
  leftComponent?: ReactNode;
  rightComponent?: ReactNode;
};

function TwoElementLayout({ leftComponent, rightComponent }: TwoElementLayoutProps) {
    return (
        <div className="layout-container">
            <div className="left-component">{leftComponent}</div>
            <div className="right-component">{rightComponent}</div>
        </div>
    );
}

export default TwoElementLayout;
