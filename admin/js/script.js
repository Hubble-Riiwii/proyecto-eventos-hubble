const selectEl = document.getElementById('eventSelect');
const deleteBtn = document.getElementById('deleteBtn');
const clearSelectionBtn = document.getElementById('clearSelectionBtn');
const feedback = document.getElementById('feedback');

function showFeedback(type, message) {
    feedback.className = `alert alert-${type}`;
    feedback.textContent = message;
    feedback.classList.remove('d-none');
    setTimeout(() => feedback.classList.add('d-none'), 3000);
}

clearSelectionBtn.addEventListener('click', () => {
    Array.from(selectEl.options).forEach(opt => (opt.selected = false));
});

deleteBtn.addEventListener('click', async () => {
    const selected = Array.from(selectEl.selectedOptions);
    if (selected.length === 0) {
        showFeedback('warning', 'Selecciona al menos un evento para eliminar.');
        return;
    }

    const names = selected.map(o => o.text).join('\n• ');
    const confirmed = confirm(
        `¿Confirmas eliminar los siguientes eventos?\n\n• ${names}\n\nEsta acción no se puede deshacer.`
    );
    if (!confirmed) return;

    // EJEMPLO: elimina del DOM. Reemplaza este bloque con tu llamada al backend.
    // Por ejemplo: await fetch('/api/eventos', { method: 'DELETE', body: JSON.stringify(ids) })
    selected.forEach(opt => opt.remove());

    showFeedback('success', 'Eventos eliminados correctamente.');
});