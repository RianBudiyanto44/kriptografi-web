const caesarButton = document.querySelector('#btnCaesar');
const scytaleButton = document.querySelector('#btnScytale');
const railButton = document.querySelector('#btnRail');
const superButton = document.querySelector('#btnSuper');
var buttonEnkripsi = true;

caesarButton.addEventListener("click", function() {
    createSuperCard("Caesar Cipher");
});
scytaleButton.addEventListener("click", function() {
    createSuperCard("Scytale Cipher");
});
railButton.addEventListener("click", function() {
    createSuperCard("Rail Fence Cipher");
});
superButton.addEventListener("click", function() {
    createSuperCard("Super Cipher");
});





function createSuperCard(titleHeader) {

    

    const containerGenerator = document.querySelector('#hasil-container')
    buttonEnkripsi = true;

    if(document.querySelector('#judul') != null) {
        document.querySelector('#judul').textContent = titleHeader;
        document.querySelector('#teksArea1').value = "";
        document.querySelector('#teksArea2').value = "";
        document.querySelector('#kunci').value = "";
    } else {

        // Create the title
        var title = document.createElement('h2');
        title.className = 'mt-2 ms-2';
        title.textContent = titleHeader;
        title.id = "judul";
        containerGenerator.appendChild(title);
        // Create the row
        var row = document.createElement('div');
        row.className = 'row mt-2';
        containerGenerator.appendChild(row);
    
        // Create the first column
        var col1 = document.createElement('div');
        col1.className = 'col-sm-5';
        row.appendChild(col1);
    
        // Create the first card
        var card1 = createCard('Plain Text', 'Teks1', 'teksArea1', false);
        col1.appendChild(card1);
    
        // Create the second column
        var col2 = document.createElement('div');
        col2.className = 'col-sm-2 p-0';
        row.appendChild(col2);
    
        // Create the second card
        var card2 = document.createElement('div');
        card2.className = 'card-body text-bg-secondary';
        col2.appendChild(card2);
    
        // Create the button group
        var btnGroup = document.createElement('div');
        btnGroup.className = 'btn-group w-100';
        card2.appendChild(btnGroup);
    
        // Create buttons
        var btn1 = createButton('Enkripsi', 'btn btn-primary', 'btn_enkripsi');
        var btn2 = createButton('Dekripsi', 'btn btn-primary', 'btn_dekripsi');
        btnGroup.appendChild(btn1);
        btnGroup.appendChild(btn2);
    
    
        // Create Kunci input
        var kunciInput = createInput('number', 'form-control', 'kunci');
        card2.appendChild(createText('Kunci'));
        card2.appendChild(kunciInput);
    
        // Create the Generate button
        var generateBtn = createButton('Generate', 'btn btn-warning p-2 w-100', 'btn_generate');
        col2.appendChild(generateBtn);
    
        // Create the third column
        var col3 = document.createElement('div');
        col3.className = 'col-sm-5';
        row.appendChild(col3);
    
        // Create the third card
        var card3 = createCard('Chipper Text', 'Teks2', 'teksArea2', true);
        col3.appendChild(card3);
    
    }
    const btnEnkripsi = document.querySelector('#btn_enkripsi');
    const btnDekripsi = document.querySelector('#btn_dekripsi');
    const btnGenerate = document.querySelector('#btn_generate');
    const teks1 = document.querySelector('#Teks1');
    const teks2 = document.querySelector('#Teks2');
    const teksArea1 = document.querySelector('#teksArea1');
    const teksArea2 = document.querySelector('#teksArea2');
    const kunci = document.querySelector('#kunci');


    btnEnkripsi.addEventListener("click", function() {
        buttonEnkripsi = true;
        teks1.textContent = "Plain Text";
        teks2.textContent = "Chipper Text";
        teksArea2.value = "";
    });

    btnDekripsi.addEventListener("click", function() {
        buttonEnkripsi = false;
        teks1.textContent = "Cipher Text";
        teks2.textContent = "Plain Text";
        teksArea2.value = "";
    });


    btnGenerate.addEventListener("click", function() {
        
        if(titleHeader == "Caesar Cipher") {
            if(buttonEnkripsi == true) {
                
                teksArea2.value = caesarCipherEncrypt(teksArea1.value, kunci.value);
            } else {
                teksArea2.value = caesarCipherDecrypt(teksArea1.value, kunci.value);
            }
        } else if(titleHeader == "Scytale Cipher") {
            if(buttonEnkripsi == true) {
                // console.log(teksArea1.value);
                teksArea2.value = scytaleCipherEncrypt(teksArea1.value, kunci.value);
            } else {
                teksArea2.value = scytaleCipherDecrypt(teksArea1.value, kunci.value);
            }
        } else if(titleHeader == "Rail Fence Cipher") {
            if(buttonEnkripsi == true) {
                // console.log(teksArea1.value);
                teksArea2.value = railFenceEncrypt(teksArea1.value, kunci.value);
            } else {
                teksArea2.value = railFenceDecrypt(teksArea1.value, kunci.value);
            }
        } else if(titleHeader == "Super Cipher") {
            if(buttonEnkripsi == true) {
                // console.log(teksArea1.value);
                teksArea2.value = superEncrypt(teksArea1.value, kunci.value);
            } else {
                teksArea2.value = superDecrypt(teksArea1.value, kunci.value);
            }
        }
    });



}

