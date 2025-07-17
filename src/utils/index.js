export const getRandomColor = () => {
    const letters = '0123456789abcdef';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

export const formatCurrency = (amount) => {
    if (typeof amount !== 'number') {
        throw new Error('Amount must be a number');
    }
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    }).format(amount);
};

export const formatDate = (date) => {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return `${months[date.getMonth()]} ${String(date.getDate()).padStart(2, '0')}, ${date.getFullYear()}`;
};

export const getInitials = (name) => {
    if (!name || typeof name !== 'string') {
        return '';
    }
    const parts = name.split(' ');
    if (parts.length === 0) {
        return '';
    }
    const initials = parts.map(part => part.charAt(0).toUpperCase()).join('');
    return initials;
}
