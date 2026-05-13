type Payment =
  | { method: "cash"; amount: number }
  | { method: "card"; amount: number; cardNumber: string }
  | { method: "ewallet"; amount: number; provider: string }
  | { method: "qris"; amount: number; provider: string };

function badCodes(p: Payment): string {
  switch (p.method) {
    case "cash":
      return `Bayar cash: Rp${p.amount}`;
    case "card":
      return `Bayar card ${p.cardNumber}: Rp${p.amount}`;
  }

  return "method tidak kenal";
}

console.log(badCodes({ method: "cash", amount: 10000 }));
console.log(badCodes({ method: "card", amount: 20000, cardNumber: "xyz1234" }));
console.log(badCodes({ method: "ewallet", amount: 40000, provider: "Dana" }));

console.log();

function cleanCodes(p: Payment): string {
  switch (p.method) {
    case "cash":
      return `Bayar cash: Rp${p.amount}`;
    case "card":
      return `Bayar card ${p.cardNumber}: Rp${p.amount}`;
    case "ewallet":
      return `Bayar menggunakan ewallet ${p.amount} use ${p.provider}`;
    default: {
      const _exhasutive: never = p;
      throw new Error(
        "Method pembayaran tidak dikenal: " + JSON.stringify(_exhasutive),
      );
    }
  }
}

console.log(cleanCodes({ method: "cash", amount: 10000 }));
console.log(
  cleanCodes({ method: "card", amount: 20000, cardNumber: "xyz1234" }),
);
console.log(cleanCodes({ method: "ewallet", amount: 40000, provider: "Dana" }));

function handleStatus(p: Payment) {
  if (p.method === "card") {
    return `Bayar card ${p.cardNumber}: Rp${p.amount}`;
  } else if (p.method === "cash") {
    return `Bayar cash: Rp${p.amount}`;
  } else {
  }
}
