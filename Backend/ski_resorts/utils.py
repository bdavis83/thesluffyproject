import requests

def get_weather_data(latitude, longitude):
    api_url = f"https://api.weather.gov/points/{latitude},{longitude}"
    headers = {'User-Agent': 'Mozilla/5.0'}
    
    try:
        response = requests.get(api_url, headers=headers)
        
        if response.status_code == 200:
            json_data = response.json()
            forecast_url = json_data['properties']['forecast']
            
            response = requests.get(forecast_url, headers=headers)
            
            if response.status_code == 200:
                json_data = response.json()
                periods = json_data['properties'].get('periods', [])  # Ensure 'periods' is present
                
                # Extract relevant weather information
                relevant_info = []
                for period in periods:
                    relevant_info.append({
                        'startTime': period.get('startTime', ''),
                        'temperature': period.get('temperature', ''),
                        'precipitation': period.get('precipitation', ''),
                        'wind': period.get('windSpeed', ''),
                    })

                return relevant_info
            else:
                print(f"Forecast API request failed with status code: {response.status_code}")
                return None
        else:
            print(f"Initial API request failed with status code: {response.status_code}")
            return None
    except Exception as e:
        print(f"An error occurred: {e}")
        return None

