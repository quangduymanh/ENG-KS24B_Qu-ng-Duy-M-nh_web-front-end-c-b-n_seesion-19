let char = prompt("Nhập một ký tự: ");
if (char.length === 1 && (char.toLowerCase() !== char.toUpperCase())) {
    document.write(`"${char}" là một chữ cái.`);
} else {
    document.write(`"${char}" không phải là một chữ cái.`);
}