import requests
import json
import prettytable
import pandas as pd
headers = {'Content-type': 'application/json'}
data = json.dumps({"seriesid": ['CUUR0000SA0'],"startyear":"2011", "endyear":"2023"})
p = requests.post('https://api.bls.gov/publicAPI/v2/timeseries/data/', data=data, headers=headers)
json_data = json.loads(p.text)
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
    output = open(seriesId + '.txt','w')
    output.write(table.get_string())
    output.close()

json_string = table.get_json_string()
print(json_string)
json_data = json.loads(json_string)

header = json_data[0]
data = json_data[1:]

df = pd.DataFrame(data, columns=header)
print(df)