let toplamSans = 0;
let i = 0;
const sansHesapla = () => {
    const sans = rando(1, 100, "float");
    toplamSans += sans;
    i++;
    const ortalamaSans = toplamSans / i;
    document.getElementById("denemeSayisiDeger").innerText = i;
    document.getElementById("sansAlaniDeger").innerText = sans;
    document.getElementById("ortalamaSansAlaniDeger").innerText = ortalamaSans;

}