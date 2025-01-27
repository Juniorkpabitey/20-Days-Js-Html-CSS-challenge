const inputs = document.querySelectorAll('.css-control input');

inputs.forEach(input => input.addEventListener('change', update));
//inputs.forEach(input => input.addEventListener())

//inputs.forEach(input => input.addEventListener("change", update))

function update(){
    const suffixData = this.dataset.sizing || "";
    document.documentElement.style.setProperty(
        `--${this.name}`,
        this.value + suffixData
    );
    // const suffix = this.dataset.sizing || '';
    // document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    // console.log(this.value);
    // console.log(this.name);
    // console.log(this.dataset.sizing);
}