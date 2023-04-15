import requests
from bs4 import BeautifulSoup
import time
import json

url = "https://finance.yahoo.com/commodities/"

api_endpoint = "http://localhost:7070/api/Commodity/commodity"

# while True:
response = requests.get(url)
page_content = response.content

soup = BeautifulSoup(page_content, "html.parser")

commodity_rows = soup.select("table tbody tr")

commodity_data_list = []

for row in commodity_rows:
    cells = row.select("td")

    if len(cells) >= 3:
        symbol = cells[0].text.strip()
        name = cells[1].text.strip()
        price = cells[2].text.strip()
        change = cells[4].text.strip().replace("+", "").replace("-", "")
        per_change = cells[5].text.strip().replace("+", "").replace("-", "").replace("%", "")
        volume = cells[6].text.strip()

        commodity_data_list.append(
            {
                "symbol":symbol,
                "name": name,
                "price": price,
                "change": change,
                "per_change": per_change,
                "volume": volume
            }
        )

commodity_data_json = json.dumps(commodity_data_list)

print("commodity_data_json : ",commodity_data_json)
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}

# Send the POST request with the JSON data
response = requests.post(api_endpoint, data=commodity_data_json, headers=headers)

print("response ; ",response)
print(response.status_code)
print(response.content)
    # time.sleep(60)
