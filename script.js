function scrollToSection(sectionId) {
    document.querySelector(`#${sectionId}`).scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
         navToggle.querySelector('i').classList.toggle('fa-bars')
        navToggle.querySelector('i').classList.toggle('fa-times')
    });


        // Event Delegation for product clicks
        const productList = document.querySelector('.product-list');
        productList.addEventListener('click', (event) => {
            const productElement = event.target.closest('.product');
            if (productElement) {
                const productId = parseInt(productElement.getAttribute('data-product-id'));
                showProductDetails(productId);
            }
        });


});


function showProductDetails(productId) {
    const details = [
        {
            id: 1,
            title: 'Product 1',
            image: '1.jpg',
            description: 'This is a description for Adtiya Chut 1. It is an amazing product with insane features!',
            price: '2rs/-'
        },
        {
            id: 2,
            title: 'Product 2',
            image: '2.jpg',
            description: 'This is a description for Aditya Aryan Lahan Chut 2. It is an amazing product with insane features!',
            price: '200rs/-'
        },
        {
             id: 3,
            title: 'Product 3',
            image: '3.jpg',
            description: 'This is a description for Barnav (Best Seller) 3. It is an amazing product with insane features!',
            price: '100rs/-'
        }
    ];

    const product = details.find(product => product.id === productId);

    if (product) {
        const modal = document.getElementById('product-details')
        document.getElementById('product-title').textContent = product.title;
        document.getElementById('product-image').src = product.image;
        document.getElementById('product-description').textContent = product.description;
        document.getElementById('product-price').textContent = `Price: ${product.price}`;
        modal.style.display = 'flex';
          // Add a class for animation purposes (optional)
         document.querySelector('.modal-content').style.transform = 'translateY(0)';
        // Add event listener to close modal if clicking outside of it
        modal.addEventListener('click', closeModalOutsideClick);

    }
}

function closeProductDetails() {
        const modal = document.getElementById('product-details');
     modal.style.display = 'none';
         // Reset modal content's transform for the animation
    document.querySelector('.modal-content').style.transform = 'translateY(-20px)';
        modal.removeEventListener('click', closeModalOutsideClick);
}

function closeModalOutsideClick(event) {
    const modalContent = document.querySelector('.modal-content');
        if (!modalContent.contains(event.target)) {
        closeProductDetails();
    }
}

function addToCart() {
    alert('Product added to cart!');
}