function createCard(cardTitle, id, idTextArea, isDisabled) {
    var card = document.createElement('div');
        card.className = 'card h-100';

    var cardBody = document.createElement('div');
    cardBody.className = 'card-body d-flex flex-column';
    card.appendChild(cardBody);

    var cardTitleElement = document.createElement('h5');
    cardTitleElement.className = 'card-title text-center';
    cardTitleElement.id = id;
    cardTitleElement.textContent = cardTitle;
    cardBody.appendChild(cardTitleElement);

    var textarea = document.createElement('textarea');
    textarea.rows = '4';
    textarea.cols = '25';
    textarea.id = idTextArea;
    if (isDisabled) {
        textarea.disabled = true;
    }
    cardBody.appendChild(textarea);

    return card;
}

// Function to create a button
function createButton(text, className, id) {
    var button = document.createElement('button');
    button.type = 'button';
    button.className = className;
    button.textContent = text;
    button.id = id;
    return button;
}

// Function to create an input
function createInput(type, className, id) {
    var input = document.createElement('input');
    input.type = type;
    input.className = className;
    input.id = id;
    return input;
}

// Function to create a text element
function createText(text) {
    var textElement = document.createElement('p');
    textElement.className = 'text-center';
    textElement.textContent = text;
    return textElement;
}


function caesarCipherEncrypt(s, k) {
    let result = '';
    
    for (let i = 0; i < s.length; i++) {
        let charCode = s[i].charCodeAt();
        if (charCode > 96 && charCode < 123) {
            charCode += k % 26
            if (charCode > 122) {
            charCode = (charCode - 122) + 96;
            } else if (charCode < 97) {
            charCode = (charCode - 97) + 123;
            }
        }
    
        if (charCode > 64 && charCode < 91) {
            charCode += k % 26
            if (charCode > 90) {
                charCode = (charCode - 90) + 64;
            } else if (charCode < 65) {
                charCode = (charCode - 65) + 91;
            }
        }
        result += String.fromCharCode(charCode);
        }
        return result
}

// Fungsi untuk mendekripsi teks menggunakan Caesar Cipher
function caesarCipherDecrypt(encryptedText, shift) {
    return caesarCipherEncrypt(encryptedText, -shift); 
}


function scytaleCipherEncrypt(text, numCylinders2) {
    //mengubah kunci ke integer
    var numCylinders = parseInt(numCylinders2);
    // Menghapus spasi dalam teks
    text = text.replace(/\s+/g, '');

    //menghitung jumlah huruf
    var textLength = text.length;

    //menghitung baris matrix yang akan dibuat dengan cara jumlah huruf : kunci
    //dengan pembulatan atas
    const numRows = Math.ceil(textLength / numCylinders);

    //membuat matrix
    const matrix = new Array(numRows);

    //menghitung jumlah huruf yang kurang agar memenuhi matrix
    var tambah;
    if(numCylinders * numRows != textLength) {
        tambah = numCylinders * numRows - textLength;
    }

    //menambahkan "x" ke akhir plain text 
    for (var i = 0; i<tambah; i++) {
        text = text + "x";
    }
    textLength = text.length;
    //console.log(text);

    //membuat matrix
    for (let i = 0; i < numRows; i++) {
        matrix[i] = new Array(numCylinders);
    }

    //mengisi matrix dengan plaintext
    let index = 0;
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCylinders; j++) {
            if (index < textLength) {
                matrix[i][j] = text[index++];
            } else {
                matrix[i][j] = '';
            }
        }
    }

    //enkripsi dengan cara membaca mantrix dari atas ke bawah
    let encryptedText = '';
    for (let j = 0; j < numCylinders; j++) {
        for (let i = 0; i < numRows; i++) {
            encryptedText += matrix[i][j];
        }
    }

    return encryptedText;
}

