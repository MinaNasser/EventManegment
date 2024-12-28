document.addEventListener('DOMContentLoaded', function() {
    const eventForm = document.getElementById('event-form');
    const recommendationsContainer = document.getElementById('recommendations-container');

    eventForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const eventName = document.getElementById('event-name').value;
        const eventDate = document.getElementById('event-date').value;
        const eventType = document.getElementById('event-type').value;
        const guestCount = document.getElementById('guest-count').value;
        const budget = document.getElementById('budget').value;

        // Here you would typically send this data to a server
        console.log('Event Details:', { eventName, eventDate, eventType, guestCount, budget });

        // For demonstration, we'll generate some mock recommendations
        generateRecommendations(eventType, guestCount, budget);
    });

    function generateRecommendations(eventType, guestCount, budget) {
        // In a real application, these would come from a server based on the event details
        const mockRecommendations = [
            {
                name: "Sofitel Legend Old Cataract",
                type: "Venue",
                image: "old-cataract.jpg",
                description: "Luxury hotel with stunning Nile views"
            },
            {
                name: "Nubian Village Experience",
                type: "Activity",
                image: "nubian-village.jpg",
                description: "Authentic cultural experience for your guests"
            },
            {
                name: "Aswan Catering Co.",
                type: "Catering",
                image: "catering.jpg",
                description: "Delicious local and international cuisine"
            }
        ];

        recommendationsContainer.innerHTML = '';
        mockRecommendations.forEach(rec => {
            const card = document.createElement('div');
            card.className = 'recommendation-card';
            card.innerHTML = `
                <img src="${rec.image}" alt="${rec.name}">
                <h3>${rec.name}</h3>
                <p>${rec.type}</p>
                <p>${rec.description}</p>
                <button class="btn-primary">Learn More</button>
            `;
            recommendationsContainer.appendChild(card);
        });
    }

    // Add click events for planning tools
    const toolCards = document.querySelectorAll('.tool-card');
    toolCards.forEach(card => {
        card.addEventListener('click', function() {
            const toolName = this.querySelector('h3').textContent;
            alert(`Opening ${toolName} tool...`);
            // Here you would typically open the respective tool or navigate to its page
        });
    });
});