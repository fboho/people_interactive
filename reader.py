import csv
import json
with open('card4.xlsx - map labels.csv', 'r') as file:
    reader = csv.reader(file)
    json_big = {}
    curr_state = ''
    for row in reader:
        # print(row)
        if len(row[0]) == 2:
            json_big[row[0]] = {}
            json_big[row[0]]['Grade'] = {}
            json_big[row[0]]['Access'] = {}
            json_big[row[0]]['Campaigns'] = {}
            json_big[row[0]]['Turnout'] = {}
            json_big[row[0]]['Checking'] = {}
            curr_state = row[0]
        else:
            print(row[1])
            k2 = row[1]
            k2 = k2[:-1]
            json_big[curr_state][row[0]][k2] = row[2]



        #check if first element has two chars (if so create a new json & concat to arr)
            #check if first elem has a json elem if so
    with open('data.json', 'w') as outfile:
        json.dump(json_big, outfile)
    
    print(json.dumps(json_big, indent=4))