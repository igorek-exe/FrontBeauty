import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '@/stores/slices/authSlice.ts';
import { RegisterMasterCredentials } from '@/stores/types/authTypes';
import { AppDispatch } from '@/stores/store.ts';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.scss';
import EyeEmpty from '@/assets/icons/EyeEmpty.svg?react';
import {
    validateLogin,
    passwordValidator,
    validatePasswordConfirmation,
    validateEmail,
} from '@/utils';
import { Button, LinkButton, Picture, SvgIcon } from '@/components';

interface Errors {
    username: string;
    email: string;
    password: string;
    passwordConfirmation: string;
    agreeToPersonalData?: string;
}

/*interface LoginFormProps {
    onSuccess?: (token: string) => void;
    onError?: (error: string) => void;
}*/

const RegisterMaster: React.FC = () => {
    const [credentials, setCredentials] = useState<RegisterMasterCredentials>({
        role: 'master',
        username: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState<Errors>({
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        agreeToPersonalData: '',
    });

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [passwordConfirmationVisible, setPasswordConfirmationVisibile] = useState(false);
    const [agreeToPersonalData, setAgreeToPersonalData] = useState(false);

    /*const [isLoading, setIsLoading] = useState(false);*/
    const [loginError, setLoginError] = useState('');

    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const togglePasswordConfirmationVisibility = () => {
        setPasswordConfirmationVisibile(!passwordConfirmationVisible);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!agreeToPersonalData) {
            setErrors((prev) => ({
                ...prev,
                agreeToPersonalData:
                    'Необходимо подтвердить согласие на обработку персональных данных.',
            }));
            return;
        }

        setLoginError(
            errors.email ||
                errors.username ||
                errors.password ||
                errors.passwordConfirmation ||
                errors.agreeToPersonalData
        );
        console.log(
            errors.email || errors.username || errors.password || errors.passwordConfirmation
        );

        try {
            await dispatch(register(credentials)).unwrap();
            navigate('/master');
        } catch (error) {
            if (error instanceof Error) {
                setLoginError(error.message);
            } else if (typeof error === 'string') {
                setLoginError(error);
            } else {
                setLoginError('Произошла неизвестная ошибка');
            }
        }
    };

    const getInputStyle = (fieldValue: string, error?: string) => {
        if (error) {
            return {
                borderColor: 'red',
                backgroundColor: '#ffe6e6',
            };
        } else if (fieldValue.length > 6) {
            return {
                borderColor: 'green',
                backgroundColor: '#e6ffe6',
            };
        } else {
            return {
                borderColor: '#ccc',
                backgroundColor: 'white',
            };
        }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        let errorMessage = '';

        switch (name) {
            case 'username':
                errorMessage = validateLogin(value);
                break;
            case 'password':
                errorMessage = passwordValidator(value);
                break;
            case 'passwordConfirmation':
                errorMessage = validatePasswordConfirmation(value, credentials.password);
                break;
            case 'email':
                errorMessage = validateEmail(value);
                break;
        }

        setErrors((prev) => ({ ...prev, [name]: errorMessage }));
    };

    return (
        <div className="container">
            <div className={styles.centred}>
                <div className={styles.leftSide}>
                    <Picture src={'/images/master-reg.png'} alt={'маникюр мастера'}/>
                    <div className={styles.leftSIdeText}>
                        <h3 className={styles.leftSideTitle}>Профиль мастеров</h3>
                        <p className={styles.leftSideDesc}>
                            Создайте свою страницу специалиста<br />и получайте дополнительный поток
                            клиентов. 3 миллиона человек ищут услуги и специалистов каждый месяц.
                        </p>
                    </div>
                </div>

                <div className={styles.loginFormContainer}>
                    <div className={styles.loginHeader}>
                        <h2 className={styles.loginTitle}>Регистрация для Мастеров</h2>
                        <div className={styles.loginLinks}>
                            <span className="noAccount">Уже есть Личный Профиль?</span>
                            <LinkButton to="/login" className="registerLink">
                                Вход
                            </LinkButton>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.formGroup}>
                            <label htmlFor="username" className={styles.formLabel}>
                                Логин
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                /*value={credentials.username}*/
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="логин"
                                className={styles.formInput}
                                style={{ ...getInputStyle(credentials.username, errors.username) }}
                            />
                            {errors.username ? (
                                <span className={styles.errorMessage + ' ' + styles.inputHint}>
                                    {errors.username}
                                </span>
                            ) : (
                                <span className={styles.inputHint}>придумайте логин</span>
                            )}
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.formLabel}>
                                Email
                            </label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                value={credentials.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="email"
                                className={styles.formInput}
                                style={{ ...getInputStyle(credentials.email, errors.email) }}
                            />
                            {errors.email ? (
                                <span className={styles.errorMessage + ' ' + styles.inputHint}>
                                    {errors.email}
                                </span>
                            ) : (
                                <span className={styles.inputHint}>введите email</span>
                            )}
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="password" className={styles.formLabel}>
                                Пароль
                            </label>
                            <div className={styles.passwordInputContainer}>
                                <input
                                    type={passwordVisible ? 'text' : 'password'}
                                    id="password"
                                    name="password"
                                    value={credentials.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="пароль"
                                    className={styles.formInput + ' ' + styles.passwordInput}
                                    style={{
                                        ...getInputStyle(credentials.password, errors.password),
                                    }}
                                />
                                <button
                                    type="button"
                                    className={styles.passwordToggleButton}
                                    onClick={togglePasswordVisibility}
                                >
                                    <SvgIcon Icon={EyeEmpty} className="" />
                                </button>
                            </div>
                            {!errors.password ? (
                                <span className={styles.errorMessage + ' ' + styles.inputHint}>
                                    придумайте пароль
                                </span>
                            ) : (
                                <span className={styles.errorMessage + ' ' + styles.inputHint}>
                                    {errors.password}
                                </span>
                            )}
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="passwordConfirmation" className={styles.formLabel}>
                                Пароль
                            </label>
                            <div className={styles.passwordInputContainer}>
                                <input
                                    type={passwordConfirmationVisible ? 'text' : 'password'}
                                    id="passwordConfirmation"
                                    name="passwordConfirmation"
                                    /*value={'test'}*/
                                    /*onChange={handleChange}*/
                                    onBlur={handleBlur}
                                    placeholder="повторите пароль"
                                    className={styles.formInput + ' ' + styles.passwordInput}
                                    style={{
                                        ...getInputStyle('test', errors.passwordConfirmation),
                                    }}
                                />
                                <button
                                    type="button"
                                    className={styles.passwordToggleButton}
                                    onClick={togglePasswordConfirmationVisibility}
                                >
                                    <SvgIcon Icon={EyeEmpty} className="" />
                                </button>
                            </div>
                            {!errors.passwordConfirmation ? (
                                <span className={styles.inputHint}>повторите пароль</span>
                            ) : (
                                <span className={styles.errorMessage + ' ' + styles.inputHint}>
                                    {errors.passwordConfirmation}
                                </span>
                            )}
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.checkboxLabel}>
                                <span className={styles.checkboxText}>
                                    Согласие на обработку персональных данных
                                </span>
                                <input
                                    type="checkbox"
                                    checked={agreeToPersonalData}
                                    onChange={() => setAgreeToPersonalData(!agreeToPersonalData)}
                                    className={styles.checkboxInput}
                                />
                            </label>

                            {errors.agreeToPersonalData && (
                                <span className={styles.errorMessage + ' ' + styles.inputHint}>
                                    {errors.agreeToPersonalData}
                                </span>
                            )}
                        </div>

                        <div className={styles.formBtnGroup}>
                            {loginError && (
                                <div className={styles.errorMessage + ' ' + styles.inputHint}>
                                    {loginError}
                                </div>
                            )}
                            <Button
                                children="Продолжить"
                                type="submit"
                                classNames={{ buttonClass: 'loginButton' }}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export { RegisterMaster };
