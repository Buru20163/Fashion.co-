let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

window.addEventListener('scroll', () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
});


// Selecting filter buttons
let filterBtns = document.querySelectorAll('.filter-btn');

// Adding click event listener to each filter button
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Get the filter value from the data-filter attribute
        let filterValue = btn.getAttribute('data-filter');

        // Loop through all rows in n-product section
        document.querySelectorAll('.n-content .row').forEach(row => {
            // Get the category value from the data-category attribute
            let category = row.getAttribute('data-category');
            
            // Check if the filterValue is 'all' or matches the row's category
            if (filterValue === 'all' || filterValue === category) {
                row.style.display = 'block'; // Show the row
            } else {
                row.style.display = 'none'; // Hide the row
            }
        });

        // Loop through all columns in selling section
        document.querySelectorAll('.selling-content .col').forEach(col => {
            // Get the category value from the data-category attribute
            let category = col.getAttribute('data-category');
            
            // Check if the filterValue is 'all' or matches the column's category
            if (filterValue === 'all' || filterValue === category) {
                col.style.display = 'block'; // Show the column
            } else {
                col.style.display = 'none'; // Hide the column
            }
        });
    });
});
