import type { JSX } from "keycloakify/tools/JSX";
import { useState } from "react";
import type { LazyOrNot } from "keycloakify/tools/LazyOrNot";
import { kcSanitize } from "keycloakify/lib/kcSanitize";
import { getKcClsx, type KcClsx } from "keycloakify/login/lib/kcClsx";
import { clsx } from "keycloakify/tools/clsx";
import type { UserProfileFormFieldsProps } from "keycloakify/login/UserProfileFormFieldsProps";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { Box, Button, Typography } from "@mui/material";
import logotipo from "../../../assets/logotipo.png";

type RegisterProps = PageProps<Extract<KcContext, { pageId: "register.ftl" }>, I18n> & {
    UserProfileFormFields: LazyOrNot<(props: UserProfileFormFieldsProps) => JSX.Element>;
    doMakeUserConfirmPassword: boolean;
};

export default function Register(props: RegisterProps) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes, UserProfileFormFields, doMakeUserConfirmPassword } = props;

    const { kcClsx } = getKcClsx({
        doUseDefaultCss,
        classes
    });

    const { messageHeader, url, messagesPerField, recaptchaRequired, recaptchaVisible, recaptchaSiteKey, recaptchaAction, termsAcceptanceRequired } =
        kcContext;

    const { msg, msgStr, advancedMsg } = i18n;

    const [isFormSubmittable, setIsFormSubmittable] = useState(false);
    const [areTermsAccepted, setAreTermsAccepted] = useState(false);

    return (
        <Template
            kcContext={kcContext}
            i18n={i18n}
            doUseDefaultCss={doUseDefaultCss}
            classes={classes}
            headerNode={messageHeader !== undefined ? advancedMsg(messageHeader) : msg("registerTitle")}
            displayMessage={messagesPerField.exists("global")}
            displayRequiredFields
        >
            <div id="kc-form">
                <Box display="flex" height="100vh" bgcolor="#121212">
                    <Box
                        sx={{
                            flex: 1,
                            color: "white",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: 'column-reverse'
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "flex-start",
                                alignItems: "flex-start",
                                maxWidth: 552, // Evita que o texto fique muito largo
                            }}
                        >
                            <Typography
                                variant="h2"
                                fontWeight={900}
                                sx={{ fontSize: 62, }}
                            >
                                Bem-vindo ao Playtime!
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: 24,
                                    // fontFamily: "Raleway",
                                    fontWeight: 400,
                                    lineHeight: "34px",
                                    letterSpacing: "0.35px",
                                }}
                            >
                                Gerencie suas quadras de forma eficiente <br />
                                e atraia novos usuários com facilidade.
                            </Typography>

                            <Button
                                variant="contained"
                                sx={{
                                    mt: 3,
                                    backgroundColor: "#20123F",
                                    borderRadius: "31.5px",
                                    fontSize: 18,
                                    // fontFamily: "Montserrat",
                                    fontWeight: 600,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.42px",
                                    ":hover": { backgroundColor: "#2A1A4F" },
                                }}
                            >
                                Watch Demo
                            </Button>
                        </Box>

                        <Box
                            sx={{
                                top: 0,
                                left: 0,
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <img
                                src={logotipo}
                                alt="Imagem substituindo os Box"
                            // style={{
                            //     width: "auto", // ou o tamanho que desejar
                            //     height: "auto",
                            // }}
                            />
                        </Box>

                    </Box>

                    <Box flex={1} display="flex" flexDirection="column" justifyContent="center" alignItems="center" bgcolor="#181818" px={4}>
                        <Typography variant="h5" fontWeight="bold" color="white">Seja bem vindo,
                            Crie abaixo sua Arena!</Typography>
                        <form
                            id="kc-register-form"
                            className={kcClsx("kcFormClass")}
                            action={url.registrationAction}
                            method="post"
                        >
                            <UserProfileFormFields
                                kcContext={kcContext}
                                i18n={i18n}
                                kcClsx={kcClsx}
                                onIsFormSubmittableValueChange={setIsFormSubmittable}
                                doMakeUserConfirmPassword={doMakeUserConfirmPassword}
                                // kcProps={{
                                //     input: {
                                //         style: { backgroundColor: "white", padding: "10px", borderRadius: "8px" },
                                //     },
                                // }}
                            />

                            {termsAcceptanceRequired && (
                                <TermsAcceptance
                                    i18n={i18n}
                                    kcClsx={kcClsx}
                                    messagesPerField={messagesPerField}
                                    areTermsAccepted={areTermsAccepted}
                                    onAreTermsAcceptedValueChange={setAreTermsAccepted}
                                />
                            )}
                            {/* {recaptchaRequired && (recaptchaVisible || recaptchaAction === undefined) && (
                                <div className="form-group">
                                    <div className={kcClsx("kcInputWrapperClass")}>
                                        <div className="g-recaptcha" data-size="compact" data-sitekey={recaptchaSiteKey} data-action={recaptchaAction}></div>
                                    </div>
                                </div>
                            )} */}
                            <div
                                className={kcClsx("kcFormGroupClass")}
                            >
                                {recaptchaRequired && !recaptchaVisible && recaptchaAction !== undefined ? (
                                    <div id="kc-form-buttons" className={kcClsx("kcFormButtonsClass")}>
                                        <button
                                            className={clsx(
                                                kcClsx("kcButtonClass", "kcButtonPrimaryClass", "kcButtonBlockClass", "kcButtonLargeClass"),
                                                "g-recaptcha"
                                            )}
                                            data-sitekey={recaptchaSiteKey}
                                            data-callback={() => {
                                                (document.getElementById("kc-register-form") as HTMLFormElement).submit();
                                            }}
                                            data-action={recaptchaAction}
                                            type="submit"
                                        >
                                            {msg("doRegister")}
                                        </button>
                                    </div>
                                ) : (
                                    // <div id="kc-form-buttons" className={kcClsx("kcFormButtonsClass")}>
                                    //     <input
                                    //         disabled={!isFormSubmittable || (termsAcceptanceRequired && !areTermsAccepted)}
                                    //         className={kcClsx("kcButtonClass", "kcButtonPrimaryClass", "kcButtonBlockClass", "kcButtonLargeClass")}
                                    //         type="submit"
                                    //         value={msgStr("doRegister")}
                                    //     />
                                    // </div>
                                    <Button
                                        variant="contained"
                                        tabIndex={7}
                                        // disabled={isLoginButtonDisabled}
                                        className={kcClsx("kcButtonClass", "kcButtonPrimaryClass", "kcButtonBlockClass", "kcButtonLargeClass")}
                                        name="login"
                                        id="kc-login"
                                        type="submit"
                                        value={msgStr("doLogIn")}
                                        sx={{
                                            width: "476px",
                                            height: "52px",
                                            background: "linear-gradient(90deg, #AD1584 42%, #D40457 100%)",
                                            boxShadow: "0px 8px 40px rgba(0, 0, 0, 0.05)",
                                            borderRadius: "8px",
                                            textTransform: "none",
                                            fontSize: "16px",
                                            fontWeight: "600",
                                            color: "white",
                                            "&:hover": {
                                                background: "linear-gradient(90deg, #D40457 42%, #AD1584 100%)",
                                                boxShadow: "0px 8px 40px rgba(0, 0, 0, 0.15)", // Efeito de sombra no hover
                                            },
                                        }}
                                    >
                                        Entrar
                                    </Button>
                                )}

                                {/* <div id="kc-form-options" className={kcClsx("kcFormOptionsClass")}>
                                    <div className={kcClsx("kcFormOptionsWrapperClass")}>
                                        <span>
                                            <a href={url.loginUrl}>{msg("backToLogin")}</a>
                                        </span>
                                    </div>
                                </div> */}
                                <Box
                                    sx={{
                                        width: 478,
                                        textAlign: "center",
                                        color: "white",
                                        fontSize: 20,
                                        fontFamily: "Roboto",
                                        fontWeight: 600,
                                        wordWrap: "break-word",
                                        cursor: "pointer",
                                        transition: "0.3s",
                                        "&:hover": {
                                            color: "#ff4d4d", // Muda para vermelho no hover
                                        },
                                    }}
                                // onClick={onClick}
                                >
                                    Cancelar
                                </Box>

                            </div>
                        </form>
                    </Box>
                </Box>

            </div>
        </Template>
    );
}

