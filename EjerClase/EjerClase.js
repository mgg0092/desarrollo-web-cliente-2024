let brutos = [1000, 1300, 1500, 1700, 2000, 2200, 2800, 3000];
let netos = [];
let fiscalAlto = [];

for (let i = 0; i < brutos.length; i++) {
  console.log(brutos[i]);
  if (brutos[i] > 1935) fiscalAlto = brutos[i];
  netos = (brutos[i] * 15) / 100;
}
