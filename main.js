function updateCardWidth() {
    const windowWidth = window.innerWidth;

    if (windowWidth <= 800) {
        // 가로 길이가 800px 이하일 때
        const adjustedWidth = Math.floor(windowWidth - 90);
        const Nw = 1;
        const Ntw = Math.floor(adjustedWidth - 20);
        const Nnw = Math.floor(Ntw / Nw);
        const Nnh = Math.floor(Nnw / 3 * 2);

        document.querySelectorAll('.card').forEach(element => {
            element.style.width = Nnw + 'px';
            element.style.height = Nnh + 'px';
        });

        document.querySelectorAll('.card_img').forEach(element => {
            element.style.width = (Nnw - 20) + 'px';
            element.style.height = (Nnh - 20) + 'px';
            element.style.objectFit = 'contain';
            element.style.objectPosition = 'center';
        });

        console.log('Window Width:', windowWidth);
        console.log('Adjusted Width:', adjustedWidth);
        console.log('Nw:', Nw);
        console.log('Nnw:', Nnw);
    } else {
        // 가로 길이가 800px 초과일 때
        const adjustedWidth = Math.floor(windowWidth - 100);
        const Nw = Math.floor(adjustedWidth / 720);
        const Ntw = Math.floor(adjustedWidth - (Nw + 1) * 40 + 10);
        const Nnw = Math.floor(Ntw / Nw);
        const Nnh = Math.floor(Nnw / 1984 * 1386);

        document.querySelectorAll('.card').forEach(element => {
            element.style.width = Nnw + 'px';
            element.style.height = Nnh + 'px';
        });

        document.querySelectorAll('.card_img').forEach(element => {
            element.style.width = (Nnw - 20) + 'px';
            element.style.height = (Nnh - 20) + 'px';
            element.style.objectFit = 'contain';
            element.style.objectPosition = 'center';
        });

        console.log('Window Width:', windowWidth);
        console.log('Adjusted Width:', adjustedWidth);
        console.log('Nw:', Nw);
        console.log('Nnw:', Nnw);
    }
}

updateCardWidth();
window.addEventListener('resize', updateCardWidth);

function newPage(adress) {
    window.location.href = adress;
}
