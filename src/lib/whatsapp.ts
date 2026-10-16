export const WHATSAPP_NUMBER = "5511963410135";
export const WHATSAPP_DISPLAY = "+55 11 96341-0135";

export const waLink = (message?: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

export const MSG = {
  geral: "Olá! Vim pelo site da BOSS DEV e gostaria de solicitar um orçamento para criar um site para minha empresa.",
  basico: "Olá! Vim pelo site da BOSS DEV e tenho interesse no Site Básico de R$ 397,00. Gostaria de conversar sobre meu projeto.",
  profissional: "Olá! Vim pelo site da BOSS DEV e tenho interesse no Site Profissional de R$ 797,00. Gostaria de conversar sobre meu projeto.",
  premium: "Olá! Vim pelo site da BOSS DEV e tenho interesse no Site Premium de R$ 1.449,90, incluindo domínio .com.br por um ano. Gostaria de conversar sobre meu projeto.",
  comecar: "Olá! Conheci a BOSS DEV pelo site e gostaria de começar meu projeto. Pode me ajudar a escolher o melhor plano?",
};
