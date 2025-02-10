import { useState } from "react";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { Button, Typography, Box, TextField, FormControl, InputAdornment, IconButton, Input, FormControlLabel, Checkbox, } from "@mui/material";
import React from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import logotipo from "../../../assets/logotipo.png";

export default function Login(props: PageProps<Extract<KcContext, { pageId: "login.ftl" }>, I18n>) {
  const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

  const { kcClsx } = getKcClsx({
    doUseDefaultCss,
    classes,
  });

  const { realm, url, usernameHidden, login, messagesPerField } = kcContext;

  const { msg, msgStr } = i18n;

  const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Template
      kcContext={kcContext}
      i18n={i18n}
      doUseDefaultCss={doUseDefaultCss}
      // children={undefined} 
      headerNode={undefined}
      classes={classes}
    >
      <div id="kc-form">
        <div
        // id="kc-form-wrapper"
        >
          <Box display="flex" height="100vh" bgcolor="#121212">
            {/* Lado esquerdo */}
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

                />
              </Box>
            </Box>


            <Box
              sx={{
                width: "1px",
                backgroundColor: "#454545",
                height: "100vh",
                position: "relative",
              }}
            >


              {/* Círculo inferior */}
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                  pointerEvents: "none", // Para garantir que não afete a interação
                }}
              >
                <div style={{ width: '363px', height: '363px', position: 'relative' }}>
                  <div
                    style={{
                      width: '363px',
                      height: '363px',
                      left: 0,
                      top: 0,
                      position: 'absolute',
                      background: 'rgba(69, 69, 69, 0.03)',
                      borderRadius: '9999px',
                      border: '1px #454545 solid',
                    }}
                  ></div>
                  <div
                    style={{
                      width: '63.27px',
                      height: '63.27px',
                      left: '150px',
                      top: '150px',
                      position: 'absolute',
                      background: '#202020',
                      borderRadius: '9999px',
                      border: '1px #454545 solid',
                    }}
                  ></div>
                </div>
              </Box>
            </Box>

            <Box flex={1} display="flex" flexDirection="column" justifyContent="center" alignItems="center" bgcolor="#181818" px={4}>
              <Typography variant="h5" fontWeight="bold" color="white">Junte-se para transformar a gestão de suas quadras!</Typography>

              <form
                id="kc-form-login"
                onSubmit={() => {
                  setIsLoginButtonDisabled(true);
                  return true;
                }}
                action={url.loginAction}
                method="post"
              >
                {!usernameHidden && (
                  <div className={kcClsx("kcFormGroupClass")}>
                    {/* <label htmlFor="username" className={kcClsx("kcLabelClass")}>
                      {!realm.loginWithEmailAllowed
                        ? msg("username")
                        : !realm.registrationEmailAsUsername
                          ? msg("usernameOrEmail")
                          : msg("email")}
                    </label> */}
                    {/* <input
                      tabIndex={2}
                      id="username"
                      className={kcClsx("kcInputClass")}
                      name="username"
                      defaultValue={login.username ?? ""}
                      type="text"
                      autoFocus
                      autoComplete="username"
                      aria-invalid={messagesPerField.existsError("username", "password")}
                    /> */}

                    <TextField
                      id="filled-basic"
                      label={!realm.loginWithEmailAllowed
                        ? msg("username")
                        : !realm.registrationEmailAsUsername
                          ? msg("usernameOrEmail")
                          : msg("email")}
                      variant="filled"
                      autoFocus
                      autoComplete="username"
                      name="username"
                      defaultValue={login.username ?? ""}
                      error={messagesPerField.existsError("username", "password")}
                      sx={{
                        marginBottom: "24px",
                        width: "476px",
                        height: "58px",
                        padding: "16px",
                        backgroundColor: "#2A2E45", // Cor de fundo
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", // Sombra
                        borderRadius: "8px", // Arredondamento
                        display: "flex", // Flexbox para alinhamento
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        "& .MuiInputLabel-root": {
                          color: "white", // Cor do label
                          fontSize: "16px",
                          // fontFamily: "Roboto",
                          fontWeight: 600,
                          lineHeight: "24px",
                          letterSpacing: "0.50px",
                          wordWrap: "break-word",
                        },
                        "& .MuiFilledInput-input": {
                          color: "white", // Cor do texto do input
                        },
                        "& .MuiFilledInput-underline:before": {
                          borderBottomColor: "transparent", // Remove a linha antes de ser clicado
                        },
                        "& .MuiFilledInput-underline:after": {
                          borderBottomColor: "transparent", // Remove a linha após ser clicado
                        },
                      }}

                    />


                  </div>
                )}

                <div className={kcClsx("kcFormGroupClass")}>

                  <FormControl
                    sx={{
                      width: "476px",
                      height: "58px",
                      padding: "16px",
                      backgroundColor: "#2A2E45",
                      borderRadius: "8px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                    }}
                    variant="standard"
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignSelf: "stretch",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      {/* Label */}
                      <Typography
                        sx={{
                          color: "white",
                          fontSize: "16px",
                          // fontFamily: "Roboto",
                          fontWeight: 600,
                          lineHeight: "24px",
                          letterSpacing: "0.50px",
                          wordWrap: "break-word",
                        }}
                      >
                        {msg("password")}
                      </Typography>

                      {/* Ícone do olho */}
                      <InputAdornment position="end">
                        <IconButton
                          aria-label={showPassword ? "hide the password" : "display the password"}
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          onMouseUp={handleMouseUpPassword}
                          sx={{
                            width: "20px",
                            height: "20px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            "& svg": {
                              color: "white",
                              fontSize: "20px",
                            },
                          }}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    </Box>

                    {/* Campo de entrada */}
                    <Input
                      tabIndex={3}
                      autoComplete="current-password"
                      name="password"
                      error={messagesPerField.existsError("username", "password")}
                      id="standard-adornment-password"
                      type={showPassword ? "text" : "password"}
                      disableUnderline
                      sx={{
                        color: "white",
                        fontSize: "16px",
                        // fontFamily: "Roboto",
                        fontWeight: 600,
                        backgroundColor: "transparent",
                        border: "none",
                        "&::placeholder": {
                          color: "rgba(255, 255, 255, 0.6)",
                        },
                      }}
                    />
                  </FormControl>

                  {/* {usernameHidden && messagesPerField.existsError("username", "password") && (
                    <span
                      id="input-error"
                      className={kcClsx("kcInputErrorMessageClass")}
                      aria-live="polite"
                      dangerouslySetInnerHTML={{
                        __html: kcSanitize(messagesPerField.getFirstError("username", "password")),
                      }}
                    />
                  )} */}
                </div>

                <div className={kcClsx("kcFormGroupClass", "kcFormSettingClass")}>
                  {/* <div id="kc-form-options">
                    {realm.rememberMe && !usernameHidden && (
                      <div className="checkbox">
                        <label>
                          <input
                            tabIndex={5}
                            id="rememberMe"
                            name="rememberMe"
                            type="checkbox"
                            defaultChecked={!!login.rememberMe}
                          />{" "}
                          {msg("rememberMe")}
                        </label>
                      </div>
                    )}
                  </div> */}
                  {/* <div id="kc-form-options"> */}
                  <FormControlLabel
                    control={
                      <Checkbox
                        id="rememberMe"
                        name="rememberMe"
                        tabIndex={5}
                        defaultChecked={!!login.rememberMe}
                        sx={{
                          width: 22,
                          height: 22,
                          backgroundColor: "#2A2E45",
                          boxShadow: "0px 8px 40px rgba(0, 0, 0, 0.05)",
                          borderRadius: "3px",
                          border: "2px solid white",
                          color: "white",
                          "&.Mui-checked": {
                            color: "white",
                          },
                          "&:hover": {
                            backgroundColor: "#D40457", // Mudando a cor de fundo no hover
                          },
                          "&:focus": {
                            outline: "2px solid #AD1584", // Destaque ao focar
                          },
                        }}
                      />
                    }
                    label={msg("rememberMe")}
                    sx={{
                      color: "white",
                      fontSize: "20px",
                      fontWeight: 400,
                    }}
                  />

                  {/* </div> */}


                  <Button
                    variant="contained"
                    tabIndex={7}
                    disabled={isLoginButtonDisabled}
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
                  {/* <div className={kcClsx("kcFormOptionsWrapperClass")}>
                    {realm.resetPasswordAllowed && (
                      <span>
                        <a tabIndex={6} href={url.loginResetCredentialsUrl}>
                          {msg("doForgotPassword")}
                        </a>
                      </span>
                    )}
                  </div> */}
                  <div style={{ textAlign: "center" }}>
                    <a
                      tabIndex={6}
                      href={url.loginResetCredentialsUrl}
                      style={{
                        color: "white",
                        fontSize: "20px",
                        // fontFamily: "Montserrat",
                        fontWeight: 500,
                        textDecoration: "none",
                      }}
                    >
                      {msg("doForgotPassword")}
                    </a>

                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "20px",
                        // fontFamily: "Roboto",
                        fontWeight: 600,
                      }}
                    >
                      Redefinir Senha
                    </Typography>
                  </div>

                </div>



              </form>
            </Box>
          </Box>
        </div>
      </div>
    </Template>
  );
}

// function PasswordWrapper(props: { kcClsx: KcClsx; i18n: I18n; passwordInputId: string; children: JSX.Element }) {
//   const { kcClsx, i18n, passwordInputId, children } = props;

//   const { msgStr } = i18n;

//   const { isPasswordRevealed, toggleIsPasswordRevealed } = useIsPasswordRevealed({ passwordInputId });

//   return (
//     <div className={kcClsx("kcInputGroup")}>
//       {children}
//       <button
//         type="button"
//         className={kcClsx("kcFormPasswordVisibilityButtonClass")}
//         aria-label={msgStr(isPasswordRevealed ? "hidePassword" : "showPassword")}
//         aria-controls={passwordInputId}
//         onClick={toggleIsPasswordRevealed}
//       >
//         <i className={kcClsx(isPasswordRevealed ? "kcFormPasswordVisibilityIconHide" : "kcFormPasswordVisibilityIconShow")} aria-hidden />
//       </button>
//     </div>
//   );
// }
