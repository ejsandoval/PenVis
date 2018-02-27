import json
import csv
import os

fileNames = []
path = 'data/contexto-general/ambiental/ContextoAmbiental'

with open(path+'-Meta.csv', newline='', encoding="utf-8") as csvfile:
    reader = csv.reader(csvfile)
    data = []
    rownum = 0
    for row in reader:
        if rownum == 0:
            header = row
        else:
            colnum = 0
            datum = {}
            for col in row:
                #s = col.encode('utf8')
                #print(s)
                if header[colnum] in ['nombre']:
                    fileNames.append(col)
                datum[header[colnum]]=col
                colnum += 1
            data.append(datum)
        rownum += 1
    with open(path+'-Meta.json', 'w', encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False)

for fileName in fileNames:
    if fileName == "HuellaEcologica":
        with open(path+"-"+fileName+'.csv', newline='', encoding="utf-8") as csvfile:
            reader = csv.reader(csvfile)
            data = []
            rownum = 0
            for row in reader:
                if rownum == 0:
                    header = row
                else:
                    colnum = 0
                    datum1 = {}
                    datum2 = {}
                    for col in row:
                        if header[colnum] in ['year']:
                            datum1[header[colnum]] = int(col)
                            datum1["type"]=header[colnum+1]
                            datum1["value"]=float(row[colnum+1])
                            datum2[header[colnum]] = int(col)
                            datum2["type"]=header[colnum+2]
                            datum2["value"]=float(row[colnum+2])
                        colnum += 1
                    data.append(datum1)
                    data.append(datum2)
                rownum += 1
            with open(path+"-"+fileName+'.json', 'w', encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False)

    if fileName == "EmisionCO2percapita":
        with open(path+"-"+fileName+'.csv', newline='', encoding="utf-8") as csvfile:
            reader = csv.reader(csvfile)
            data = []
            rownum = 0
            for row in reader:
                if rownum == 0:
                    header = row
                else:
                    colnum = 0
                    category = ""
                    for col in row:
                        datum = {}
                        if header[colnum] in ['País']:
                            country = col
                        else:
                            datum["country"] = country
                            datum["year"] = int(header[colnum])
                            if col == "..." or col == "":
                                datum["value"]= None
                            else:
                                datum["value"]= float(col.strip())
                                data.append(datum)
                        colnum += 1
                rownum += 1
            with open(path+"-"+fileName+'.json', 'w', encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False)
    
    if fileName == "EmisionCO2PIB":
        with open(path+"-"+fileName+'.csv', newline='', encoding="utf-8") as csvfile:
            reader = csv.reader(csvfile)
            data = []
            rownum = 0
            for row in reader:
                if rownum == 0:
                    header = row
                else:
                    colnum = 0
                    country = ""
                    for col in row:
                        datum = {}
                        if header[colnum] in ['País']:
                            country = col
                        else:
                            datum["country"] = country
                            datum["year"] = int(header[colnum])
                            if col == "..." or col == "":
                                datum["value"]= None
                            else:
                                datum["value"]= float(col.strip())
                                data.append(datum)
                        colnum += 1
                rownum += 1
            with open(path+"-"+fileName+'.json', 'w', encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False)

    if fileName == "ParticipacionpoliticaenMA":
        with open(path+"-"+fileName+'.csv', newline='', encoding="utf-8") as csvfile:
            reader = csv.reader(csvfile)
            data = []
            rownum = 0
            for row in reader:
                if rownum == 0:
                    header = row
                else:
                    colnum = 0
                    activity = ""
                    for col in row:
                        datum = {}
                        if header[colnum] in ['Actividad']:
                            activity = col
                        else:
                            datum["activity"] = activity
                            datum["year"] = header[colnum]
                            if col == "":
                                datum["value"]= None
                            else:
                                datum["value"]= float(col.strip())
                            data.append(datum)
                        colnum += 1
                rownum += 1
            with open(path+"-"+fileName+'.json', 'w', encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False)

    if fileName == "Principalesproblemasambiental":
        with open(path+"-"+fileName+'.csv', newline='', encoding="utf-8") as csvfile:
            reader = csv.reader(csvfile)
            data1 = []
            year1 = ""
            data2 = []
            year2 = ""
            rownum = 0
            for row in reader:
                if rownum == 0:
                    header = row
                else:
                    colnum = 0
                    problem = ""
                    for col in row:
                        datum = {}
                        if header[colnum] in header[0]:
                            problem = col
                        elif header[colnum] in header[1]:
                            datum["problem"] = problem
                            aux = header[colnum].split(" ")
                            year1 = aux[len(aux)-1]
                            if col == "" or col == "--":
                                datum["value"]= None
                            else:
                                datum["value"]= float(col.strip())
                            data1.append(datum)
                        else:
                            aux = header[colnum].split(" ")
                            year2 = aux[len(aux)-1]
                            datum["problem"] = problem
                            datum["year"] = header[colnum]
                            if col == "" or col == "--":
                                datum["value"]= None
                            else:
                                datum["value"]= float(col.strip())
                            data2.append(datum)
                        colnum += 1
                rownum += 1
            with open(path+"-"+fileName+year1+'.json', 'w', encoding="utf-8") as f:
                json.dump(data1, f, ensure_ascii=False)
            with open(path+"-"+fileName+year2+'.json', 'w', encoding="utf-8") as f:
                json.dump(data2, f, ensure_ascii=False)

    if fileName == "Respaldodemedidas":
        with open(path+"-"+fileName+'.csv', newline='', encoding="utf-8") as csvfile:
            reader = csv.reader(csvfile)
            data = []
            rownum = 0
            for row in reader:
                if rownum == 0:
                    header = row
                else:
                    colnum = 0
                    idea = ""
                    for col in row:
                        datum = {}
                        if header[colnum] in header[0]:
                            idea = col
                        else:
                            datum["idea"] = idea
                            datum["opinion"] = header[colnum]
                            if col == "" or col == "--":
                                datum["value"]= None
                            else:
                                datum["value"]= float(col.strip())
                            data.append(datum)
                        colnum += 1
                rownum += 1
            with open(path+"-"+fileName+'.json', 'w', encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False)

    if fileName == "nivelderesponsabilidadcambioclimatico":
        with open(path+"-"+fileName+'.csv', newline='', encoding="utf-8") as csvfile:
            reader = csv.reader(csvfile)
            data = []
            rownum = 0
            for row in reader:
                if rownum == 0:
                    header = row
                else:
                    colnum = 0
                    idea = ""
                    for col in row:
                        datum = {}
                        if header[colnum] in header[0]:
                            group = col
                        else:
                            datum["group"] = group
                            datum["value"]= float(col.strip())
                            data.append(datum)
                        colnum += 1
                rownum += 1
            with open(path+"-"+fileName+'.json', 'w', encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False)


    if fileName == "nivelderesponsabilidadsolucioncambioclimatico":
        with open(path+"-"+fileName+'.csv', newline='', encoding="utf-8") as csvfile:
            reader = csv.reader(csvfile)
            data = []
            rownum = 0
            for row in reader:
                if rownum == 0:
                    header = row
                else:
                    colnum = 0
                    idea = ""
                    for col in row:
                        datum = {}
                        if header[colnum] in header[0]:
                            group = col
                        else:
                            datum["group"] = group
                            datum["value"]= float(col.strip())
                            data.append(datum)
                        colnum += 1
                rownum += 1
            with open(path+"-"+fileName+'.json', 'w', encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False)
