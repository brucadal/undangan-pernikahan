// alert('Hey')
// prompt('Masukkan Usia Anda')

// var  usia = 30
// const x = 1
// let y = 2

// let usia = 30
// usia = 35
// console.log("Hello World usia kamu adalah" + usia)
// alert(usia)

// let usia = prompt('Berapa Usia Kamu?')
// alert('Usia Anda Adalah ' + usia)

let nama = 'Brucad Al Magribi'
let usia = 30 // tipe data integer
let tinggiBadan = 160.5 // tipe data double float
let beratBadan  
let pacar = 3

beratBadan = 60 

if(pacar  === null){
    pacar = 'belum punya'
} else {
    pacar = 'sudah punya'
}

// switch (pacar) {
//     case 1:
//         pacar = 'punya 1 aja'
//     break 
//     case 2:
//         pacar = 'punya 2 aja, aku cukup playboy'
//         break 
//         default:
//             pacar = 'belum punya pacar'
//             break
// }

let saldoAwal = 50000
let saldoTambahan = 80000
const saldoAkhir  = saldoAwal + saldoTambahan


alert(
    `Nama saya ${nama} usia saya ${usia} tinggi badan saya ${tinggiBadan} cm berat badan saya ${beratBadan} kg dan pacar saya ${pacar}`,

)

alert(`saldo awal saya sebesar Rp.${saldoAwal} & saldo tambahan yang akan saya miliki sebesar Rp.${saldoTambahan} jadi total saldo yang saya miliki adalah sebanyak Rp.${saldoAkhir}`)
