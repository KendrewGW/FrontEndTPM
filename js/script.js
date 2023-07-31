// ambil elemen form dan elemen input
const form = document.querySelector('form');
const uname = document.querySelector('#uname');
const password = document.querySelectorAll('.isian[type="password"]');
const submitBtn = document.querySelector('#submit');

// buat event listener untuk submit button
submitBtn.addEventListener('click', (event) => {
  event.preventDefault(); // mencegah form untuk langsung ter-submit
  if (validateForm()) {
    form.submit(); // submit form jika validasi sukses
  }
});

// fungsi untuk melakukan validasi
function validateForm() {
  let isValid = true;

  // validasi nama team
  if (uname.value.trim() === '') {
    isValid = false;
    alert('Nama Team tidak boleh kosong!');
    uname.focus();
  }

  // validasi password
  if (password[0].value.trim() === '') {
    isValid = false;
    alert('Password tidak boleh kosong!');
    password[0].focus();
  } else if (password[0].value !== password[1].value) {
    isValid = false;
    alert('Password dan Konfirmasi Password harus sama!');
    password[1].focus();
  }

  // validasi binusian atau non-binusian
  const binusInput = document.querySelectorAll('.binus__input');
  let isChecked = false;
  for (let i = 0; i < binusInput.length; i++) {
    if (binusInput[i].checked) {
      isChecked = true;
      break;
    }
  }
  if (!isChecked) {
    isValid = false;
    alert('Pilih status Binusian atau Non-Binusian!');
  }

  return isValid;
}