const btn = document.querySelector('#btn');
const buttons = document.querySelectorAll('button');
const container = document.querySelector('#container');
const html = document.querySelector('html');
html.style.cssText = 'background-color: #333';
const redPara = document.createElement('p');
redPara.classList.toggle('redPara');
const blueH3 = document.createElement('h3');
blueH3.classList.toggle('blueH3');
const blackPink = document.createElement('div');
blackPink.classList.toggle('blackPink');
const h1 = document.createElement('h1');
const para = document.createElement('p');
blackPink.style.cssText = 'border: 1px black solid; background-color: pink';
blueH3.style.cssText = 'color: lightblue';
redPara.style.cssText = 'color: red';
blueH3.textContent = 'Test';
redPara.textContent = 'This is red!';
h1.textContent = "I'm in a div";
para.textContent = 'ME TOO!';
container.appendChild(redPara);
container.appendChild(blueH3);
container.appendChild(blackPink);
blackPink.appendChild(h1);
blackPink.appendChild(para);
buttons.forEach((button) =>  {
    button.addEventListener('dblclick', (e) => {
        e.target.style.cssText = 'background: red; color: black';
    })
})

buttons.forEach((button) =>  {
    button.addEventListener('click', (e) => {
        e.target.style.cssText = 'background: lightblue; color: white';
    })
})

