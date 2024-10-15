// Diketahui sebuah data user seperti berikut ini : 
const user = [
    {
        id: 1,
        username: 'JohnDoe',
        email: 'johndoe@gmail.com',
        hoby: 'coding'
    },
    {
        id: 2,
        username: 'ExKoi',
        email: 'exkoi01@gmail.com',
        hoby: 'gaming'
    }
]

// 1. Buatlah function expression yang bertugas untuk menambahkan data diatas

// code here

const adduser = (userbaru) => {
    user.push(userbaru)
    return user;
}
const userbaru = 
    {
        id: 3,
        username: 'testing',
        email: 'test@gmail.com',
        hoby: 'reading'

    }
    console.log(user)


// example result : 
// [
//     {
//         id: 1,
//         username: 'JohnDoe',
//         email: 'johndoe@gmail.com',
//         hoby: 'coding'
//     },
//     {
//         id: 2,
//         username: 'ExKoi',
//         email: 'exkoi01@gmail.com',
//         hoby: 'gaming'
//     },
//     {
//         id: 3,
//         username: 'test',
//         email: 'test@gmail.com',
//         hoby: 'reading'
//     }
// ]

// 2. Tambahkan properti role dengan value 'user' pada objek dari data array diatas
// clue: Gunakanlah method map()

// code here
// const  map = () => {
//      user.map(user => user.role = 'user');
// }
// console.log(map(user));

// example result : 
// [
//     {
//       id: 1,
//       username: 'JohnDoe',
//       email: 'johndoe@gmail.com',
//       hoby: 'coding',
//       role: 'user'
//     },
//     {
//       id: 2,
//       username: 'ExKoi',
//       email: 'exkoi01@gmail.com',
//       hoby: 'gaming',
//       role: 'user'
//     }
//   ]

// 3, Diketahui sebuah segitiga memiliku alas 4 dan tinggi 3, buatlah function yang bertugas untuk menghitung luas segitiga
// note Rumus Luas Segetiga = 1/2 X alas X tinggi atau (alas X tinggi) / 2
  let eee =function name(a, b ) {
    let alas = a;
    let tinggi = b;
    segetiga = a * b / 2
        return segetiga;
    }
  console.log(eee(4, 3));
    

// 4. Tukar nilai data dari variabel yang tersedia
function test() {
    let a = 1
    let b = 2

    console.log('a awal = ', a);
    console.log('b awal = ', b);

    // code here

    // console.log('a final = ', a);
    // console.log('b final = ', b);
    
    console.log('a final =', b);
    console.log('a final =', a);
}
test()


// expetation result : 
// 'a awal = ', 1
// 'b awal = ', 2

// 'a final = ', 2
// 'b final = ', 1

// 5. Buatlah fungsi untuk melakukan pengecekan terhadap sebuah string bernilai palindrome atau tidak.
// note: Palindrome adalah kata, frasa, angka, atau urutan karakter yang dapat dibaca sama dari depan maupun belakang. Contoh yang paling sederhana adalah kata "malam" atau "level"

// code here

// example result : true jika palindrome | false jika tidak palindrome