const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)//letter:当前元素的值 idx:当前元素的索引值 transition-delay:何时进行切换
        .join('')

})
