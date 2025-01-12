// script.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const dob = document.getElementById('dob').value;
        const service = document.getElementById('service').value;
        const date = document.getElementById('date').value;

        if (name && dob && service && date) {
            alert(`Pendaftaran berhasil!\n\nNama: ${name}\nTanggal Lahir: ${dob}\nLayanan: ${service}\nTanggal Kunjungan: ${date}`);
            form.reset();
        } else {
            alert('Harap isi semua kolom sebelum mendaftar.');
        }
    });
});