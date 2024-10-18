function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendCharacter(character) {
    document.getElementById('display').value += character;
}

function toggleSign() {
    const display = document.getElementById('display');
    const currentValue = display.value;

    // Cek jika display memiliki nilai
    if (currentValue) {
        // Ubah nilai menjadi angka
        let newValue = parseFloat(currentValue);
        // Kalikan dengan -1 untuk mengubah tanda
        newValue = newValue * -1;
        // Set nilai baru ke display
        display.value = newValue;
    }
}

function calculate() {
    const display = document.getElementById('display');
    try {
        // Mengganti 'x' dengan '*' untuk operasi perkalian dan '÷' dengan '/' untuk pembagian
        let expression = display.value.replace(/x/g, '*').replace(/÷/g, '/');

        // Cek apakah ada persen dalam ekspresi
        if (expression.includes('%')) {
            // Split berdasarkan persen
            const parts = expression.split('%');
            const base = parseFloat(parts[0]); // Angka sebelum persen
            const percent = parseFloat(parts[1]); // Angka setelah persen

            // Jika ada angka sebelum persen, hitung persentasenya
            if (!isNaN(base) && !isNaN(percent)) {
                const result = (base * percent) / 100; // Hitung persen
                display.value = result; // Set hasil ke display
                return; // Keluar dari fungsi
            }
        }

        // Evaluasi ekspresi tanpa persen
        const result = eval(expression);
        // Set hasil ke display
        display.value = result;

    } catch (error) {
        // Tangani error jika ada
        display.value = 'Error';
    }
}
