    const filterButtons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.work-grid .card');
    const searchInput = document.querySelector('.search-input');

    let activeFilter = 'all'; // default filter

    function applyFilters() {
        const searchValue = searchInput.value.toLowerCase();

        cards.forEach(card => {
            const tech = card.getAttribute('data-tech').toLowerCase();
            const text = card.innerText.toLowerCase();

            const matchesFilter = activeFilter === 'all' || tech.includes(activeFilter);
            const matchesSearch = text.includes(searchValue);

            if (matchesFilter && matchesSearch) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            activeFilter = button.textContent.toLowerCase();

            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            applyFilters();
        });
    });

    // Live search event
    searchInput.addEventListener('keyup', applyFilters);

