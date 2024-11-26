import React from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from './Header.module.css';
import Logo from '../../assets/Logo.png';

interface Props {
  title: string;
  returnButton?: boolean;
}

export default function Header(props: Props):any {
    const { title, returnButton = false } = props;
    const navigate = useNavigate();
    const renderReturnButton = () => {
        if (!returnButton) return null;
        const goToHomeScreen = () => navigate(-1);
        return (
            <div className="ml-2 mr-2">
                <IconButton type="button" onClick={goToHomeScreen}>
                    <ArrowBackIcon />
                </IconButton>
            </div>

        );
    };
    return (
        <div className={styles.container}>
            {renderReturnButton()}
            <img
                className={styles.image}
                src={Logo}
                alt="Logo"
                height={40}
                width={40}
            />
            <span className={styles.headerText}>{title}</span>
        </div>
    );
}
