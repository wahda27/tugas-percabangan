var pendapatan = 300000;
var komisi,jasa,total;

if (pendapatan >= 0 && pendapatan <= 200000){
    jasa = 10000;
    komisi = 0.1* pendapatan;
}
else if ( pendapatan <= 500000)
{
    jasa = 200000;
    komisi = 0.15* pendapatan;
}
else
{
    jasa = 300000;
    komisi = 0.2;
 }
 {
    total = komisi + jasa;
    console.log(jasa);
    console.log(komisi);
    console.log(total);
}