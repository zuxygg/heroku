let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Axis
│ • 0838-3444-1926
│ • Telkomsel
│ • 0812-8586-6502
│ • Tri
│ • 0895-2551-8325
╰────

╭─「 Donasi • Bank Virtual 」
│ • GOPAY
│ • 0895-2551-8325
│ • DANA
│ • 0895-2551-8325
╰────
TERIMAKASIH YANG UDAH DONASI 🗿✌
“Setiap orang berada di bawah naungan sedekahnya (pada hari kiamat) hingga diputuskan di antara manusia atau ia berkata: “Ditetapkan hukuman di antara manusia.” Yazid berkata: “Abul Khair tidak pernah melewati satu haripun melainkan ia bersedekah padanya dengan sesuatu, walaupun hanya sepotong kue atau bawang merah atau seperti ini.” (HR. Al-Baihqi, Al-Hakim dan Ibnu Khuzaimah).
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
