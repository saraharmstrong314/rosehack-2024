import requests
import json
import prettytable
import pandas as pd
import os
from dotenv import load_dotenv

# Access API key
load_dotenv()
api_key = os.getenv("API_KEY")

headers = {'Authorization': f'Bearer {api_key}', 
           'Content-type': 'application/json'}
food_data_ids = ['CUUR0000SAF', 'CUUR0000SAF11', 'CUUR0000SAF111', 'CUUR0000SAF112', 'CUUR0000SAF113', 'CUUR0000SEFJ', 
                 'CUUR0000SEFV01', 'CUUR0000SEFV02', 'CUUR0000SAF114', 'CUUR0000SAF115', 'CUUR0000SEFV']
utility_data_ids = ['CUUR0000SA0E', 'CUUR0000SEHF01', 'CUUR0000SEHF02', 'CUUR0000SETB01', 'CUUR0000SAE2', 'CUUR0000SAA',
                    'CUUR0000SAR']
healthcare_data_ids = ['CUUR0000SAM', 'CUUR0000SEMD01', 'CUUR0000SEMC01', 'CUUR0000SEMF01']
major_purchases_data_ids = ['CUUR0000SAH', 'CUUR0000SAH1', 'CUUR0000SAE1', 'CUUR0000SAT', 'CUUR0000SETA01', 'CUUR0000SETA02']
file_number = 1
# edit seriesid to access certain files
data = json.dumps({"seriesid": major_purchases_data_ids,"startyear":"2013", "endyear":"2023", "registrationkey": api_key})
p = requests.post('https://api.bls.gov/publicAPI/v2/timeseries/data/', data=data, headers=headers)
json_data = json.loads(p.text)
# prettytable useful to test output before converting to json
for series in json_data['Results']['series']:
    table = prettytable.PrettyTable(["series id","year","period","value"]) #,"footnotes"])
    seriesId = series['seriesID']
    for item in series['data']:
        year = item['year']
        period = item['period']
        value = item['value']
        # footnotes=""
        # for footnote in item['footnotes']:
        #     if footnote:
        #         footnotes = footnotes + footnote['text'] + ','
        if 'M01' <= period <= 'M12':
            table.add_row([seriesId,year,period,value]) #footnotes[0:-1]])
    # output = open(seriesId + '.txt','w')
    # output.write(table.get_string())
    # output.close()

    # convert table to json format
    json_string = table.get_json_string()
    json_data_ = json.loads(json_string)
    # edit filename with category the data belongs to
    filename = 'data/major_purchases_data' + str(file_number) + '.json'
    with open(filename, 'w') as json_file:
        json.dump(json_data_, json_file)
    file_number += 1

    # convert json to dataframe
    # header = json_data[0]
    # data = json_data[1:]
    # df = pd.DataFrame(data, columns=header)
    # print(df)