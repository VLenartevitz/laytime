import type { JSX } from "keycloakify/tools/JSX";
import type { LazyOrNot } from "keycloakify/tools/LazyOrNot";
import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import type { UserProfileFormFieldsProps } from "keycloakify/login/UserProfileFormFieldsProps";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { Box, Button, Typography, TextField, Input } from "@mui/material";
import logotipo from "../../../assets/logotipo.png";
import { useState } from "react";

type RegisterProps = PageProps<
  Extract<KcContext, { pageId: "register.ftl" }>,
  I18n
> & {
  UserProfileFormFields: LazyOrNot<
    (props: UserProfileFormFieldsProps) => JSX.Element
  >;
  doMakeUserConfirmPassword: boolean;
};

export default function Register(props: RegisterProps) {
  const [error, setError] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 5) {
      setError("Você pode enviar no máximo 5 imagens.");
      e.target.value = ""; // Limita os arquivos para no máximo 5
    } else {
      setError("");
    }
  };
  const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;
  getKcClsx({
    doUseDefaultCss,
    classes,
  });

  const { messageHeader, url, messagesPerField } = kcContext;
  const { msg, advancedMsg } = i18n;

  return (
    <Template
      kcContext={kcContext}
      i18n={i18n}
      doUseDefaultCss={doUseDefaultCss}
      classes={classes}
      headerNode={
        messageHeader !== undefined
          ? advancedMsg(messageHeader)
          : msg("registerTitle")
      }
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
              flexDirection: "column-reverse",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                maxWidth: 552,
              }}
            >
              <Typography variant="h2" fontWeight={900} sx={{ fontSize: 62 }}>
                Bem-vindo ao Playtime!
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: 24,
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
              sx={{ top: 0, left: 0, display: "flex", flexDirection: "column" }}
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
              mb={3}
              textAlign="center"
            >
              Seja bem-vindo, Crie abaixo sua Arena!
            </Typography>

            <form
              id="kc-register-form"
              action={url.registrationAction}
              method="post"
            >
              {/* Nome da Quadra */}
              <TextField
                required
                label="Nome da Quadra"
                variant="filled"
                fullWidth
                name="courtName"
                sx={{
                  mb: 3,
                  backgroundColor: "#2A2E45",
                  borderRadius: "8px",
                  "& .MuiInputLabel-root": {
                    color: "white",
                    fontSize: 16,
                    fontWeight: 600,
                  },
                  "& .MuiFilledInput-root": { color: "white" },
                  "& .MuiFilledInput-underline:before, & .MuiFilledInput-underline:after":
                    {
                      borderBottomColor: "transparent",
                    },
                }}
              />

              {/* Tipo da Quadra */}
              <TextField
                required
                label="Tipo da Quadra"
                variant="filled"
                fullWidth
                name="courtType"
                sx={{
                  mb: 3,
                  backgroundColor: "#2A2E45",
                  borderRadius: "8px",
                  "& .MuiInputLabel-root": {
                    color: "white",
                    fontSize: 16,
                    fontWeight: 600,
                  },
                  "& .MuiFilledInput-root": { color: "white" },
                  "& .MuiFilledInput-underline:before, & .MuiFilledInput-underline:after":
                    {
                      borderBottomColor: "transparent",
                    },
                }}
              />

              {/* Upload das Imagens */}
              <Button
                variant="contained"
                component="label"
                fullWidth
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#2A2E45",
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "white",
                  textAlign: "center",
                  py: 2,
                  mb: 3,
                  "&:hover": { backgroundColor: "#3C4456" },
                }}
              >
                Upload das Imagens
                <Input
                  type="file"
                  hidden
                  name="courtImages"
                  inputProps={{ multiple: true }}
                  onChange={handleFileChange}
                />
              </Button>

              {error && (
                <Typography color="error" textAlign="center" mb={2}>
                  {error}
                </Typography>
              )}

              {/* Botão Prosseguir */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  height: 50,
                  background:
                    "linear-gradient(90deg, #AD1584 42%, #D40457 100%)",
                  color: "white",
                  fontSize: "18px",
                  fontWeight: "bold",
                  borderRadius: "8px",
                  cursor: "pointer",
                  transition: "0.3s",
                  "&:hover": {
                    background:
                      "linear-gradient(90deg, #D40457 42%, #AD1584 100%)",
                  },
                }}
              >
                Prosseguir
              </Button>

              {/* Cancelar */}
              <Box display="flex" justifyContent="center" mt={2}>
                <Button
                  href={url.loginUrl}
                  sx={{ color: "white", fontSize: "18px", fontWeight: "bold" }}
                >
                  Cancelar
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </div>
    </Template>
  );
}
