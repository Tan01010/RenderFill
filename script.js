document.getElementById('render-button').addEventListener('click', function() {
  // Get the selected element type and the content
  const elementType = document.getElementById('element-select').value;
  const elementContent = document.getElementById('element-content').value;
  
  // Check if an element type is selected
  if (elementType) {
    // Create the new element
    const newElement = document.createElement(elementType);
    let htmlCode;
    
    switch (elementType) {
      case 'input':
        newElement.setAttribute('placeholder', elementContent);
        newElement.classList.add('input-class');
        htmlCode = `<${elementType} placeholder="${elementContent}">`;
        break;
      case 'button':
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
      case 'h6':
      case 'p':
      case 'small':
      case 'div':
      case 'span':
      case 'li':
      case 'a':
      case 'em':
      case 'strong':
      case 'blockquote':
      case 'code':
      case 'pre':
      case 'label':
        newElement.textContent = elementContent;
        htmlCode = `<${elementType}>${elementContent}</${elementType}>`;
        break;
      case 'img':
        newElement.setAttribute('src', elementContent);
        htmlCode = `<${elementType} src="${elementContent}">`;
        break;
      case 'a':
        newElement.setAttribute('href', elementContent);
        newElement.textContent = elementContent;
        htmlCode = `<${elementType} href="${elementContent}">${elementContent}</${elementType}>`;
        break;
      case 'textarea':
        newElement.textContent = elementContent;
        htmlCode = `<${elementType}>${elementContent}</${elementType}>`;
        break;
      case 'select':
        newElement.innerHTML = `<option>${elementContent}</option>`;
        htmlCode = `<${elementType}><option>${elementContent}</option></${elementType}>`;
        break;
      case 'option':
        newElement.textContent = elementContent;
        htmlCode = `<${elementType}>${elementContent}</${elementType}>`;
        break;
      case 'hr':
      case 'br':
        htmlCode = `<${elementType}>`;
        break;
      case 'ul':
      case 'ol':
      case 'table':
      case 'tr':
      case 'td':
      case 'th':
        newElement.textContent = elementContent;
        htmlCode = `<${elementType}>${elementContent}</${elementType}>`;
        break;
      default:
        newElement.textContent = elementContent;
        htmlCode = `<${elementType}>${elementContent}</${elementType}>`;
        break;
    }
    
    // Append the new element to the result paragraph
    const resultContainer = document.getElementById('result');
    resultContainer.appendChild(newElement);

    // Generate and display the HTML code
    const htmlCodeContainer = document.getElementById('html-code');
    htmlCodeContainer.textContent += htmlCode + '\n';
  } else {
    alert('Please select an element type.');
  }
});

document.getElementById('clear-button').addEventListener('click', function() {
  // Clear the result and HTML code containers
  document.getElementById('result').innerHTML = '';
  document.getElementById('html-code').textContent = '';
});