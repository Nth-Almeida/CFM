let tmp: string;

if (typeof window !== "undefined" && typeof window.location !== "undefined") {
  switch (window.location.hostname) {
    case "cheese.formice.com":
    case "beta.formice.com":
      tmp = window.location.hostname;
      break;

    case "cfmtest.tk":
      tmp = window.location.host;
      break;

    default:
      tmp = "cfmtest.tk";
  }
} else {
  // Defina um valor padrão para o lado do servidor
  tmp = "cfmtest.tk";
}

export const DOMAIN = tmp;

export const decimal = (x: number): string => {
  const slices: string[] = [];
  do {
    slices.unshift((x % 1000).toString(10));
    x = Math.floor(x / 1000);
  } while (x > 0);

  for (let index = 1; index < slices.length; index++) {
    const padded = "00" + slices[index];
    slices[index] = padded.substr(-3);
  }

  return slices.join(",");
};
