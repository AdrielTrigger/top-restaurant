const renderContactForm = (container) => {
    
    let form = document.createElement('form');

    let nameSpace = document.createElement('input');
    nameSpace.style.setProperty('type', 'text');

    let feedback = document.createElement('input');
    feedback.style.setProperty('type', 'text');

    let nameLabel = document.createElement('label');
    nameLabel.innerHTML = 'Your Name:';
    let fbLabel = document.createElement('label');
    fbLabel.innerHTML = 'Your feedback:';

    let formItems = [nameLabel,nameSpace,fbLabel,feedback];

    let i = 0;

    while (i < formItems.length) {
        form.appendChild(formItems[i]);
        i++;
    }

    container.appendChild(form);

}

export { renderContactForm }