// Fungsi untuk mendekripsi teks menggunakan Scytale Cipher
function scytaleCipherDecrypt(encryptedText, numCylinders2) {
    //mengubah kunci ke integer
    var numCylinders = parseInt(numCylinders2);

    //menghitung panjang text
    var textLength = encryptedText.length;

    //menghitung baris matrix yang akan dibuat dengan cara jumlah huruf : kunci
    //dengan pembulatan atas
    const numRows = Math.ceil(textLength / numCylinders);

    //membuat matrix
    const matrix = new Array(numRows);

    //jika teks tidak dapat memenuhi matrix, maka akan ditambahkan spasi
    //dengan kelipatan tertentu
    var tambah, lompat;
    if(numCylinders * numRows != textLength) {
        lompat = Math.floor(textLength/numCylinders)
        tambah = numCylinders * numRows - textLength;
        for (var i = textLength; i>=0; i=i-lompat) {
            if(tambah != 0) {
                encryptedText = encryptedText.slice(0, i) + " " + encryptedText.slice(i);
                tambah--;
            }
        }
        // console.log(encryptedText);
        textLength = encryptedText.length;
    }

    //var hapus = tambah;

    //membuat matrix
    for (let i = 0; i < numRows; i++) {
        matrix[i] = new Array(numCylinders);
    }

    //mengisi matrix dengan cipher text
    let index = 0;
    for (let j = 0; j < numCylinders; j++) {
        for (let i = 0; i < numRows; i++) {
            if (index < textLength) {
                matrix[i][j] = encryptedText[index++];
            } else {
                matrix[i][j] = '';
            }
        }
    }

    //dekripsi dengan cara membaca mantrix dari atas ke bawah
    let decryptedText = '';
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCylinders; j++) {
            decryptedText += matrix[i][j];
        }
    }

    // console.log(textLength-hapus)
    // decryptedText = decryptedText.slice(0, textLength-hapus);
    return decryptedText;
}

function railFenceEncrypt(plaintext, key2) {
    plaintext=plaintext.replace(/\s/g, '');
    var key = parseInt(key2); //jumlah baris

    if (key <= 1) {
      return plaintext; // Tidak ada perubahan jika key kurang dari atau sama dengan 1
    }

    const numRows = key;
    const textLength = plaintext.length;
    const railMatrix = new Array(numRows).fill(''); // Membuat matriks kosong untuk menyimpan karakter

    let row = 0;
    let direction = -1; // Awalnya, bergerak ke atas

    for (let i = 0; i < textLength; i++) {
        railMatrix[row] += plaintext[i]; // Menambahkan karakter ke baris yang sesuai
        if (row === 0 || row === numRows - 1) { // Jika kita berada di baris terluar (0 atau numRows - 1), balik arah
            direction *= -1;
        }
        row += direction;  // Memindahkan ke baris berikutnya sesuai arah pergerakan
    }
    const ciphertext = railMatrix.join(''); // Menggabungkan karakter-karakter untuk mendapatkan teks terenkripsi
    return ciphertext;
}

function railFenceDecrypt(cipher, key2) {
    var key = parseInt(key2);
    let rail = new Array(key).fill().map(() => new Array(cipher.length).fill('\n'));
    
    let dir_down = false;
    let row = 0, col = 0;
    
    for (let i = 0; i < cipher.length; i++) {
        if (row == 0) dir_down = true; // Saat di baris teratas, perubahan arah ke bawah
        if (row == key - 1) dir_down = false;
        rail[row][col++] = '*';

        dir_down ? row++ : row--; // Pindah ke baris berikutnya sesuai arah
    }

    let index = 0;

    // Mengisi Matriks dengan Pesan Terenkripsi
    for (let i = 0; i < key; i++)
        for (let j = 0; j < cipher.length; j++)
            if (rail[i][j] == '*' && index < cipher.length) 
                rail[i][j] = cipher[index++]; // Mengisi matriks dengan karakter pesan terenkripsi
    
    let result = '';
    row = 0, col = 0;
    // Membaca Teks Terdekripsi dari Matriks Rail
    for (let i = 0; i < cipher.length; i++) {
        if (row == 0) dir_down = true;
        if (row == key - 1) dir_down = false;
    
        if (rail[row][col] != '*') result += rail[row][col++];
    
        dir_down ? row++ : row--;
    }
    
    return result;
}

function superEncrypt(plaintext, key){
    let caesar = caesarCipherEncrypt(plaintext, key);
    console.log(caesar);
    let scytale = scytaleCipherEncrypt(caesar, key);
    console.log(scytale);
    let ciphertext = railFenceEncrypt(scytale, key);
    console.log(ciphertext);
    return ciphertext;
}

function superDecrypt(ciphertext, key){
        let scytale = railFenceDecrypt(ciphertext, key);
        console.log(scytale);
        let caesar = scytaleCipherDecrypt(scytale, key);
        console.log(caesar);
        let plaintext = caesarCipherDecrypt(caesar, key);
        console.log(plaintext);


    return plaintext;
}