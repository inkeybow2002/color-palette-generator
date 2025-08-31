// Utility functions for color manipulation and generation

export const randomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

export const isValidHex = (hex) => {
    return /^#[0-9A-F]{6}$/i.test(hex);
};
