// Get city info

{
    document.body.style.backgroundColor = "RGB(239, 192, 80)";
    
    //Grab the form
    let form = document.getElementById('city');
    console.log(form)

    //create function to handle submit

    async function handleSubmit(e){
        e.preventDefault();
        let cityName = e.target.cityName.value
        console.log(cityName)

        let city = await getCityInfo(cityName)
        console.group(city)

        await buildCityCard(city);
        e.target.cityName.value = '';
    }


    async function getCityInfo(cityName) {

        try{
            let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=36e4b28b5cab84fb191a88cc77d7322d&units=imperial`)
            let data = await res.json()
            return data
        } catch(e){
            console.error(e)
        }
    }

    async function buildCityCard(city){
        const weatherDisplay = document.getElementById('weatherDisplay');
        
        // current Temp //
        const card = document.createElement('div');
        card.className = 'card';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        rTemp = Math.round(city.main.temp)

        const temp = document.createElement('h5');
        temp.className = 'card-title';
        temp.innerHTML = `Current: ${rTemp}\u00B0`;
        // console.log(rTemp)
        
        // adding h5 to cardBody and cardBody to card
        cardBody.append(temp)
        card.append(cardBody)

        weatherDisplay.append(card)
        // console.log(temp)

        ////////////////////////////////////////////
        ////////////////////////////////////////////
        // High Temp //

        const card2 = document.createElement('div');
        card2.className = 'card';

        const cardBody2 = document.createElement('div');
        cardBody2.className = 'card-body';

        rTemp_max = Math.round(city.main.temp_max)

        const temp2 = document.createElement('h5');
        temp2.className = 'card-title';
        temp2.innerHTML = `High: ${rTemp_max}\u00B0`;
        // console.log(rTemp)
        
        // adding h5 to cardBody and cardBody to card
        cardBody2.append(temp2)
        card2.append(cardBody2)


        weatherDisplay.append(card2)

        // console.log(temp)

        ////////////////////////////////////////////
        ////////////////////////////////////////////
        // Low Temp //
        const card3 = document.createElement('div');
        card3.className = 'card';

        const cardBody3 = document.createElement('div');
        cardBody3.className = 'card-body';

        rTemp_min = Math.round(city.main.temp_min)

        const temp3 = document.createElement('h5');
        temp3.className = 'card-title';
        temp3.innerHTML = `Low: ${rTemp_min}\u00B0`;
        // console.log(rTemp)
        
        // adding h5 to cardBody and cardBody to card
        cardBody3.append(temp3)
        card3.append(cardBody3)



        weatherDisplay.append(card3)
        // console.log(temp)

        ////////////////////////////////////////////
        ////////////////////////////////////////////
        // Feels Like Temp //
        const card4 = document.createElement('div');
        card4.className = 'card';

        const cardBody4 = document.createElement('div');
        cardBody4.className = 'card-body';

        rTemp_feel = Math.round(city.main.feels_like)

        const temp4 = document.createElement('h5');
        temp4.className = 'card-title';
        temp4.innerHTML = `Feels Like: ${rTemp_feel}\u00B0`;
        // console.log(rTemp)
        
        // adding h5 to cardBody and cardBody to card
        cardBody4.append(temp4)
        card4.append(cardBody4)



        weatherDisplay.append(card4)
        // console.log(temp)

   




       
        

    }


    form.addEventListener('submit', handleSubmit)







}