function TermsAcceptance(props: {
    i18n: I18n;
    kcClsx: KcClsx;
    messagesPerField: Pick<KcContext["messagesPerField"], "existsError" | "get">;
    areTermsAccepted: boolean;
    onAreTermsAcceptedValueChange: (areTermsAccepted: boolean) => void;
}) {
    const { i18n, kcClsx, messagesPerField, areTermsAccepted, onAreTermsAcceptedValueChange } = props;

    const { msg } = i18n;

    return (
        <>
            <div className="form-group">
                <div className={kcClsx("kcInputWrapperClass")}>
                    {msg("termsTitle")}
                    <div id="kc-registration-terms-text">{msg("termsText")}</div>
                </div>
            </div>
            <div className="form-group">
                <div className={kcClsx("kcLabelWrapperClass")}>
                    <input
                        type="checkbox"
                        id="termsAccepted"
                        name="termsAccepted"
                        className={kcClsx("kcCheckboxInputClass")}
                        checked={areTermsAccepted}
                        onChange={e => onAreTermsAcceptedValueChange(e.target.checked)}
                        aria-invalid={messagesPerField.existsError("termsAccepted")}
                    />
                    <label htmlFor="termsAccepted" className={kcClsx("kcLabelClass")}>
                        {msg("acceptTerms")}
                    </label>
                </div>
                {messagesPerField.existsError("termsAccepted") && (
                    <div className={kcClsx("kcLabelWrapperClass")}>
                        <span
                            id="input-error-terms-accepted"
                            className={kcClsx("kcInputErrorMessageClass")}
                            aria-live="polite"
                            dangerouslySetInnerHTML={{
                                __html: kcSanitize(messagesPerField.get("termsAccepted"))
                            }}
                        />
                    </div>
                )}
            </div>
        </>
    );
}
