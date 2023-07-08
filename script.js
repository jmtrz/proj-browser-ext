

async function fetchdata() {
    const url = 'https://concerts-artists-events-tracker.p.rapidapi.com/venue/past?name=Hollywood%20bowl&minDate=2022-01-25&maxDate=2023-01-30&page=1';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f5984bd54dmshb2e94207efdc09dp19e6b6jsn611f37f7bf31',
            'X-RapidAPI-Host': 'concerts-artists-events-tracker.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }

    document.getElementById("concerts").innerHTML = result.data.map(item => `<li>${item.name}</li>`).join('');
}