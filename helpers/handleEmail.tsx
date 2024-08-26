export const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

export const handleEmail = () => {
    const toEmail = 'juanbautistaliendo1@gmail.com';
    const subject = 'Servicios web';
    const body = `Hola, me gustaría consultarte acerca de tus servicios web ... `;

    if (isMobile()) {
        const mailtoLink = `mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    } else {
        const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${toEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(gmailLink, '_blank');
    }
};