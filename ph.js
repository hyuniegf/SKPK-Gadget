let gadget = [];


let phone = {
    nama: "iPhone 13 Pro Max",
    rating: "5.0",
    stock: 10,
    kode: "BRG001",
    harga: 22000000,
    foto: "data:image/jpeg;base64,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"
}

gadget.push(phone);

phone = {
    nama: "Samsung A7 Lite",
    rating: "5.0",
    stock: 20,
    kode: "BRG002",
    harga: 50000000,
    foto: "http://p-id.ipricegroup.com/uploaded_6a60b762bd1ed9d7b15d6755dba3262f.jpg"
}

gadget.push(phone);

phone = {
    nama: "Oppo Reno 9",
    rating: "5.0",
    stock: 100,
    kode: "BRG003",
    harga: 7000000,
    foto: "https://jasystore.com/wp-content/uploads/2021/12/oppo-reno8-pro-5g-1-500x500.jpg"
}

gadget.push(phone);

phone = {
    nama: "Xiaomi Redmi Note 11",
    rating: "5.0",
    stock: 1000,
    kode: "BRG004",
    harga: 5000000,
    foto: "data:image/jpeg;base64,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"
}

gadget.push(phone);

phone = {
    nama: "Vivo",
    rating: "5.0",
    stock: 50,
    kode: "BRG005",
    harga: 6000000,
    foto: "https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1637636360680/89c1d8a35799f58ad663f54b4cf97671.png"
}

gadget.push(phone);

phone = {
    nama: "Redmi 9T",
    harga: 2000000,
    kode: "C7003",
    rating: 5,
    stock: 12,
    foto: "https://i01.appmifile.com/webfile/globalimg/id/cms/6F2DA7AE-6D81-297B-1E4E-140E86F02E92.jpg"
}

gadget.push(phone); 

 phone = {
    nama: "POCO M3",
    harga: 16000000,
    kode: "FZ263",
    rating: "4.3",
    stock: 14,
    foto: "https://statik.tempo.co/data/2021/01/22/id_995632/995632_720.jpg"
 }

gadget.push(phone); 

 phone = {
    nama: "Samsung J3",
    harga: 1000000,
    kode: "XD3125",
    rating: 1,
    stock: 11,
    foto: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-j3.jpg"
 }

gadget.push(phone); 

phone = {
    nama: "Xiaomi Note 10",
    harga: 2500000,
    kode: "NT102",
    rating: "2.5",
    stock: 11,
    foto: "https://i01.appmifile.com/webfile/globalimg/products/m/redmi-note-10/specs-header.png"
}
gadget.push(phone); 

phone = {
    nama: "Nokia",
    harga: 1000000,
    kode: "NKP265",
    rating: 2,
    stock: 12,
    foto: "https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2022/04/02/3943867999.png"
}
gadget.push(phone); 
console.log(gadget);

let nama = prompt("Masukkan Gadget Anda");
document.write(nama);

