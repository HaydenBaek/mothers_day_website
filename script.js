document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('cardForm');
  const cardWrapper = document.getElementById('cardWrapper');
  const card = document.getElementById('card');
  const dearMom = document.getElementById('dearMom');
  const cardMessage = document.getElementById('cardMessage');
  const loveFrom = document.getElementById('loveFrom');
  const downloadBtn = document.getElementById('downloadBtn');
  const goBackBtn = document.getElementById('goBackBtn');




  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('yourName').value;
    const mom = document.getElementById('momName').value;
    const message = document.getElementById('message').value;

    
    dearMom.textContent = `Dear ${mom},`;
    cardMessage.textContent = message;
    loveFrom.textContent = `Love, ${name}`;



    form.style.display = 'none';
    cardWrapper.style.display = 'flex';
  });

  

  goBackBtn.addEventListener('click', () => {
    form.style.display = 'flex'; 
    cardWrapper.style.display = 'none';
  });


  downloadBtn.addEventListener('click', () => {
    downloadBtn.style.display = 'none';
    goBackBtn.style.display = 'none';

    html2canvas(card, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const { jsPDF } = window.jspdf;

      const pdf = new jsPDF('p', 'pt', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      const imgWidth = 400;
      const imgHeight = canvas.height * (imgWidth / canvas.width);
      const x = (pageWidth - imgWidth) / 2;
      const y = (pageHeight - imgHeight) / 2;



      pdf.addImage(imgData, 'PNG', x, y, imgWidth, imgHeight);
      pdf.save('mothers-day-card.pdf');



      downloadBtn.style.display = 'inline-block';
      goBackBtn.style.display = 'inline-block';
    });
  });
});
