import { useState } from "react";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import {
  Button,
  Typography,
  Box,
  TextField,
  FormControl,
  InputAdornment,
  IconButton,
  Input,
  Checkbox,
  Link,
} from "@mui/material";
import React from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import logotipo from "../../../assets/logotipo.png";

export default function Login(
  props: PageProps<Extract<KcContext, { pageId: "login.ftl" }>, I18n>
) {
  const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

  getKcClsx({
    doUseDefaultCss,
    classes,
  });

  const { url, usernameHidden, login, messagesPerField } = kcContext;

  const { msg } = i18n;

  const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  // const handleMouseDownPassword = (
  //   event: React.MouseEvent<HTMLButtonElement>
  // ) => {
  //   event.preventDefault();
  // };

  // const handleMouseUpPassword = (
  //   event: React.MouseEvent<HTMLButtonElement>
  // ) => {
  //   event.preventDefault();
  // };

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
        <Box display="flex" height="100vh" bgcolor="#121212">
          <Box
            sx={{
              flex: 1,
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column-reverse",
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
              <Typography variant="h2" fontWeight={900} sx={{ fontSize: 62 }}>
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
                Gerencie suas quadras de forma eficiente <br />e atraia novos
                usuários com facilidade.
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
              <img src={logotipo} alt="Imagem substituindo os Box" />
            </Box>
          </Box>

          <Box
            sx={{
              width: "1px",
              backgroundColor: "#454545",
              height: "100vh",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)", // Centraliza a linha no meio da tela
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "70%", // Movi um pouco mais para baixo
                left: "50%",
                transform: "translate(-50%, -50%)", // Centraliza no meio da tela
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                pointerEvents: "none",
              }}
            >
              <Box
                sx={{
                  width: 363,
                  height: 363,
                  position: "relative",
                }}
              >
                {/* Círculo grande */}
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    background: "rgba(69, 69, 69, 0.03)",
                    borderRadius: "50%",
                    border: "1px solid #454545",
                  }}
                />
                {/* Círculo pequeno */}
                <Box
                  sx={{
                    width: 63.27,
                    height: 63.27,
                    position: "absolute",
                    background: "#202020",
                    borderRadius: "50%",
                    border: "1px solid #454545",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)", // Centraliza dentro do círculo grande
                  }}
                />
              </Box>
            </Box>
          </Box>

          <Box
            flex={1}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            bgcolor="#181818"
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              color="white"
              sx={{ marginBottom: 4, textAlign: "center" }}
            >
              Junte-se para transformar a gestão de suas quadras!
            </Typography>

            <form
              id="kc-form-login"
              onSubmit={() => {
                setIsLoginButtonDisabled(true);
                return true;
              }}
              action={url.registrationUrl}
              method="post"
            >
              {!usernameHidden && (
                <Box sx={{ marginBottom: 4 }}>
                  <TextField
                    id="filled-basic"
                    label={msg("email")}
                    variant="filled"
                    autoFocus
                    autoComplete="email"
                    name="email"
                    defaultValue={login.username ?? ""}
                    error={messagesPerField.existsError("email")}
                    fullWidth
                    sx={{
                      width: "476px",
                      backgroundColor: "#2A2E45",
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                      borderRadius: "8px",
                      "& .MuiInputLabel-root": {
                        color: "white",
                        fontSize: 16,
                        fontWeight: 600,
                      },
                      "& .MuiFilledInput-input": {
                        color: "white",
                      },
                      "& .MuiFilledInput-underline:before, & .MuiFilledInput-underline:after":
                        {
                          borderBottomColor: "transparent",
                        },
                    }}
                  />
                </Box>
              )}

              <FormControl
                sx={{
                  width: "476px",
                  padding: "8px",
                  backgroundColor: "#2A2E45",
                  borderRadius: "8px",
                  marginBottom: 4,
                }}
                variant="standard"
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography
                    sx={{ color: "white", fonztSize: 16, fontWeight: 600 }}
                  >
                    {msg("password")}
                  </Typography>

                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword
                          ? "hide the password"
                          : "display the password"
                      }
                      onClick={handleClickShowPassword}
                      sx={{
                        color: "white",
                        "& svg": {
                          fontSize: 20,
                        },
                      }}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                </Box>

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
                    fontSize: 16,
                    fontWeight: 600,
                    backgroundColor: "transparent",
                    "&::placeholder": {
                      color: "rgba(255, 255, 255, 0.6)",
                    },
                  }}
                />
              </FormControl>

              <Box display="flex" alignItems="center" marginBottom={4}>
                <Checkbox
                  id="rememberMe"
                  name="rememberMe"
                  tabIndex={5}
                  defaultChecked={!!login.rememberMe}
                  sx={{
                    width: 24,
                    height: 24,
                    backgroundColor: "#2A2E45",
                    borderRadius: "4px",
                    border: "2px solid white",
                    color: "white",
                    "&.Mui-checked": {
                      backgroundColor: "#D40457",
                      borderColor: "#D40457",
                    },
                    "&:hover": {
                      backgroundColor: "#D40457",
                    },
                  }}
                />
                <Typography color="white" fontSize={16} fontWeight={500}>
                  Quero Ficar conectado
                </Typography>
              </Box>

              <Button
                variant="contained"
                tabIndex={7}
                disabled={isLoginButtonDisabled}
                name="login"
                id="kc-login"
                type="submit"
                fullWidth
                sx={{
                  width: "476px",
                  height: "52px",
                  background:
                    "linear-gradient(90deg, #AD1584 42%, #D40457 100%)",
                  borderRadius: "8px",
                  textTransform: "none",
                  fontSize: 16,
                  fontWeight: 600,
                  color: "white",
                  "&:hover": {
                    background:
                      "linear-gradient(90deg, #D40457 42%, #AD1584 100%)",
                  },
                  marginBottom: 4,
                }}
              >
                Entrar
              </Button>

              <Typography
                color="white"
                fontSize={20}
                fontWeight={600}
                textAlign="center"
              >
                Já tem uma conta?{" "}
                <Link
                  href={url.registrationUrl}
                  sx={{ color: "#AD1584", textDecoration: "underline" }}
                >
                  Cadastre-se aqui
                </Link>
              </Typography>

              <Box textAlign="center" mt={2}>
                <Link
                  tabIndex={6}
                  href={url.loginResetCredentialsUrl}
                  sx={{
                    color: "white",
                    fontSize: 20,
                    fontWeight: 500,
                    textDecoration: "none",
                  }}
                >
                  Esqueceu a senha?
                </Link>
              </Box>
            </form>
          </Box>
        </Box>
      </div>
    </Template>
  );
}
