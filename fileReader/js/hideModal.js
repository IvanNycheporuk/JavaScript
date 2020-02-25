const hideModal = (e) => {
    if (e.target === modal || e.target.matches('.close-modal')) {
        modal.classList.add('hide');
    }
}