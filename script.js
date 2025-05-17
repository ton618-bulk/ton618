document.getElementById('drawButton').addEventListener('click', () => {
  const total = 25;
  const count = 4;
  const numbers = [];

  while (numbers.length < count) {
    const rand = Math.floor(Math.random() * total) + 1;
    if (!numbers.includes(rand)) {
      numbers.push(rand);
    }
  }

  numbers.sort((a, b) => a - b);

  Swal.fire({
    title: '당번 추첨 결과',
    text: `당번 번호: ${numbers.join(', ')}`,
    icon: 'success',
    confirmButtonText: '확인',
    customClass: {
      confirmButton: 'btn btn-primary'
    }
  });
});